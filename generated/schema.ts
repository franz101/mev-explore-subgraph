// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Arb extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Arb entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Arb must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Arb", id.toString(), this);
    }
  }

  static load(id: string): Arb | null {
    return changetype<Arb | null>(store.get("Arb", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }

  get smartContract(): string {
    let value = this.get("smartContract");
    return value!.toString();
  }

  set smartContract(value: string) {
    this.set("smartContract", Value.fromString(value));
  }

  get caller(): string {
    let value = this.get("caller");
    return value!.toString();
  }

  set caller(value: string) {
    this.set("caller", Value.fromString(value));
  }

  get logsCount(): i32 {
    let value = this.get("logsCount");
    return value!.toI32();
  }

  set logsCount(value: i32) {
    this.set("logsCount", Value.fromI32(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value!.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get blockTimestamp(): i32 {
    let value = this.get("blockTimestamp");
    return value!.toI32();
  }

  set blockTimestamp(value: i32) {
    this.set("blockTimestamp", Value.fromI32(value));
  }

  get gasUsed(): i32 {
    let value = this.get("gasUsed");
    return value!.toI32();
  }

  set gasUsed(value: i32) {
    this.set("gasUsed", Value.fromI32(value));
  }
}

export class LastArb extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LastArb entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LastArb must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LastArb", id.toString(), this);
    }
  }

  static load(id: string): LastArb | null {
    return changetype<LastArb | null>(store.get("LastArb", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }

  get smartContract(): string {
    let value = this.get("smartContract");
    return value!.toString();
  }

  set smartContract(value: string) {
    this.set("smartContract", Value.fromString(value));
  }

  get caller(): string {
    let value = this.get("caller");
    return value!.toString();
  }

  set caller(value: string) {
    this.set("caller", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value!.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get blockTimestamp(): i32 {
    let value = this.get("blockTimestamp");
    return value!.toI32();
  }

  set blockTimestamp(value: i32) {
    this.set("blockTimestamp", Value.fromI32(value));
  }

  get logsCount(): i32 {
    let value = this.get("logsCount");
    return value!.toI32();
  }

  set logsCount(value: i32) {
    this.set("logsCount", Value.fromI32(value));
  }

  get gasUsed(): i32 {
    let value = this.get("gasUsed");
    return value!.toI32();
  }

  set gasUsed(value: i32) {
    this.set("gasUsed", Value.fromI32(value));
  }
}

export class Bot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Bot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Bot", id.toString(), this);
    }
  }

  static load(id: string): Bot | null {
    return changetype<Bot | null>(store.get("Bot", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get counter(): i32 {
    let value = this.get("counter");
    return value!.toI32();
  }

  set counter(value: i32) {
    this.set("counter", Value.fromI32(value));
  }

  get lastBlockNumber(): i32 {
    let value = this.get("lastBlockNumber");
    return value!.toI32();
  }

  set lastBlockNumber(value: i32) {
    this.set("lastBlockNumber", Value.fromI32(value));
  }

  get lastBlockTimestamp(): i32 {
    let value = this.get("lastBlockTimestamp");
    return value!.toI32();
  }

  set lastBlockTimestamp(value: i32) {
    this.set("lastBlockTimestamp", Value.fromI32(value));
  }
}

export class ArbSignature extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ArbSignature entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ArbSignature must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ArbSignature", id.toString(), this);
    }
  }

  static load(id: string): ArbSignature | null {
    return changetype<ArbSignature | null>(store.get("ArbSignature", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get counter(): i32 {
    let value = this.get("counter");
    return value!.toI32();
  }

  set counter(value: i32) {
    this.set("counter", Value.fromI32(value));
  }

  get lastBlockNumber(): i32 {
    let value = this.get("lastBlockNumber");
    return value!.toI32();
  }

  set lastBlockNumber(value: i32) {
    this.set("lastBlockNumber", Value.fromI32(value));
  }

  get lastBlockTimestamp(): i32 {
    let value = this.get("lastBlockTimestamp");
    return value!.toI32();
  }

  set lastBlockTimestamp(value: i32) {
    this.set("lastBlockTimestamp", Value.fromI32(value));
  }
}

export class UsedSmartContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UsedSmartContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UsedSmartContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UsedSmartContract", id.toString(), this);
    }
  }

  static load(id: string): UsedSmartContract | null {
    return changetype<UsedSmartContract | null>(
      store.get("UsedSmartContract", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get counter(): i32 {
    let value = this.get("counter");
    return value!.toI32();
  }

  set counter(value: i32) {
    this.set("counter", Value.fromI32(value));
  }

  get lastBlockNumber(): i32 {
    let value = this.get("lastBlockNumber");
    return value!.toI32();
  }

  set lastBlockNumber(value: i32) {
    this.set("lastBlockNumber", Value.fromI32(value));
  }

  get lastBlockTimestamp(): i32 {
    let value = this.get("lastBlockTimestamp");
    return value!.toI32();
  }

  set lastBlockTimestamp(value: i32) {
    this.set("lastBlockTimestamp", Value.fromI32(value));
  }
}
