/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../common";

export declare namespace DistributionTypes {
  export type AssetConfigInputStruct = {
    emissionPerSecond: PromiseOrValue<BigNumberish>;
    totalStaked: PromiseOrValue<BigNumberish>;
    underlyingAsset: PromiseOrValue<string>;
  };

  export type AssetConfigInputStructOutput = [BigNumber, BigNumber, string] & {
    emissionPerSecond: BigNumber;
    totalStaked: BigNumber;
    underlyingAsset: string;
  };
}

export interface AaveDistributionManagerInterface extends utils.Interface {
  functions: {
    "DISTRIBUTION_END()": FunctionFragment;
    "EMISSION_MANAGER()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "assets(address)": FunctionFragment;
    "configureAssets((uint128,uint256,address)[])": FunctionFragment;
    "getUserAssetData(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DISTRIBUTION_END"
      | "EMISSION_MANAGER"
      | "PRECISION"
      | "assets"
      | "configureAssets"
      | "getUserAssetData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_END",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EMISSION_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assets",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [DistributionTypes.AssetConfigInputStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMISSION_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;

  events: {
    "AssetConfigUpdated(address,uint256)": EventFragment;
    "AssetIndexUpdated(address,uint256)": EventFragment;
    "UserIndexUpdated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetIndexUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserIndexUpdated"): EventFragment;
}

export interface AssetConfigUpdatedEventObject {
  asset: string;
  emission: BigNumber;
}
export type AssetConfigUpdatedEvent = TypedEvent<
  [string, BigNumber],
  AssetConfigUpdatedEventObject
>;

export type AssetConfigUpdatedEventFilter =
  TypedEventFilter<AssetConfigUpdatedEvent>;

export interface AssetIndexUpdatedEventObject {
  asset: string;
  index: BigNumber;
}
export type AssetIndexUpdatedEvent = TypedEvent<
  [string, BigNumber],
  AssetIndexUpdatedEventObject
>;

export type AssetIndexUpdatedEventFilter =
  TypedEventFilter<AssetIndexUpdatedEvent>;

export interface UserIndexUpdatedEventObject {
  user: string;
  asset: string;
  index: BigNumber;
}
export type UserIndexUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  UserIndexUpdatedEventObject
>;

export type UserIndexUpdatedEventFilter =
  TypedEventFilter<UserIndexUpdatedEvent>;

export interface AaveDistributionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveDistributionManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    PRECISION(overrides?: CallOverrides): Promise<[number]>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        emissionPerSecond: BigNumber;
        lastUpdateTimestamp: BigNumber;
        index: BigNumber;
      }
    >;

    configureAssets(
      assetsConfigInput: DistributionTypes.AssetConfigInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

  EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

  PRECISION(overrides?: CallOverrides): Promise<number>;

  assets(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      emissionPerSecond: BigNumber;
      lastUpdateTimestamp: BigNumber;
      index: BigNumber;
    }
  >;

  configureAssets(
    assetsConfigInput: DistributionTypes.AssetConfigInputStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getUserAssetData(
    user: PromiseOrValue<string>,
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

    PRECISION(overrides?: CallOverrides): Promise<number>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        emissionPerSecond: BigNumber;
        lastUpdateTimestamp: BigNumber;
        index: BigNumber;
      }
    >;

    configureAssets(
      assetsConfigInput: DistributionTypes.AssetConfigInputStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AssetConfigUpdated(address,uint256)"(
      asset?: PromiseOrValue<string> | null,
      emission?: null
    ): AssetConfigUpdatedEventFilter;
    AssetConfigUpdated(
      asset?: PromiseOrValue<string> | null,
      emission?: null
    ): AssetConfigUpdatedEventFilter;

    "AssetIndexUpdated(address,uint256)"(
      asset?: PromiseOrValue<string> | null,
      index?: null
    ): AssetIndexUpdatedEventFilter;
    AssetIndexUpdated(
      asset?: PromiseOrValue<string> | null,
      index?: null
    ): AssetIndexUpdatedEventFilter;

    "UserIndexUpdated(address,address,uint256)"(
      user?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      index?: null
    ): UserIndexUpdatedEventFilter;
    UserIndexUpdated(
      user?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      index?: null
    ): UserIndexUpdatedEventFilter;
  };

  estimateGas: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configureAssets(
      assetsConfigInput: DistributionTypes.AssetConfigInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configureAssets(
      assetsConfigInput: DistributionTypes.AssetConfigInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
