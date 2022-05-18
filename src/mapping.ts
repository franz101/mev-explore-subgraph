import {
  Arb,
  LastArb,
  Bot,
  ArbSignature,
  UsedSmartContract,
} from "../generated/schema";
import { Bytes, BigInt, ethereum, log } from "@graphprotocol/graph-ts";

//Inspiration:
//https://etherscan.io/tx/0x5be636bbfef47c29a2b571f0858bfed0672200e3bb56b61c2a305737e2d9baeb#eventlog

//Start Weth Transfer Topic 1 (bot)
//End Weth Transfer Topic 2 (bot)

const MIN_TRANSFER_COUNT = 6;
const MAX_TRANSFER_COUNT = 22;
const WETH_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

const checkLogCount = (logCount: number): boolean => {
  return logCount > MIN_TRANSFER_COUNT && logCount < MAX_TRANSFER_COUNT;
};

const convertByteStringToHexAddress = (byteString: Bytes): string => {
  return "0x" + byteString.toHexString().slice(-40);
};

export function handleTransfer(event: ethereum.Event): void {
  const blockNumber = event.block.number.toI32();
  const blockTimestamp = event.block.timestamp.toI32();
  if (event.receipt !== null && event.transaction.to !== null) {
    const txHash = event.receipt!.transactionHash.toHexString();
    const smartContractCaller = event.transaction.from.toHexString();
    const smartContractAddress = event.transaction.to!.toHexString();
    let skipEntity = false;
    let arbStarted = false;
    let arbEnded = false;
    const eventLogs = event.receipt!.logs;
    if (checkLogCount(eventLogs.length)) {
      for (let index = 0; index < eventLogs.length; index++) {
        const eventLog = eventLogs[index];
        const eventEmitterAddress = eventLog.address.toHexString();
        for (let j = 1; j < eventLog.topics.length; j++) {
          const topic = eventLog.topics[j];
          const topicAddress = convertByteStringToHexAddress(topic);
          // Skip entities in which the smart contract caller is also in the trade
          if (topicAddress == smartContractCaller) {
            skipEntity = true;
            break;
          }
          if (
            topicAddress == smartContractAddress &&
            eventEmitterAddress == WETH_ADDRESS
          ) {
            arbStarted = true;
          } else if (
            topicAddress == smartContractAddress &&
            j > 1 &&
            arbStarted
          ) {
            log.info("ARB ended", []);
            arbEnded = true;
          }
        }
      }

      if (!skipEntity && arbStarted && arbEnded) {
        let botEntity = Bot.load(smartContractAddress);
        if (!botEntity) {
          botEntity = new Bot(smartContractAddress);
          botEntity.counter = 0;
        }
        botEntity.lastBlockNumber = blockNumber;
        botEntity.lastBlockTimestamp = blockTimestamp;
        botEntity.metadata = "WETH";
        botEntity.counter = botEntity.counter + 1;
        botEntity.save();

        const arbEntity = new Arb(txHash);
        arbEntity.gasUsed = event.receipt!.cumulativeGasUsed.toI32();
        arbEntity.metadata = "WETH";
        arbEntity.txHash = txHash;
        arbEntity.caller = smartContractCaller;
        arbEntity.logsCount = eventLogs.length;
        arbEntity.smartContract = smartContractAddress;
        arbEntity.blockNumber = blockNumber;
        arbEntity.blockTimestamp = blockTimestamp;
        arbEntity.save();

        const lastArbEntity = new LastArb("latest");
        lastArbEntity.gasUsed = event.receipt!.cumulativeGasUsed.toI32();
        lastArbEntity.metadata = "WETH";
        lastArbEntity.txHash = txHash;
        lastArbEntity.logsCount = eventLogs.length;
        lastArbEntity.caller = smartContractCaller;
        lastArbEntity.smartContract = smartContractAddress;
        lastArbEntity.blockNumber = blockNumber;
        lastArbEntity.blockTimestamp = blockTimestamp;
        lastArbEntity.save();

        for (let index = 0; index < eventLogs.length; index++) {
          const eventLog = eventLogs[index];
          const eventEmitterAddress = eventLog.address.toHexString();
          const eventSignature: string = eventLog.topics[0].toHexString();

          let arbSignatureEntity = ArbSignature.load(eventSignature);
          if (!arbSignatureEntity) {
            arbSignatureEntity = new ArbSignature(eventSignature);
            arbSignatureEntity.counter = 0;
          }
          arbSignatureEntity.counter = arbSignatureEntity.counter + 1;
          arbSignatureEntity.metadata = "WETH";
          arbSignatureEntity.lastBlockNumber = blockNumber;
          arbSignatureEntity.lastBlockTimestamp = blockTimestamp;
          arbSignatureEntity.save();

          let usedSmartContractEntity = UsedSmartContract.load(
            eventEmitterAddress
          );
          if (!usedSmartContractEntity) {
            usedSmartContractEntity = new UsedSmartContract(
              eventEmitterAddress
            );
            usedSmartContractEntity.counter = 0;
          }
          usedSmartContractEntity.counter = usedSmartContractEntity.counter + 1;
          usedSmartContractEntity.metadata = "WETH";
          usedSmartContractEntity.lastBlockNumber = blockNumber;
          usedSmartContractEntity.lastBlockTimestamp = blockTimestamp;
          usedSmartContractEntity.save();
        }
      }
    }
  }
}
