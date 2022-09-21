export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type Account = {
  __typename?: 'Account';
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  createdAtBlockNumber: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  inflows: Array<Stream>;
  /**
   * Indicates whether the address/account is a super app.
   *
   */
  isSuperApp: Scalars['Boolean'];
  outflows: Array<Stream>;
  publishedIndexes: Array<Index>;
  receivedTransferEvents: Array<TransferEvent>;
  sentTransferEvents: Array<TransferEvent>;
  subscriptions: Array<IndexSubscription>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountAccountTokenSnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountInflowsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stream_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountOutflowsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stream_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountPublishedIndexesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Index_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountReceivedTransferEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransferEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountSentTransferEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransferEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountSubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IndexSubscription_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountTokenDowngradedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
};


/**
 * Account: A higher order entity created for any addresses which interact with
 * Superfluid contracts.
 *
 */
export type AccountTokenUpgradedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
};

/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data on an account's
 * interaction with a `token`.
 *
 */
export type AccountTokenSnapshot = {
  __typename?: 'AccountTokenSnapshot';
  account: Account;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  /**
   * Balance of `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  balanceUntilUpdatedAt: Scalars['BigInt'];
  flowOperators: Array<FlowOperator>;
  /**
   * ID composed of: accountID-tokenID
   *
   */
  id: Scalars['ID'];
  /**
   * isLiquidationEstimateOptimistic, If `totalSubscriptionsWithUnits > 0`, it is true.
   * Optimistic means that it is the earliest time the user will be liquidated as they may receive ongoing distributions which aren't tracked by the subgraph
   *
   */
  isLiquidationEstimateOptimistic: Scalars['Boolean'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']>;
  token: Token;
  /**
   * The total amount of `token` streamed into this `account` until
   * the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedInUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed from this `account` until
   * the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedOutUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` streamed through this `account` until
   * the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The total amount of `token` this `account` has transferred.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt'];
  /**
   * Counts all currently (as of updatedAt) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt'];
  /**
   * The total net flow rate of the `account` as of `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalNetFlowRate: Scalars['BigInt'];
  /**
   * The number of currently open streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The number of all-time closed streams.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The total outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The current (as of updatedAt) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data on an account's
 * interaction with a `token`.
 *
 */
export type AccountTokenSnapshotAccountTokenSnapshotLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
};


/**
 * AccountTokenSnapshot: An aggregate entity which aggregates data on an account's
 * interaction with a `token`.
 *
 */
export type AccountTokenSnapshotFlowOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowOperator_Filter>;
};

/**
 * AccountTokenSnapshotLog: Historical entries of AccountTokenSnapshot updates.
 *
 */
export type AccountTokenSnapshotLog = {
  __typename?: 'AccountTokenSnapshotLog';
  account: Account;
  accountTokenSnapshot: AccountTokenSnapshot;
  /**
   * Balance of `account` as of `timestamp`/`block`.
   *
   */
  balance: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  /**
   * Optimistic liquidation estimation property.
   *
   */
  maybeCriticalAtTimestamp?: Maybe<Scalars['BigInt']>;
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Token;
  /**
   * The total (as of timestamp) net amount of `token` streamed through this `account` until
   * the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` streamed into this `account` until
   * the `timestamp`/`block`.
   *
   */
  totalAmountStreamedIn: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` streamed from this `account` until
   * the `timestamp`/`block`.
   *
   */
  totalAmountStreamedOut: Scalars['BigInt'];
  /**
   * The total (as of timestamp) amount of `token` this `account` has transferred.
   *
   */
  totalAmountTransferred: Scalars['BigInt'];
  /**
   * Counts all currently (as of timestamp) approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total (as of timestamp) deposit this account has held by the CFA agreement for `account` active streams.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total (as of timestamp) inflow rate (receive flowRate per second) of the `account`.
   *
   */
  totalInflowRate: Scalars['BigInt'];
  /**
   * The total (as of timestamp) net flow rate of the `account` as of `timestamp`/`block`.
   *
   */
  totalNetFlowRate: Scalars['BigInt'];
  /**
   * The current (as of timestamp) number of currently open streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The current (as of timestamp) number of all-time closed streams.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The total (as of timestamp) outflow rate (send flowrate per second) of the `account`.
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The current (as of timestamp) number of subscriptions with units allocated to them tied to this `account`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  transactionHash: Scalars['Bytes'];
  triggeredByEventName: Scalars['String'];
};

export type AccountTokenSnapshotLog_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_Filter>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedIn_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOut?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOut_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum AccountTokenSnapshotLog_OrderBy {
  Account = 'account',
  AccountTokenSnapshot = 'accountTokenSnapshot',
  Balance = 'balance',
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  MaybeCriticalAtTimestamp = 'maybeCriticalAtTimestamp',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TotalAmountStreamed = 'totalAmountStreamed',
  TotalAmountStreamedIn = 'totalAmountStreamedIn',
  TotalAmountStreamedOut = 'totalAmountStreamedOut',
  TotalAmountTransferred = 'totalAmountTransferred',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalInflowRate = 'totalInflowRate',
  TotalNetFlowRate = 'totalNetFlowRate',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TransactionHash = 'transactionHash',
  TriggeredByEventName = 'triggeredByEventName'
}

export type AccountTokenSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  accountTokenSnapshotLogs_?: InputMaybe<AccountTokenSnapshotLog_Filter>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balanceUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  balanceUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperators_?: InputMaybe<FlowOperator_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isLiquidationEstimateOptimistic?: InputMaybe<Scalars['Boolean']>;
  isLiquidationEstimateOptimistic_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLiquidationEstimateOptimistic_not?: InputMaybe<Scalars['Boolean']>;
  isLiquidationEstimateOptimistic_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maybeCriticalAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maybeCriticalAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  maybeCriticalAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalAmountStreamedInUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedInUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedInUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOutUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedOutUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedOutUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalInflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalInflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNetFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalNetFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum AccountTokenSnapshot_OrderBy {
  Account = 'account',
  AccountTokenSnapshotLogs = 'accountTokenSnapshotLogs',
  BalanceUntilUpdatedAt = 'balanceUntilUpdatedAt',
  FlowOperators = 'flowOperators',
  Id = 'id',
  IsLiquidationEstimateOptimistic = 'isLiquidationEstimateOptimistic',
  MaybeCriticalAtTimestamp = 'maybeCriticalAtTimestamp',
  Token = 'token',
  TotalAmountStreamedInUntilUpdatedAt = 'totalAmountStreamedInUntilUpdatedAt',
  TotalAmountStreamedOutUntilUpdatedAt = 'totalAmountStreamedOutUntilUpdatedAt',
  TotalAmountStreamedUntilUpdatedAt = 'totalAmountStreamedUntilUpdatedAt',
  TotalAmountTransferredUntilUpdatedAt = 'totalAmountTransferredUntilUpdatedAt',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalInflowRate = 'totalInflowRate',
  TotalNetFlowRate = 'totalNetFlowRate',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountTokenSnapshots_?: InputMaybe<AccountTokenSnapshot_Filter>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  inflows_?: InputMaybe<Stream_Filter>;
  isSuperApp?: InputMaybe<Scalars['Boolean']>;
  isSuperApp_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSuperApp_not?: InputMaybe<Scalars['Boolean']>;
  isSuperApp_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  outflows_?: InputMaybe<Stream_Filter>;
  publishedIndexes_?: InputMaybe<Index_Filter>;
  receivedTransferEvents_?: InputMaybe<TransferEvent_Filter>;
  sentTransferEvents_?: InputMaybe<TransferEvent_Filter>;
  subscriptions_?: InputMaybe<IndexSubscription_Filter>;
  tokenDowngradedEvents_?: InputMaybe<TokenDowngradedEvent_Filter>;
  tokenUpgradedEvents_?: InputMaybe<TokenUpgradedEvent_Filter>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Account_OrderBy {
  AccountTokenSnapshots = 'accountTokenSnapshots',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  Inflows = 'inflows',
  IsSuperApp = 'isSuperApp',
  Outflows = 'outflows',
  PublishedIndexes = 'publishedIndexes',
  ReceivedTransferEvents = 'receivedTransferEvents',
  SentTransferEvents = 'sentTransferEvents',
  Subscriptions = 'subscriptions',
  TokenDowngradedEvents = 'tokenDowngradedEvents',
  TokenUpgradedEvents = 'tokenUpgradedEvents',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type AgreementClassRegisteredEvent = Event & {
  __typename?: 'AgreementClassRegisteredEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  agreementType: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  code: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AgreementClassRegisteredEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType?: InputMaybe<Scalars['Bytes']>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_not?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AgreementClassRegisteredEvent_OrderBy {
  Addresses = 'addresses',
  AgreementType = 'agreementType',
  BlockNumber = 'blockNumber',
  Code = 'code',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type AgreementClassUpdatedEvent = Event & {
  __typename?: 'AgreementClassUpdatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  agreementType: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  code: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AgreementClassUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType?: InputMaybe<Scalars['Bytes']>;
  agreementType_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementType_not?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementType_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AgreementClassUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  AgreementType = 'agreementType',
  BlockNumber = 'blockNumber',
  Code = 'code',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type AgreementLiquidatedByEvent = Event & {
  __typename?: 'AgreementLiquidatedByEvent';
  /**
   * Holds the token, liquidatorAccount, penaltyAccount and bondAccount addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  agreementClass: Scalars['Bytes'];
  agreementId: Scalars['Bytes'];
  bailoutAmount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  bondAccount: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  liquidatorAccount: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  penaltyAccount: Scalars['Bytes'];
  rewardAmount: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type AgreementLiquidatedByEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass?: InputMaybe<Scalars['Bytes']>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId?: InputMaybe<Scalars['Bytes']>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_not?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bailoutAmount?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bailoutAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_not?: InputMaybe<Scalars['BigInt']>;
  bailoutAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bondAccount?: InputMaybe<Scalars['Bytes']>;
  bondAccount_contains?: InputMaybe<Scalars['Bytes']>;
  bondAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondAccount_not?: InputMaybe<Scalars['Bytes']>;
  bondAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  bondAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  penaltyAccount?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_contains?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  penaltyAccount_not?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  penaltyAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmount?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AgreementLiquidatedByEvent_OrderBy {
  Addresses = 'addresses',
  AgreementClass = 'agreementClass',
  AgreementId = 'agreementId',
  BailoutAmount = 'bailoutAmount',
  BlockNumber = 'blockNumber',
  BondAccount = 'bondAccount',
  GasPrice = 'gasPrice',
  Id = 'id',
  LiquidatorAccount = 'liquidatorAccount',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  PenaltyAccount = 'penaltyAccount',
  RewardAmount = 'rewardAmount',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type AgreementLiquidatedV2Event = Event & {
  __typename?: 'AgreementLiquidatedV2Event';
  /**
   * Holds the token, liquidatorAccount, targetAccount and rewardAmountReceiver addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  agreementClass: Scalars['Bytes'];
  agreementId: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  liquidationType: Scalars['Int'];
  liquidatorAccount: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  /**
   * TO BE DEPRECATED in v2 endpoint - use rewardAmountReceiver instead
   *
   */
  rewardAccount: Scalars['Bytes'];
  rewardAmount: Scalars['BigInt'];
  rewardAmountReceiver: Scalars['Bytes'];
  targetAccount: Scalars['Bytes'];
  targetAccountBalanceDelta: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  version: Scalars['BigInt'];
};

export type AgreementLiquidatedV2Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass?: InputMaybe<Scalars['Bytes']>;
  agreementClass_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementClass_not?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementClass_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId?: InputMaybe<Scalars['Bytes']>;
  agreementId_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  agreementId_not?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_contains?: InputMaybe<Scalars['Bytes']>;
  agreementId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidationType?: InputMaybe<Scalars['Int']>;
  liquidationType_gt?: InputMaybe<Scalars['Int']>;
  liquidationType_gte?: InputMaybe<Scalars['Int']>;
  liquidationType_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationType_lt?: InputMaybe<Scalars['Int']>;
  liquidationType_lte?: InputMaybe<Scalars['Int']>;
  liquidationType_not?: InputMaybe<Scalars['Int']>;
  liquidationType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidatorAccount?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidatorAccount_not?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidatorAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAccount?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAccount_not?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmount?: InputMaybe<Scalars['BigInt']>;
  rewardAmountReceiver?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmountReceiver_not?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAmountReceiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAccount?: InputMaybe<Scalars['Bytes']>;
  targetAccountBalanceDelta?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_gt?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_gte?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAccountBalanceDelta_lt?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_lte?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_not?: InputMaybe<Scalars['BigInt']>;
  targetAccountBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetAccount_contains?: InputMaybe<Scalars['Bytes']>;
  targetAccount_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAccount_not?: InputMaybe<Scalars['Bytes']>;
  targetAccount_not_contains?: InputMaybe<Scalars['Bytes']>;
  targetAccount_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['BigInt']>;
  version_gt?: InputMaybe<Scalars['BigInt']>;
  version_gte?: InputMaybe<Scalars['BigInt']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version_lt?: InputMaybe<Scalars['BigInt']>;
  version_lte?: InputMaybe<Scalars['BigInt']>;
  version_not?: InputMaybe<Scalars['BigInt']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum AgreementLiquidatedV2Event_OrderBy {
  Addresses = 'addresses',
  AgreementClass = 'agreementClass',
  AgreementId = 'agreementId',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LiquidationType = 'liquidationType',
  LiquidatorAccount = 'liquidatorAccount',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  RewardAccount = 'rewardAccount',
  RewardAmount = 'rewardAmount',
  RewardAmountReceiver = 'rewardAmountReceiver',
  TargetAccount = 'targetAccount',
  TargetAccountBalanceDelta = 'targetAccountBalanceDelta',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type AppRegisteredEvent = Event & {
  __typename?: 'AppRegisteredEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  app: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AppRegisteredEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  app?: InputMaybe<Scalars['Bytes']>;
  app_contains?: InputMaybe<Scalars['Bytes']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_not?: InputMaybe<Scalars['Bytes']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AppRegisteredEvent_OrderBy {
  Addresses = 'addresses',
  App = 'app',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BurnedEvent = Event & {
  __typename?: 'BurnedEvent';
  /**
   * Holds the token and from addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  data: Scalars['Bytes'];
  from: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  operator: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type BurnedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BurnedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Data = 'data',
  From = 'from',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Operator = 'operator',
  OperatorData = 'operatorData',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type CfAv1LiquidationPeriodChangedEvent = Event & {
  __typename?: 'CFAv1LiquidationPeriodChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  host: Scalars['Bytes'];
  id: Scalars['ID'];
  isKeySet: Scalars['Boolean'];
  liquidationPeriod: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  superToken: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type CfAv1LiquidationPeriodChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CfAv1LiquidationPeriodChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LiquidationPeriod = 'liquidationPeriod',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type ConfigChangedEvent = Event & {
  __typename?: 'ConfigChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  host: Scalars['Bytes'];
  id: Scalars['ID'];
  isKeySet: Scalars['Boolean'];
  key: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  superToken: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type ConfigChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  key?: InputMaybe<Scalars['Bytes']>;
  key_contains?: InputMaybe<Scalars['Bytes']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_not?: InputMaybe<Scalars['Bytes']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ConfigChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  Key = 'key',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type CustomSuperTokenCreatedEvent = Event & {
  __typename?: 'CustomSuperTokenCreatedEvent';
  /**
   * Holds the token address.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type CustomSuperTokenCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CustomSuperTokenCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/**
 * Event: An interface which is shared by all
 * event entities and contains basic transaction
 * data.
 *
 */
export type Event = {
  /**
   * Holds the addresses for accounts that were impacted by the event.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Event_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperator = {
  __typename?: 'FlowOperator';
  accountTokenSnapshot: AccountTokenSnapshot;
  createdAtBlockNumber: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  flowOperator: Scalars['Bytes'];
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  /**
   * The flow rate allowance granted to the `flowOperator`
   * by the `sender`. This can be reset if the `sender`
   * updates the `flowOperator` flow rate allowance.
   *
   */
  flowRateAllowanceGranted: Scalars['BigInt'];
  /**
   * The remaining flow rate allowance the `flowOperator` has,
   * this will go down every time when `flowOperator` uses it
   * (if they increase flowRate or create a new flow)
   * and can only be reset if the `sender` updates the flow
   * rate allowance.
   *
   */
  flowRateAllowanceRemaining: Scalars['BigInt'];
  /**
   * ID composed of: flowOperator - token - sender
   *
   */
  id: Scalars['ID'];
  /**
   * The permissions granted to the `flowOperator`.
   * Octo bitmask representation.
   *
   */
  permissions: Scalars['Int'];
  sender: Account;
  token: Token;
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


/**
 * FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.
 *
 */
export type FlowOperatorFlowOperatorUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
};

export type FlowOperatorUpdatedEvent = Event & {
  __typename?: 'FlowOperatorUpdatedEvent';
  /**
   * Holds the token, sender, and flowOperator addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  flowOperator: FlowOperator;
  flowRateAllowance: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  /**
   * The permissions granted to the `flowOperator`.
   * Octo bitmask representation.
   *
   */
  permissions: Scalars['Int'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  /**
   * The address of the `token` being streamed.
   *
   */
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type FlowOperatorUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperator?: InputMaybe<Scalars['String']>;
  flowOperator_?: InputMaybe<FlowOperator_Filter>;
  flowOperator_contains?: InputMaybe<Scalars['String']>;
  flowOperator_contains_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_ends_with?: InputMaybe<Scalars['String']>;
  flowOperator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_gt?: InputMaybe<Scalars['String']>;
  flowOperator_gte?: InputMaybe<Scalars['String']>;
  flowOperator_in?: InputMaybe<Array<Scalars['String']>>;
  flowOperator_lt?: InputMaybe<Scalars['String']>;
  flowOperator_lte?: InputMaybe<Scalars['String']>;
  flowOperator_not?: InputMaybe<Scalars['String']>;
  flowOperator_not_contains?: InputMaybe<Scalars['String']>;
  flowOperator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_ends_with?: InputMaybe<Scalars['String']>;
  flowOperator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['String']>>;
  flowOperator_not_starts_with?: InputMaybe<Scalars['String']>;
  flowOperator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flowOperator_starts_with?: InputMaybe<Scalars['String']>;
  flowOperator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  flowRateAllowance?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowance_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  permissions?: InputMaybe<Scalars['Int']>;
  permissions_gt?: InputMaybe<Scalars['Int']>;
  permissions_gte?: InputMaybe<Scalars['Int']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']>>;
  permissions_lt?: InputMaybe<Scalars['Int']>;
  permissions_lte?: InputMaybe<Scalars['Int']>;
  permissions_not?: InputMaybe<Scalars['Int']>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum FlowOperatorUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  FlowOperator = 'flowOperator',
  FlowRateAllowance = 'flowRateAllowance',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Permissions = 'permissions',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type FlowOperator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountTokenSnapshot?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_?: InputMaybe<AccountTokenSnapshot_Filter>;
  accountTokenSnapshot_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_gte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_lt?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_lte?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountTokenSnapshot_not_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with?: InputMaybe<Scalars['String']>;
  accountTokenSnapshot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperator?: InputMaybe<Scalars['Bytes']>;
  flowOperatorUpdatedEvents_?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowRateAllowanceGranted?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceGranted_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceGranted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceRemaining?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_gt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_gte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRateAllowanceRemaining_lt?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_lte?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_not?: InputMaybe<Scalars['BigInt']>;
  flowRateAllowanceRemaining_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  permissions?: InputMaybe<Scalars['Int']>;
  permissions_gt?: InputMaybe<Scalars['Int']>;
  permissions_gte?: InputMaybe<Scalars['Int']>;
  permissions_in?: InputMaybe<Array<Scalars['Int']>>;
  permissions_lt?: InputMaybe<Scalars['Int']>;
  permissions_lte?: InputMaybe<Scalars['Int']>;
  permissions_not?: InputMaybe<Scalars['Int']>;
  permissions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  sender?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum FlowOperator_OrderBy {
  AccountTokenSnapshot = 'accountTokenSnapshot',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  FlowOperator = 'flowOperator',
  FlowOperatorUpdatedEvents = 'flowOperatorUpdatedEvents',
  FlowRateAllowanceGranted = 'flowRateAllowanceGranted',
  FlowRateAllowanceRemaining = 'flowRateAllowanceRemaining',
  Id = 'id',
  Permissions = 'permissions',
  Sender = 'sender',
  Token = 'token',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

/**
 * FlowUpdated: An `Event` entity that is emitted
 * when a flow is created, updated, or deleted.
 *
 */
export type FlowUpdatedEvent = Event & {
  __typename?: 'FlowUpdatedEvent';
  /**
   * Holds the token, sender and receiver addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  /**
   * The address that is triggering the flow update.
   * This will be the zero address until the flowOperator
   * feature is live.
   *
   */
  flowOperator: Scalars['Bytes'];
  /**
   * The flow rate per second.
   *
   */
  flowRate: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  /**
   * The previous flow rate.
   *
   */
  oldFlowRate: Scalars['BigInt'];
  order: Scalars['BigInt'];
  receiver: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  /**
   * The stream entity which is being modified.
   *
   */
  stream: Stream;
  timestamp: Scalars['BigInt'];
  /**
   * The address of the `token` being streamed.
   *
   */
  token: Scalars['Bytes'];
  /**
   * The total amount streamed until the timestamp
   * for the Stream entity linked to this event.
   *
   */
  totalAmountStreamedUntilTimestamp: Scalars['BigInt'];
  totalReceiverFlowRate: Scalars['BigInt'];
  totalSenderFlowRate: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  /**
   * The "type" of the `FlowUpdated` event.
   * 0 = create
   * 1 = update
   * 2 = terminate
   *
   */
  type: Scalars['Int'];
  userData: Scalars['Bytes'];
};

export type FlowUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowOperator?: InputMaybe<Scalars['Bytes']>;
  flowOperator_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowOperator_not?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_contains?: InputMaybe<Scalars['Bytes']>;
  flowOperator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldFlowRate?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  oldFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receiver?: InputMaybe<Scalars['Bytes']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_not?: InputMaybe<Scalars['Bytes']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stream?: InputMaybe<Scalars['String']>;
  stream_?: InputMaybe<Stream_Filter>;
  stream_contains?: InputMaybe<Scalars['String']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_ends_with?: InputMaybe<Scalars['String']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_gt?: InputMaybe<Scalars['String']>;
  stream_gte?: InputMaybe<Scalars['String']>;
  stream_in?: InputMaybe<Array<Scalars['String']>>;
  stream_lt?: InputMaybe<Scalars['String']>;
  stream_lte?: InputMaybe<Scalars['String']>;
  stream_not?: InputMaybe<Scalars['String']>;
  stream_not_contains?: InputMaybe<Scalars['String']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_in?: InputMaybe<Array<Scalars['String']>>;
  stream_not_starts_with?: InputMaybe<Scalars['String']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_starts_with?: InputMaybe<Scalars['String']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  totalAmountStreamedUntilTimestamp?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReceiverFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReceiverFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalReceiverFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSenderFlowRate?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSenderFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalSenderFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<Scalars['Int']>;
  type_gt?: InputMaybe<Scalars['Int']>;
  type_gte?: InputMaybe<Scalars['Int']>;
  type_in?: InputMaybe<Array<Scalars['Int']>>;
  type_lt?: InputMaybe<Scalars['Int']>;
  type_lte?: InputMaybe<Scalars['Int']>;
  type_not?: InputMaybe<Scalars['Int']>;
  type_not_in?: InputMaybe<Array<Scalars['Int']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum FlowUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  Deposit = 'deposit',
  FlowOperator = 'flowOperator',
  FlowRate = 'flowRate',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  OldFlowRate = 'oldFlowRate',
  Order = 'order',
  Receiver = 'receiver',
  Sender = 'sender',
  Stream = 'stream',
  Timestamp = 'timestamp',
  Token = 'token',
  TotalAmountStreamedUntilTimestamp = 'totalAmountStreamedUntilTimestamp',
  TotalReceiverFlowRate = 'totalReceiverFlowRate',
  TotalSenderFlowRate = 'totalSenderFlowRate',
  TransactionHash = 'transactionHash',
  Type = 'type',
  UserData = 'userData'
}

export type GovernanceReplacedEvent = Event & {
  __typename?: 'GovernanceReplacedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  newGovernance: Scalars['Bytes'];
  oldGovernance: Scalars['Bytes'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type GovernanceReplacedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newGovernance?: InputMaybe<Scalars['Bytes']>;
  newGovernance_contains?: InputMaybe<Scalars['Bytes']>;
  newGovernance_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newGovernance_not?: InputMaybe<Scalars['Bytes']>;
  newGovernance_not_contains?: InputMaybe<Scalars['Bytes']>;
  newGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_contains?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_in?: InputMaybe<Array<Scalars['Bytes']>>;
  oldGovernance_not?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_not_contains?: InputMaybe<Scalars['Bytes']>;
  oldGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GovernanceReplacedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  NewGovernance = 'newGovernance',
  OldGovernance = 'oldGovernance',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * Index: An Index higher order entity.
 *
 */
export type Index = {
  __typename?: 'Index';
  createdAtBlockNumber: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  /**
   * ID composed of: publisherAddress-tokenAddress-indexId
   *
   */
  id: Scalars['ID'];
  /**
   * IndexCreated event, there will only be one.
   *
   */
  indexCreatedEvent: IndexCreatedEvent;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  /**
   * indexId is not the id of the `Index` entity.
   *
   */
  indexId: Scalars['BigInt'];
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexValue: Scalars['BigInt'];
  publisher: Account;
  /**
   * The subscriptions of the index, it will include approved, unapproved
   * and deleted subscriptions.
   *
   */
  subscriptions: Array<IndexSubscription>;
  token: Token;
  /**
   * The total amount distributed from this `Index`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The number of subscriptions which have units allocated to them on the `Index`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * The sum of `totalUnitsPending` and `totalUnitsApproved`.
   *
   */
  totalUnits: Scalars['BigInt'];
  /**
   * The number of units allocated by the `Index` that are approved.
   * This refers to the current (as of updatedAt) `totalUnitsApproved`
   * - not all that has ever been approved.
   *
   */
  totalUnitsApproved: Scalars['BigInt'];
  /**
   * The number of units allocated by the `Index` that are pending.
   * This refers to the current (as of updatedAt) `totalUnitsPending`
   * - not all that has ever been pending.
   *
   */
  totalUnitsPending: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexDistributionClaimedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexSubscribedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUnitsUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUnsubscribedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexIndexUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
};


/**
 * Index: An Index higher order entity.
 *
 */
export type IndexSubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IndexSubscription_Filter>;
};

export type IndexCreatedEvent = Event & {
  __typename?: 'IndexCreatedEvent';
  /**
   * Holds the token and publisher addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  index: Index;
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  userData: Scalars['Bytes'];
};

export type IndexCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['String']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum IndexCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type IndexDistributionClaimedEvent = Event & {
  __typename?: 'IndexDistributionClaimedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  index: Index;
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type IndexDistributionClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['String']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum IndexDistributionClaimedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type IndexSubscribedEvent = Event & {
  __typename?: 'IndexSubscribedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  index: Index;
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  userData: Scalars['Bytes'];
};

export type IndexSubscribedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['String']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum IndexSubscribedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular
 * `Index`.
 *
 */
export type IndexSubscription = {
  __typename?: 'IndexSubscription';
  /**
   * Approved subscriptions don't require subscribers to claim tokens that are distributed from
   * the publisher.
   *
   */
  approved: Scalars['Boolean'];
  createdAtBlockNumber: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  /**
   * ID composed of: subscriberAddress-publisherAddress-tokenAddress-IndexId
   *
   */
  id: Scalars['ID'];
  index: Index;
  /**
   * The previous index value - used to calculate `totalAmountReceivedUntilUpdatedAt` field as of the
   * `index.updatedAtTimestamp`. The formula to get this value is:
   * `IndexSubscription.totalAmountReceivedUntilUpdatedAt + ((index.newIndexValue - indexSubscription.indexValueUntilUpdatedAt) * indexSubscription.units)`.
   *
   */
  indexValueUntilUpdatedAt: Scalars['BigInt'];
  subscriber: Account;
  /**
   * IndexSubscription approved events on the subscription.
   *
   */
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  /**
   * The total amount of tokens you've received via IDA until
   * `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountReceivedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * If units is 0, it indicates that the subscription is "deleted". They are no longer
   * subscribed to the index.
   *
   */
  units: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular
 * `Index`.
 *
 */
export type IndexSubscriptionSubscriptionApprovedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular
 * `Index`.
 *
 */
export type IndexSubscriptionSubscriptionDistributionClaimedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular
 * `Index`.
 *
 */
export type IndexSubscriptionSubscriptionRevokedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
};


/**
 * IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular
 * `Index`.
 *
 */
export type IndexSubscriptionSubscriptionUnitsUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
};

export type IndexSubscription_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['String']>;
  indexValueUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValueUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  indexValueUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<Scalars['String']>;
  subscriber_?: InputMaybe<Account_Filter>;
  subscriber_contains?: InputMaybe<Scalars['String']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_gt?: InputMaybe<Scalars['String']>;
  subscriber_gte?: InputMaybe<Scalars['String']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_lt?: InputMaybe<Scalars['String']>;
  subscriber_lte?: InputMaybe<Scalars['String']>;
  subscriber_not?: InputMaybe<Scalars['String']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriptionApprovedEvents_?: InputMaybe<SubscriptionApprovedEvent_Filter>;
  subscriptionDistributionClaimedEvents_?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
  subscriptionRevokedEvents_?: InputMaybe<SubscriptionRevokedEvent_Filter>;
  subscriptionUnitsUpdatedEvents_?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
  totalAmountReceivedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountReceivedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountReceivedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum IndexSubscription_OrderBy {
  Approved = 'approved',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  Index = 'index',
  IndexValueUntilUpdatedAt = 'indexValueUntilUpdatedAt',
  Subscriber = 'subscriber',
  SubscriptionApprovedEvents = 'subscriptionApprovedEvents',
  SubscriptionDistributionClaimedEvents = 'subscriptionDistributionClaimedEvents',
  SubscriptionRevokedEvents = 'subscriptionRevokedEvents',
  SubscriptionUnitsUpdatedEvents = 'subscriptionUnitsUpdatedEvents',
  TotalAmountReceivedUntilUpdatedAt = 'totalAmountReceivedUntilUpdatedAt',
  Units = 'units',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type IndexUnitsUpdatedEvent = Event & {
  __typename?: 'IndexUnitsUpdatedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  index: Index;
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  oldUnits: Scalars['BigInt'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  units: Scalars['BigInt'];
  userData: Scalars['Bytes'];
};

export type IndexUnitsUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['String']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldUnits?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum IndexUnitsUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  OldUnits = 'oldUnits',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Units = 'units',
  UserData = 'userData'
}

export type IndexUnsubscribedEvent = Event & {
  __typename?: 'IndexUnsubscribedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  index: Index;
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  userData: Scalars['Bytes'];
};

export type IndexUnsubscribedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['String']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum IndexUnsubscribedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type IndexUpdatedEvent = Event & {
  __typename?: 'IndexUpdatedEvent';
  /**
   * Holds the token and publisher addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  index: Index;
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  newIndexValue: Scalars['BigInt'];
  oldIndexValue: Scalars['BigInt'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  totalUnitsApproved: Scalars['BigInt'];
  totalUnitsPending: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  userData: Scalars['Bytes'];
};

export type IndexUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['String']>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_?: InputMaybe<Index_Filter>;
  index_contains?: InputMaybe<Scalars['String']>;
  index_contains_nocase?: InputMaybe<Scalars['String']>;
  index_ends_with?: InputMaybe<Scalars['String']>;
  index_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<Scalars['String']>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_not?: InputMaybe<Scalars['String']>;
  index_not_contains?: InputMaybe<Scalars['String']>;
  index_not_contains_nocase?: InputMaybe<Scalars['String']>;
  index_not_ends_with?: InputMaybe<Scalars['String']>;
  index_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index_not_in?: InputMaybe<Array<Scalars['String']>>;
  index_not_starts_with?: InputMaybe<Scalars['String']>;
  index_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  index_starts_with?: InputMaybe<Scalars['String']>;
  index_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newIndexValue?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_gt?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_gte?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newIndexValue_lt?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_lte?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_not?: InputMaybe<Scalars['BigInt']>;
  newIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldIndexValue?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_gt?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_gte?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldIndexValue_lt?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_lte?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_not?: InputMaybe<Scalars['BigInt']>;
  oldIndexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum IndexUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  Index = 'index',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  NewIndexValue = 'newIndexValue',
  OldIndexValue = 'oldIndexValue',
  Order = 'order',
  Publisher = 'publisher',
  Timestamp = 'timestamp',
  Token = 'token',
  TotalUnitsApproved = 'totalUnitsApproved',
  TotalUnitsPending = 'totalUnitsPending',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type Index_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexCreatedEvent?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_?: InputMaybe<IndexCreatedEvent_Filter>;
  indexCreatedEvent_contains?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_ends_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_gt?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_gte?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_in?: InputMaybe<Array<Scalars['String']>>;
  indexCreatedEvent_lt?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_lte?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_contains?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexCreatedEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_starts_with?: InputMaybe<Scalars['String']>;
  indexCreatedEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexDistributionClaimedEvents_?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexSubscribedEvents_?: InputMaybe<IndexSubscribedEvent_Filter>;
  indexUnitsUpdatedEvents_?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
  indexUnsubscribedEvents_?: InputMaybe<IndexUnsubscribedEvent_Filter>;
  indexUpdatedEvents_?: InputMaybe<IndexUpdatedEvent_Filter>;
  indexValue?: InputMaybe<Scalars['BigInt']>;
  indexValue_gt?: InputMaybe<Scalars['BigInt']>;
  indexValue_gte?: InputMaybe<Scalars['BigInt']>;
  indexValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexValue_lt?: InputMaybe<Scalars['BigInt']>;
  indexValue_lte?: InputMaybe<Scalars['BigInt']>;
  indexValue_not?: InputMaybe<Scalars['BigInt']>;
  indexValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['String']>;
  publisher_?: InputMaybe<Account_Filter>;
  publisher_contains?: InputMaybe<Scalars['String']>;
  publisher_contains_nocase?: InputMaybe<Scalars['String']>;
  publisher_ends_with?: InputMaybe<Scalars['String']>;
  publisher_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_gt?: InputMaybe<Scalars['String']>;
  publisher_gte?: InputMaybe<Scalars['String']>;
  publisher_in?: InputMaybe<Array<Scalars['String']>>;
  publisher_lt?: InputMaybe<Scalars['String']>;
  publisher_lte?: InputMaybe<Scalars['String']>;
  publisher_not?: InputMaybe<Scalars['String']>;
  publisher_not_contains?: InputMaybe<Scalars['String']>;
  publisher_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_ends_with?: InputMaybe<Scalars['String']>;
  publisher_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_not_in?: InputMaybe<Array<Scalars['String']>>;
  publisher_not_starts_with?: InputMaybe<Scalars['String']>;
  publisher_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publisher_starts_with?: InputMaybe<Scalars['String']>;
  publisher_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriptions_?: InputMaybe<IndexSubscription_Filter>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalUnits?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsApproved_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsApproved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnitsPending_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not?: InputMaybe<Scalars['BigInt']>;
  totalUnitsPending_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnits_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnits_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not?: InputMaybe<Scalars['BigInt']>;
  totalUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Index_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  IndexCreatedEvent = 'indexCreatedEvent',
  IndexDistributionClaimedEvents = 'indexDistributionClaimedEvents',
  IndexId = 'indexId',
  IndexSubscribedEvents = 'indexSubscribedEvents',
  IndexUnitsUpdatedEvents = 'indexUnitsUpdatedEvents',
  IndexUnsubscribedEvents = 'indexUnsubscribedEvents',
  IndexUpdatedEvents = 'indexUpdatedEvents',
  IndexValue = 'indexValue',
  Publisher = 'publisher',
  Subscriptions = 'subscriptions',
  Token = 'token',
  TotalAmountDistributedUntilUpdatedAt = 'totalAmountDistributedUntilUpdatedAt',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TotalUnits = 'totalUnits',
  TotalUnitsApproved = 'totalUnitsApproved',
  TotalUnitsPending = 'totalUnitsPending',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type JailEvent = Event & {
  __typename?: 'JailEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  app: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  reason: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type JailEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  app?: InputMaybe<Scalars['Bytes']>;
  app_contains?: InputMaybe<Scalars['Bytes']>;
  app_in?: InputMaybe<Array<Scalars['Bytes']>>;
  app_not?: InputMaybe<Scalars['Bytes']>;
  app_not_contains?: InputMaybe<Scalars['Bytes']>;
  app_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reason?: InputMaybe<Scalars['BigInt']>;
  reason_gt?: InputMaybe<Scalars['BigInt']>;
  reason_gte?: InputMaybe<Scalars['BigInt']>;
  reason_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reason_lt?: InputMaybe<Scalars['BigInt']>;
  reason_lte?: InputMaybe<Scalars['BigInt']>;
  reason_not?: InputMaybe<Scalars['BigInt']>;
  reason_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum JailEvent_OrderBy {
  Addresses = 'addresses',
  App = 'app',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Reason = 'reason',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type MintedEvent = Event & {
  __typename?: 'MintedEvent';
  /**
   * Holds the token, operator and to addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  data: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  operator: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  to: Scalars['Bytes'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MintedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MintedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Data = 'data',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Operator = 'operator',
  OperatorData = 'operatorData',
  Order = 'order',
  Timestamp = 'timestamp',
  To = 'to',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PppConfigurationChangedEvent = Event & {
  __typename?: 'PPPConfigurationChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  host: Scalars['Bytes'];
  id: Scalars['ID'];
  isKeySet: Scalars['Boolean'];
  liquidationPeriod: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  patricianPeriod: Scalars['BigInt'];
  superToken: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type PppConfigurationChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidationPeriod?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidationPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not?: InputMaybe<Scalars['BigInt']>;
  liquidationPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  patricianPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_not?: InputMaybe<Scalars['BigInt']>;
  patricianPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum PppConfigurationChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LiquidationPeriod = 'liquidationPeriod',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  PatricianPeriod = 'patricianPeriod',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accounts: Array<Account>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CfAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CfAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  flowOperators: Array<FlowOperator>;
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  index?: Maybe<Index>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexes: Array<Index>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  pppconfigurationChangedEvent?: Maybe<PppConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PppConfigurationChangedEvent>;
  resolverEntries: Array<ResolverEntry>;
  resolverEntry?: Maybe<ResolverEntry>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  sfmeta?: Maybe<SfMeta>;
  sfmetas: Array<SfMeta>;
  stream?: Maybe<Stream>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  streams: Array<Stream>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  token?: Maybe<Token>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  tokenStatistics: Array<TokenStatistic>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  tokens: Array<Token>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountTokenSnapshotLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
};


export type QueryAccountTokenSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAgreementClassRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassRegisteredEvent_Filter>;
};


export type QueryAgreementClassUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementClassUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassUpdatedEvent_Filter>;
};


export type QueryAgreementLiquidatedByEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedByEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedByEvent_Filter>;
};


export type QueryAgreementLiquidatedV2EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgreementLiquidatedV2EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedV2Event_Filter>;
};


export type QueryAppRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AppRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppRegisteredEvent_Filter>;
};


export type QueryBurnedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BurnedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnedEvent_Filter>;
};


export type QueryCfav1LiquidationPeriodChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCfav1LiquidationPeriodChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>;
};


export type QueryConfigChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryConfigChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConfigChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConfigChangedEvent_Filter>;
};


export type QueryCustomSuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCustomSuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryFlowOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowOperatorUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
};


export type QueryFlowOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperator_Filter>;
};


export type QueryFlowUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
};


export type QueryGovernanceReplacedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernanceReplacedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceReplacedEvent_Filter>;
};


export type QueryIndexArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexCreatedEvent_Filter>;
};


export type QueryIndexDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
};


export type QueryIndexSubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
};


export type QueryIndexSubscriptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexSubscriptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscription_Filter>;
};


export type QueryIndexUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
};


export type QueryIndexUnsubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUnsubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
};


export type QueryIndexUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
};


export type QueryIndexesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Index_Filter>;
};


export type QueryJailEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryJailEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JailEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JailEvent_Filter>;
};


export type QueryMintedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintedEvent_Filter>;
};


export type QueryPppconfigurationChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPppconfigurationChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PppConfigurationChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PppConfigurationChangedEvent_Filter>;
};


export type QueryResolverEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ResolverEntry_Filter>;
};


export type QueryResolverEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardAddressChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardAddressChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardAddressChangedEvent_Filter>;
};


export type QueryRoleAdminChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChangedEvent_Filter>;
};


export type QueryRoleGrantedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGrantedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGrantedEvent_Filter>;
};


export type QueryRoleRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevokedEvent_Filter>;
};


export type QuerySentEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySentEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SentEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SentEvent_Filter>;
};


export type QuerySetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetEvent_Filter>;
};


export type QuerySfmetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySfmetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SfMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SfMeta_Filter>;
};


export type QueryStreamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamPeriodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamPeriodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamPeriod_Filter>;
};


export type QueryStreamRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamRevision_Filter>;
};


export type QueryStreamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stream_Filter>;
};


export type QuerySubscriptionApprovedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionApprovedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
};


export type QuerySubscriptionDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
};


export type QuerySubscriptionRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
};


export type QuerySubscriptionUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubscriptionUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
};


export type QuerySuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenCreatedEvent_Filter>;
};


export type QuerySuperTokenFactoryUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenFactoryUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>;
};


export type QuerySuperTokenLogicCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_Filter>;
};


export type QuerySuperTokenLogicUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuperTokenLogicUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDowngradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDowngradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
};


export type QueryTokenStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenStatisticLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatisticLog_Filter>;
};


export type QueryTokenStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatistic_Filter>;
};


export type QueryTokenUpgradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenUpgradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type QueryTrustedForwarderChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTrustedForwarderChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustedForwarderChangedEvent_Filter>;
};

export type ResolverEntry = {
  __typename?: 'ResolverEntry';
  createdAtBlockNumber: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  /**
   * ID: the keccak256 hash of the set name
   *
   */
  id: Scalars['ID'];
  isListed: Scalars['Boolean'];
  isToken: Scalars['Boolean'];
  setEvents: Array<SetEvent>;
  targetAddress: Scalars['Bytes'];
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


export type ResolverEntrySetEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SetEvent_Filter>;
};

export type ResolverEntry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed_not?: InputMaybe<Scalars['Boolean']>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isToken?: InputMaybe<Scalars['Boolean']>;
  isToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isToken_not?: InputMaybe<Scalars['Boolean']>;
  isToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  setEvents_?: InputMaybe<SetEvent_Filter>;
  targetAddress?: InputMaybe<Scalars['Bytes']>;
  targetAddress_contains?: InputMaybe<Scalars['Bytes']>;
  targetAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  targetAddress_not?: InputMaybe<Scalars['Bytes']>;
  targetAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  targetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ResolverEntry_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  IsListed = 'isListed',
  IsToken = 'isToken',
  SetEvents = 'setEvents',
  TargetAddress = 'targetAddress',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type RewardAddressChangedEvent = Event & {
  __typename?: 'RewardAddressChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  host: Scalars['Bytes'];
  id: Scalars['ID'];
  isKeySet: Scalars['Boolean'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  rewardAddress: Scalars['Bytes'];
  superToken: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RewardAddressChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardAddress?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardAddress_not?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RewardAddressChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  RewardAddress = 'rewardAddress',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type RoleAdminChangedEvent = Event & {
  __typename?: 'RoleAdminChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  newAdminRole: Scalars['Bytes'];
  order: Scalars['BigInt'];
  previousAdminRole: Scalars['Bytes'];
  role: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RoleAdminChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newAdminRole?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RoleAdminChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  NewAdminRole = 'newAdminRole',
  Order = 'order',
  PreviousAdminRole = 'previousAdminRole',
  Role = 'role',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type RoleGrantedEvent = Event & {
  __typename?: 'RoleGrantedEvent';
  account: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RoleGrantedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RoleGrantedEvent_OrderBy {
  Account = 'account',
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Role = 'role',
  Sender = 'sender',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type RoleRevokedEvent = Event & {
  __typename?: 'RoleRevokedEvent';
  account: Scalars['Bytes'];
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  role: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RoleRevokedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  role?: InputMaybe<Scalars['Bytes']>;
  role_contains?: InputMaybe<Scalars['Bytes']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']>>;
  role_not?: InputMaybe<Scalars['Bytes']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum RoleRevokedEvent_OrderBy {
  Account = 'account',
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Role = 'role',
  Sender = 'sender',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type SfMeta = {
  __typename?: 'SFMeta';
  blockNumber: Scalars['BigInt'];
  /**
   * The branch the current deployment is coming from.
   *
   */
  branch: Scalars['String'];
  /**
   * Whether the branch is feature/dev/v1.
   *
   */
  configuration: Scalars['String'];
  /**
   * The id is the commit hash.
   *
   */
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
};

export type SfMeta_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  branch?: InputMaybe<Scalars['String']>;
  branch_contains?: InputMaybe<Scalars['String']>;
  branch_contains_nocase?: InputMaybe<Scalars['String']>;
  branch_ends_with?: InputMaybe<Scalars['String']>;
  branch_ends_with_nocase?: InputMaybe<Scalars['String']>;
  branch_gt?: InputMaybe<Scalars['String']>;
  branch_gte?: InputMaybe<Scalars['String']>;
  branch_in?: InputMaybe<Array<Scalars['String']>>;
  branch_lt?: InputMaybe<Scalars['String']>;
  branch_lte?: InputMaybe<Scalars['String']>;
  branch_not?: InputMaybe<Scalars['String']>;
  branch_not_contains?: InputMaybe<Scalars['String']>;
  branch_not_contains_nocase?: InputMaybe<Scalars['String']>;
  branch_not_ends_with?: InputMaybe<Scalars['String']>;
  branch_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  branch_not_in?: InputMaybe<Array<Scalars['String']>>;
  branch_not_starts_with?: InputMaybe<Scalars['String']>;
  branch_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  branch_starts_with?: InputMaybe<Scalars['String']>;
  branch_starts_with_nocase?: InputMaybe<Scalars['String']>;
  configuration?: InputMaybe<Scalars['String']>;
  configuration_contains?: InputMaybe<Scalars['String']>;
  configuration_contains_nocase?: InputMaybe<Scalars['String']>;
  configuration_ends_with?: InputMaybe<Scalars['String']>;
  configuration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_gt?: InputMaybe<Scalars['String']>;
  configuration_gte?: InputMaybe<Scalars['String']>;
  configuration_in?: InputMaybe<Array<Scalars['String']>>;
  configuration_lt?: InputMaybe<Scalars['String']>;
  configuration_lte?: InputMaybe<Scalars['String']>;
  configuration_not?: InputMaybe<Scalars['String']>;
  configuration_not_contains?: InputMaybe<Scalars['String']>;
  configuration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_ends_with?: InputMaybe<Scalars['String']>;
  configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_not_in?: InputMaybe<Array<Scalars['String']>>;
  configuration_not_starts_with?: InputMaybe<Scalars['String']>;
  configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  configuration_starts_with?: InputMaybe<Scalars['String']>;
  configuration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SfMeta_OrderBy {
  BlockNumber = 'blockNumber',
  Branch = 'branch',
  Configuration = 'configuration',
  Id = 'id',
  Timestamp = 'timestamp'
}

export type SentEvent = Event & {
  __typename?: 'SentEvent';
  /**
   * Holds the token, operator and from addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  data: Scalars['Bytes'];
  from: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  operator: Scalars['Bytes'];
  operatorData: Scalars['Bytes'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  to: Scalars['Bytes'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type SentEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operatorData?: InputMaybe<Scalars['Bytes']>;
  operatorData_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operatorData_not?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_contains?: InputMaybe<Scalars['Bytes']>;
  operatorData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SentEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Data = 'data',
  From = 'from',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Operator = 'operator',
  OperatorData = 'operatorData',
  Order = 'order',
  Timestamp = 'timestamp',
  To = 'to',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type SetEvent = Event & {
  __typename?: 'SetEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  /**
   * Because the name property is indexed, the
   * returned value will be a keccak256 hash
   * of the string.
   *
   */
  hashedName: Scalars['Bytes'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  resolverEntry: ResolverEntry;
  target: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SetEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hashedName?: InputMaybe<Scalars['Bytes']>;
  hashedName_contains?: InputMaybe<Scalars['Bytes']>;
  hashedName_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hashedName_not?: InputMaybe<Scalars['Bytes']>;
  hashedName_not_contains?: InputMaybe<Scalars['Bytes']>;
  hashedName_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolverEntry?: InputMaybe<Scalars['String']>;
  resolverEntry_?: InputMaybe<ResolverEntry_Filter>;
  resolverEntry_contains?: InputMaybe<Scalars['String']>;
  resolverEntry_contains_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_ends_with?: InputMaybe<Scalars['String']>;
  resolverEntry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_gt?: InputMaybe<Scalars['String']>;
  resolverEntry_gte?: InputMaybe<Scalars['String']>;
  resolverEntry_in?: InputMaybe<Array<Scalars['String']>>;
  resolverEntry_lt?: InputMaybe<Scalars['String']>;
  resolverEntry_lte?: InputMaybe<Scalars['String']>;
  resolverEntry_not?: InputMaybe<Scalars['String']>;
  resolverEntry_not_contains?: InputMaybe<Scalars['String']>;
  resolverEntry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_ends_with?: InputMaybe<Scalars['String']>;
  resolverEntry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolverEntry_not_starts_with?: InputMaybe<Scalars['String']>;
  resolverEntry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolverEntry_starts_with?: InputMaybe<Scalars['String']>;
  resolverEntry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SetEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  HashedName = 'hashedName',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  ResolverEntry = 'resolverEntry',
  Target = 'target',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is
 * considered "dead". The next stream you create with the same `sender` and `receiver`
 * will create a new stream entity. Therefore, multiple stream entities can be created
 * between the same `sender` and `receiver`.
 *
 */
export type Stream = {
  __typename?: 'Stream';
  createdAtBlockNumber: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  currentFlowRate: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  /**
   * ID composed of: senderAddress-receiverAddress-tokenAddress-revisionIndex
   *
   */
  id: Scalars['ID'];
  receiver: Account;
  sender: Account;
  streamPeriods: Array<StreamPeriod>;
  /**
   * The amount streamed until `updatedAtTimestamp`/`updatedAtBlock`. The formula to get the current streamed
   * amount is:
   * `streamedUntilUpdatedAt + ((currentTime in seconds) - updatedAtTimestamp) * currentFlowRate`.
   *
   */
  streamedUntilUpdatedAt: Scalars['BigInt'];
  token: Token;
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is
 * considered "dead". The next stream you create with the same `sender` and `receiver`
 * will create a new stream entity. Therefore, multiple stream entities can be created
 * between the same `sender` and `receiver`.
 *
 */
export type StreamFlowUpdatedEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
};


/**
 * Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.
 * A account can start a stream, update the flow rate, but when they close it, it is
 * considered "dead". The next stream you create with the same `sender` and `receiver`
 * will create a new stream entity. Therefore, multiple stream entities can be created
 * between the same `sender` and `receiver`.
 *
 */
export type StreamStreamPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StreamPeriod_Filter>;
};

/**
 * StreamPeriod: A higher order entity that represents a period of time in a Stream with a constant flowRate.
 *
 */
export type StreamPeriod = {
  __typename?: 'StreamPeriod';
  deposit: Scalars['BigInt'];
  flowRate: Scalars['BigInt'];
  /**
   * ID composed of: streamId - periodRevisionIndex
   *
   */
  id: Scalars['ID'];
  receiver: Account;
  sender: Account;
  startedAtBlockNumber: Scalars['BigInt'];
  startedAtEvent: FlowUpdatedEvent;
  startedAtTimestamp: Scalars['BigInt'];
  stoppedAtBlockNumber?: Maybe<Scalars['BigInt']>;
  stoppedAtEvent?: Maybe<FlowUpdatedEvent>;
  /**
   * Following values are null until the StreamPeriod is terminated
   *
   */
  stoppedAtTimestamp?: Maybe<Scalars['BigInt']>;
  stream: Stream;
  token: Token;
  totalAmountStreamed?: Maybe<Scalars['BigInt']>;
};

export type StreamPeriod_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate?: InputMaybe<Scalars['BigInt']>;
  flowRate_gt?: InputMaybe<Scalars['BigInt']>;
  flowRate_gte?: InputMaybe<Scalars['BigInt']>;
  flowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowRate_lt?: InputMaybe<Scalars['BigInt']>;
  flowRate_lte?: InputMaybe<Scalars['BigInt']>;
  flowRate_not?: InputMaybe<Scalars['BigInt']>;
  flowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<Account_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  startedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtEvent?: InputMaybe<Scalars['String']>;
  startedAtEvent_?: InputMaybe<FlowUpdatedEvent_Filter>;
  startedAtEvent_contains?: InputMaybe<Scalars['String']>;
  startedAtEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_ends_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_gt?: InputMaybe<Scalars['String']>;
  startedAtEvent_gte?: InputMaybe<Scalars['String']>;
  startedAtEvent_in?: InputMaybe<Array<Scalars['String']>>;
  startedAtEvent_lt?: InputMaybe<Scalars['String']>;
  startedAtEvent_lte?: InputMaybe<Scalars['String']>;
  startedAtEvent_not?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_contains?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  startedAtEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtEvent_starts_with?: InputMaybe<Scalars['String']>;
  startedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  startedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  stoppedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtEvent?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_?: InputMaybe<FlowUpdatedEvent_Filter>;
  stoppedAtEvent_contains?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_ends_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_gt?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_gte?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_in?: InputMaybe<Array<Scalars['String']>>;
  stoppedAtEvent_lt?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_lte?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_contains?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  stoppedAtEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_starts_with?: InputMaybe<Scalars['String']>;
  stoppedAtEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stoppedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stoppedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  stoppedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stream?: InputMaybe<Scalars['String']>;
  stream_?: InputMaybe<Stream_Filter>;
  stream_contains?: InputMaybe<Scalars['String']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_ends_with?: InputMaybe<Scalars['String']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_gt?: InputMaybe<Scalars['String']>;
  stream_gte?: InputMaybe<Scalars['String']>;
  stream_in?: InputMaybe<Array<Scalars['String']>>;
  stream_lt?: InputMaybe<Scalars['String']>;
  stream_lte?: InputMaybe<Scalars['String']>;
  stream_not?: InputMaybe<Scalars['String']>;
  stream_not_contains?: InputMaybe<Scalars['String']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_in?: InputMaybe<Array<Scalars['String']>>;
  stream_not_starts_with?: InputMaybe<Scalars['String']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_starts_with?: InputMaybe<Scalars['String']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum StreamPeriod_OrderBy {
  Deposit = 'deposit',
  FlowRate = 'flowRate',
  Id = 'id',
  Receiver = 'receiver',
  Sender = 'sender',
  StartedAtBlockNumber = 'startedAtBlockNumber',
  StartedAtEvent = 'startedAtEvent',
  StartedAtTimestamp = 'startedAtTimestamp',
  StoppedAtBlockNumber = 'stoppedAtBlockNumber',
  StoppedAtEvent = 'stoppedAtEvent',
  StoppedAtTimestamp = 'stoppedAtTimestamp',
  Stream = 'stream',
  Token = 'token',
  TotalAmountStreamed = 'totalAmountStreamed'
}

export type StreamRevision = {
  __typename?: 'StreamRevision';
  id: Scalars['ID'];
  periodRevisionIndex: Scalars['Int'];
  revisionIndex: Scalars['Int'];
};

export type StreamRevision_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodRevisionIndex?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_gt?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_gte?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  periodRevisionIndex_lt?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_lte?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_not?: InputMaybe<Scalars['Int']>;
  periodRevisionIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  revisionIndex?: InputMaybe<Scalars['Int']>;
  revisionIndex_gt?: InputMaybe<Scalars['Int']>;
  revisionIndex_gte?: InputMaybe<Scalars['Int']>;
  revisionIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  revisionIndex_lt?: InputMaybe<Scalars['Int']>;
  revisionIndex_lte?: InputMaybe<Scalars['Int']>;
  revisionIndex_not?: InputMaybe<Scalars['Int']>;
  revisionIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum StreamRevision_OrderBy {
  Id = 'id',
  PeriodRevisionIndex = 'periodRevisionIndex',
  RevisionIndex = 'revisionIndex'
}

export type Stream_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentFlowRate?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_gt?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_gte?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentFlowRate_lt?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_lte?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_not?: InputMaybe<Scalars['BigInt']>;
  currentFlowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flowUpdatedEvents_?: InputMaybe<FlowUpdatedEvent_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<Account_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  streamPeriods_?: InputMaybe<StreamPeriod_Filter>;
  streamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  streamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  streamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Stream_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CurrentFlowRate = 'currentFlowRate',
  Deposit = 'deposit',
  FlowUpdatedEvents = 'flowUpdatedEvents',
  Id = 'id',
  Receiver = 'receiver',
  Sender = 'sender',
  StreamPeriods = 'streamPeriods',
  StreamedUntilUpdatedAt = 'streamedUntilUpdatedAt',
  Token = 'token',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountTokenSnapshot?: Maybe<AccountTokenSnapshot>;
  accountTokenSnapshotLog?: Maybe<AccountTokenSnapshotLog>;
  accountTokenSnapshotLogs: Array<AccountTokenSnapshotLog>;
  accountTokenSnapshots: Array<AccountTokenSnapshot>;
  accounts: Array<Account>;
  agreementClassRegisteredEvent?: Maybe<AgreementClassRegisteredEvent>;
  agreementClassRegisteredEvents: Array<AgreementClassRegisteredEvent>;
  agreementClassUpdatedEvent?: Maybe<AgreementClassUpdatedEvent>;
  agreementClassUpdatedEvents: Array<AgreementClassUpdatedEvent>;
  agreementLiquidatedByEvent?: Maybe<AgreementLiquidatedByEvent>;
  agreementLiquidatedByEvents: Array<AgreementLiquidatedByEvent>;
  agreementLiquidatedV2Event?: Maybe<AgreementLiquidatedV2Event>;
  agreementLiquidatedV2Events: Array<AgreementLiquidatedV2Event>;
  appRegisteredEvent?: Maybe<AppRegisteredEvent>;
  appRegisteredEvents: Array<AppRegisteredEvent>;
  burnedEvent?: Maybe<BurnedEvent>;
  burnedEvents: Array<BurnedEvent>;
  cfav1LiquidationPeriodChangedEvent?: Maybe<CfAv1LiquidationPeriodChangedEvent>;
  cfav1LiquidationPeriodChangedEvents: Array<CfAv1LiquidationPeriodChangedEvent>;
  configChangedEvent?: Maybe<ConfigChangedEvent>;
  configChangedEvents: Array<ConfigChangedEvent>;
  customSuperTokenCreatedEvent?: Maybe<CustomSuperTokenCreatedEvent>;
  customSuperTokenCreatedEvents: Array<CustomSuperTokenCreatedEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
  flowOperator?: Maybe<FlowOperator>;
  flowOperatorUpdatedEvent?: Maybe<FlowOperatorUpdatedEvent>;
  flowOperatorUpdatedEvents: Array<FlowOperatorUpdatedEvent>;
  flowOperators: Array<FlowOperator>;
  flowUpdatedEvent?: Maybe<FlowUpdatedEvent>;
  flowUpdatedEvents: Array<FlowUpdatedEvent>;
  governanceReplacedEvent?: Maybe<GovernanceReplacedEvent>;
  governanceReplacedEvents: Array<GovernanceReplacedEvent>;
  index?: Maybe<Index>;
  indexCreatedEvent?: Maybe<IndexCreatedEvent>;
  indexCreatedEvents: Array<IndexCreatedEvent>;
  indexDistributionClaimedEvent?: Maybe<IndexDistributionClaimedEvent>;
  indexDistributionClaimedEvents: Array<IndexDistributionClaimedEvent>;
  indexSubscribedEvent?: Maybe<IndexSubscribedEvent>;
  indexSubscribedEvents: Array<IndexSubscribedEvent>;
  indexSubscription?: Maybe<IndexSubscription>;
  indexSubscriptions: Array<IndexSubscription>;
  indexUnitsUpdatedEvent?: Maybe<IndexUnitsUpdatedEvent>;
  indexUnitsUpdatedEvents: Array<IndexUnitsUpdatedEvent>;
  indexUnsubscribedEvent?: Maybe<IndexUnsubscribedEvent>;
  indexUnsubscribedEvents: Array<IndexUnsubscribedEvent>;
  indexUpdatedEvent?: Maybe<IndexUpdatedEvent>;
  indexUpdatedEvents: Array<IndexUpdatedEvent>;
  indexes: Array<Index>;
  jailEvent?: Maybe<JailEvent>;
  jailEvents: Array<JailEvent>;
  mintedEvent?: Maybe<MintedEvent>;
  mintedEvents: Array<MintedEvent>;
  pppconfigurationChangedEvent?: Maybe<PppConfigurationChangedEvent>;
  pppconfigurationChangedEvents: Array<PppConfigurationChangedEvent>;
  resolverEntries: Array<ResolverEntry>;
  resolverEntry?: Maybe<ResolverEntry>;
  rewardAddressChangedEvent?: Maybe<RewardAddressChangedEvent>;
  rewardAddressChangedEvents: Array<RewardAddressChangedEvent>;
  roleAdminChangedEvent?: Maybe<RoleAdminChangedEvent>;
  roleAdminChangedEvents: Array<RoleAdminChangedEvent>;
  roleGrantedEvent?: Maybe<RoleGrantedEvent>;
  roleGrantedEvents: Array<RoleGrantedEvent>;
  roleRevokedEvent?: Maybe<RoleRevokedEvent>;
  roleRevokedEvents: Array<RoleRevokedEvent>;
  sentEvent?: Maybe<SentEvent>;
  sentEvents: Array<SentEvent>;
  setEvent?: Maybe<SetEvent>;
  setEvents: Array<SetEvent>;
  sfmeta?: Maybe<SfMeta>;
  sfmetas: Array<SfMeta>;
  stream?: Maybe<Stream>;
  streamPeriod?: Maybe<StreamPeriod>;
  streamPeriods: Array<StreamPeriod>;
  streamRevision?: Maybe<StreamRevision>;
  streamRevisions: Array<StreamRevision>;
  streams: Array<Stream>;
  subscriptionApprovedEvent?: Maybe<SubscriptionApprovedEvent>;
  subscriptionApprovedEvents: Array<SubscriptionApprovedEvent>;
  subscriptionDistributionClaimedEvent?: Maybe<SubscriptionDistributionClaimedEvent>;
  subscriptionDistributionClaimedEvents: Array<SubscriptionDistributionClaimedEvent>;
  subscriptionRevokedEvent?: Maybe<SubscriptionRevokedEvent>;
  subscriptionRevokedEvents: Array<SubscriptionRevokedEvent>;
  subscriptionUnitsUpdatedEvent?: Maybe<SubscriptionUnitsUpdatedEvent>;
  subscriptionUnitsUpdatedEvents: Array<SubscriptionUnitsUpdatedEvent>;
  superTokenCreatedEvent?: Maybe<SuperTokenCreatedEvent>;
  superTokenCreatedEvents: Array<SuperTokenCreatedEvent>;
  superTokenFactoryUpdatedEvent?: Maybe<SuperTokenFactoryUpdatedEvent>;
  superTokenFactoryUpdatedEvents: Array<SuperTokenFactoryUpdatedEvent>;
  superTokenLogicCreatedEvent?: Maybe<SuperTokenLogicCreatedEvent>;
  superTokenLogicCreatedEvents: Array<SuperTokenLogicCreatedEvent>;
  superTokenLogicUpdatedEvent?: Maybe<SuperTokenLogicUpdatedEvent>;
  superTokenLogicUpdatedEvents: Array<SuperTokenLogicUpdatedEvent>;
  token?: Maybe<Token>;
  tokenDowngradedEvent?: Maybe<TokenDowngradedEvent>;
  tokenDowngradedEvents: Array<TokenDowngradedEvent>;
  tokenStatistic?: Maybe<TokenStatistic>;
  tokenStatisticLog?: Maybe<TokenStatisticLog>;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  tokenStatistics: Array<TokenStatistic>;
  tokenUpgradedEvent?: Maybe<TokenUpgradedEvent>;
  tokenUpgradedEvents: Array<TokenUpgradedEvent>;
  tokens: Array<Token>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  trustedForwarderChangedEvent?: Maybe<TrustedForwarderChangedEvent>;
  trustedForwarderChangedEvents: Array<TrustedForwarderChangedEvent>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountTokenSnapshotLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshotLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshotLog_Filter>;
};


export type SubscriptionAccountTokenSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountTokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountTokenSnapshot_Filter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAgreementClassRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassRegisteredEvent_Filter>;
};


export type SubscriptionAgreementClassUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementClassUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementClassUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementClassUpdatedEvent_Filter>;
};


export type SubscriptionAgreementLiquidatedByEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedByEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedByEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedByEvent_Filter>;
};


export type SubscriptionAgreementLiquidatedV2EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgreementLiquidatedV2EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AgreementLiquidatedV2Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgreementLiquidatedV2Event_Filter>;
};


export type SubscriptionAppRegisteredEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppRegisteredEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AppRegisteredEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppRegisteredEvent_Filter>;
};


export type SubscriptionBurnedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BurnedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnedEvent_Filter>;
};


export type SubscriptionCfav1LiquidationPeriodChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCfav1LiquidationPeriodChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CfAv1LiquidationPeriodChangedEvent_Filter>;
};


export type SubscriptionConfigChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionConfigChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ConfigChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ConfigChangedEvent_Filter>;
};


export type SubscriptionCustomSuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCustomSuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CustomSuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CustomSuperTokenCreatedEvent_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionFlowOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowOperatorUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperatorUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperatorUpdatedEvent_Filter>;
};


export type SubscriptionFlowOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowOperator_Filter>;
};


export type SubscriptionFlowUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlowUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FlowUpdatedEvent_Filter>;
};


export type SubscriptionGovernanceReplacedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernanceReplacedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernanceReplacedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceReplacedEvent_Filter>;
};


export type SubscriptionIndexArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexCreatedEvent_Filter>;
};


export type SubscriptionIndexDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexDistributionClaimedEvent_Filter>;
};


export type SubscriptionIndexSubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscribedEvent_Filter>;
};


export type SubscriptionIndexSubscriptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexSubscriptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexSubscription_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexSubscription_Filter>;
};


export type SubscriptionIndexUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnitsUpdatedEvent_Filter>;
};


export type SubscriptionIndexUnsubscribedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUnsubscribedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUnsubscribedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUnsubscribedEvent_Filter>;
};


export type SubscriptionIndexUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IndexUpdatedEvent_Filter>;
};


export type SubscriptionIndexesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Index_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Index_Filter>;
};


export type SubscriptionJailEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionJailEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JailEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JailEvent_Filter>;
};


export type SubscriptionMintedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintedEvent_Filter>;
};


export type SubscriptionPppconfigurationChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPppconfigurationChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PppConfigurationChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PppConfigurationChangedEvent_Filter>;
};


export type SubscriptionResolverEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ResolverEntry_Filter>;
};


export type SubscriptionResolverEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardAddressChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardAddressChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardAddressChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardAddressChangedEvent_Filter>;
};


export type SubscriptionRoleAdminChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleAdminChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChangedEvent_Filter>;
};


export type SubscriptionRoleGrantedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleGrantedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGrantedEvent_Filter>;
};


export type SubscriptionRoleRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoleRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevokedEvent_Filter>;
};


export type SubscriptionSentEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSentEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SentEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SentEvent_Filter>;
};


export type SubscriptionSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SetEvent_Filter>;
};


export type SubscriptionSfmetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSfmetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SfMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SfMeta_Filter>;
};


export type SubscriptionStreamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamPeriodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamPeriodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamPeriod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamPeriod_Filter>;
};


export type SubscriptionStreamRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StreamRevision_Filter>;
};


export type SubscriptionStreamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stream_Filter>;
};


export type SubscriptionSubscriptionApprovedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionApprovedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionApprovedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionApprovedEvent_Filter>;
};


export type SubscriptionSubscriptionDistributionClaimedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionDistributionClaimedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionDistributionClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionDistributionClaimedEvent_Filter>;
};


export type SubscriptionSubscriptionRevokedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionRevokedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionRevokedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionRevokedEvent_Filter>;
};


export type SubscriptionSubscriptionUnitsUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubscriptionUnitsUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionUnitsUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubscriptionUnitsUpdatedEvent_Filter>;
};


export type SubscriptionSuperTokenCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenCreatedEvent_Filter>;
};


export type SubscriptionSuperTokenFactoryUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenFactoryUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenFactoryUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenFactoryUpdatedEvent_Filter>;
};


export type SubscriptionSuperTokenLogicCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicCreatedEvent_Filter>;
};


export type SubscriptionSuperTokenLogicUpdatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuperTokenLogicUpdatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SuperTokenLogicUpdatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuperTokenLogicUpdatedEvent_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDowngradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDowngradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDowngradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDowngradedEvent_Filter>;
};


export type SubscriptionTokenStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenStatisticLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatisticLog_Filter>;
};


export type SubscriptionTokenStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenStatistic_Filter>;
};


export type SubscriptionTokenUpgradedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenUpgradedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenUpgradedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenUpgradedEvent_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type SubscriptionTrustedForwarderChangedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTrustedForwarderChangedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedForwarderChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustedForwarderChangedEvent_Filter>;
};

export type SubscriptionApprovedEvent = Event & {
  __typename?: 'SubscriptionApprovedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  userData: Scalars['Bytes'];
};

export type SubscriptionApprovedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SubscriptionApprovedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type SubscriptionDistributionClaimedEvent = Event & {
  __typename?: 'SubscriptionDistributionClaimedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type SubscriptionDistributionClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SubscriptionDistributionClaimedEvent_OrderBy {
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type SubscriptionRevokedEvent = Event & {
  __typename?: 'SubscriptionRevokedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  userData: Scalars['Bytes'];
};

export type SubscriptionRevokedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SubscriptionRevokedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  UserData = 'userData'
}

export type SubscriptionUnitsUpdatedEvent = Event & {
  __typename?: 'SubscriptionUnitsUpdatedEvent';
  /**
   * Holds the token, publisher and subscriber addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  indexId: Scalars['BigInt'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  oldUnits: Scalars['BigInt'];
  order: Scalars['BigInt'];
  publisher: Scalars['Bytes'];
  subscriber: Scalars['Bytes'];
  subscription: IndexSubscription;
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  units: Scalars['BigInt'];
  userData: Scalars['Bytes'];
};

export type SubscriptionUnitsUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexId?: InputMaybe<Scalars['BigInt']>;
  indexId_gt?: InputMaybe<Scalars['BigInt']>;
  indexId_gte?: InputMaybe<Scalars['BigInt']>;
  indexId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexId_lt?: InputMaybe<Scalars['BigInt']>;
  indexId_lte?: InputMaybe<Scalars['BigInt']>;
  indexId_not?: InputMaybe<Scalars['BigInt']>;
  indexId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldUnits?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_gte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldUnits_lt?: InputMaybe<Scalars['BigInt']>;
  oldUnits_lte?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not?: InputMaybe<Scalars['BigInt']>;
  oldUnits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publisher?: InputMaybe<Scalars['Bytes']>;
  publisher_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_in?: InputMaybe<Array<Scalars['Bytes']>>;
  publisher_not?: InputMaybe<Scalars['Bytes']>;
  publisher_not_contains?: InputMaybe<Scalars['Bytes']>;
  publisher_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber?: InputMaybe<Scalars['Bytes']>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscriber_not?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<IndexSubscription_Filter>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  units?: InputMaybe<Scalars['BigInt']>;
  units_gt?: InputMaybe<Scalars['BigInt']>;
  units_gte?: InputMaybe<Scalars['BigInt']>;
  units_in?: InputMaybe<Array<Scalars['BigInt']>>;
  units_lt?: InputMaybe<Scalars['BigInt']>;
  units_lte?: InputMaybe<Scalars['BigInt']>;
  units_not?: InputMaybe<Scalars['BigInt']>;
  units_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userData?: InputMaybe<Scalars['Bytes']>;
  userData_contains?: InputMaybe<Scalars['Bytes']>;
  userData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userData_not?: InputMaybe<Scalars['Bytes']>;
  userData_not_contains?: InputMaybe<Scalars['Bytes']>;
  userData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SubscriptionUnitsUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  IndexId = 'indexId',
  LogIndex = 'logIndex',
  Name = 'name',
  OldUnits = 'oldUnits',
  Order = 'order',
  Publisher = 'publisher',
  Subscriber = 'subscriber',
  Subscription = 'subscription',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Units = 'units',
  UserData = 'userData'
}

export type SuperTokenCreatedEvent = Event & {
  __typename?: 'SuperTokenCreatedEvent';
  /**
   * Holds the token address.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type SuperTokenCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SuperTokenCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type SuperTokenFactoryUpdatedEvent = Event & {
  __typename?: 'SuperTokenFactoryUpdatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  newFactory: Scalars['Bytes'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SuperTokenFactoryUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newFactory?: InputMaybe<Scalars['Bytes']>;
  newFactory_contains?: InputMaybe<Scalars['Bytes']>;
  newFactory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newFactory_not?: InputMaybe<Scalars['Bytes']>;
  newFactory_not_contains?: InputMaybe<Scalars['Bytes']>;
  newFactory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SuperTokenFactoryUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  NewFactory = 'newFactory',
  Order = 'order',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type SuperTokenLogicCreatedEvent = Event & {
  __typename?: 'SuperTokenLogicCreatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  tokenLogic: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type SuperTokenLogicCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenLogic?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_contains?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenLogic_not?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenLogic_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SuperTokenLogicCreatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  TokenLogic = 'tokenLogic',
  TransactionHash = 'transactionHash'
}

export type SuperTokenLogicUpdatedEvent = Event & {
  __typename?: 'SuperTokenLogicUpdatedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  code: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type SuperTokenLogicUpdatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  code?: InputMaybe<Scalars['Bytes']>;
  code_contains?: InputMaybe<Scalars['Bytes']>;
  code_in?: InputMaybe<Array<Scalars['Bytes']>>;
  code_not?: InputMaybe<Scalars['Bytes']>;
  code_not_contains?: InputMaybe<Scalars['Bytes']>;
  code_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum SuperTokenLogicUpdatedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  Code = 'code',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/**
 * Token: A higher order entity created for super tokens that are "valid" (tokens that have
 * Superfluid's host contract address set as the host).
 *
 */
export type Token = {
  __typename?: 'Token';
  createdAtBlockNumber: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  decimals: Scalars['Int'];
  /**
   * ID: the token address
   *
   */
  id: Scalars['ID'];
  /**
   * This indicates whether the token is a part of our resolver list.
   *
   */
  isListed: Scalars['Boolean'];
  /**
   * This indicates whether the token is a NativeAssetSuperToken.
   *
   */
  isNativeAssetSuperToken: Scalars['Boolean'];
  isSuperToken: Scalars['Boolean'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  /**
   * The address of the underlying ERC20 token.
   *
   */
  underlyingAddress: Scalars['Bytes'];
  /**
   * The underlying ERC20 token for a SuperToken or
   * null for a regular ERC20 token.
   *
   */
  underlyingToken?: Maybe<Token>;
};

export type TokenDowngradedEvent = Event & {
  __typename?: 'TokenDowngradedEvent';
  account: Account;
  /**
   * Holds the token and account addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type TokenDowngradedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum TokenDowngradedEvent_OrderBy {
  Account = 'account',
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

/**
 * TokenStatistic: An aggregate entity which aggregates data of a single `token`.
 *
 */
export type TokenStatistic = {
  __typename?: 'TokenStatistic';
  /**
   * id: token address
   *
   */
  id: Scalars['ID'];
  token: Token;
  tokenStatisticLogs: Array<TokenStatisticLog>;
  /**
   * The all-time total amount distributed until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountDistributedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The all-time total amount streamed (outflows) until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountStreamedUntilUpdatedAt: Scalars['BigInt'];
  /**
   * The all-time total amount transferred until the `updatedAtTimestamp`/`updatedAtBlock`.
   *
   */
  totalAmountTransferredUntilUpdatedAt: Scalars['BigInt'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total deposit held by the CFA agreement for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at
   * least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The all-time number of closed streams.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int'];
  /**
   * The total outflow rate of the `token` (how much value is being moved).
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The number of subscriptions which have units allocated to them
   * created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their
   * tokens.
   *
   */
  totalSupply: Scalars['BigInt'];
  updatedAtBlockNumber: Scalars['BigInt'];
  updatedAtTimestamp: Scalars['BigInt'];
};


/**
 * TokenStatistic: An aggregate entity which aggregates data of a single `token`.
 *
 */
export type TokenStatisticTokenStatisticLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStatisticLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenStatisticLog_Filter>;
};

/**
 * TokenStatisticLog: Historical entries of TokenStatistic updates.
 *
 */
export type TokenStatisticLog = {
  __typename?: 'TokenStatisticLog';
  blockNumber: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Token;
  tokenStatistic: TokenStatistic;
  /**
   * The all-time total amount distributed until the `timestamp`/`block`.
   *
   */
  totalAmountDistributed: Scalars['BigInt'];
  /**
   * The all-time total amount streamed (outflows) until the `timestamp`/`block`.
   *
   */
  totalAmountStreamed: Scalars['BigInt'];
  /**
   * The all-time total amount transferred until the `timestamp`/`block`.
   *
   */
  totalAmountTransferred: Scalars['BigInt'];
  /**
   * Counts all approved subscriptions whether or not they have units.
   *
   */
  totalApprovedSubscriptions: Scalars['Int'];
  /**
   * The total deposit held by the CFA agreement for this particular `token`.
   *
   */
  totalDeposit: Scalars['BigInt'];
  /**
   * The total number of "active" (has greater than 0 units and has distributed it at
   * least once) Indexes created with `token`.
   *
   */
  totalNumberOfActiveIndexes: Scalars['Int'];
  /**
   * The total number of currently active `token` streams.
   *
   */
  totalNumberOfActiveStreams: Scalars['Int'];
  /**
   * The all-time number of closed streams.
   *
   */
  totalNumberOfClosedStreams: Scalars['Int'];
  /**
   * The total number of Indexes created with `token`.
   *
   */
  totalNumberOfIndexes: Scalars['Int'];
  /**
   * The total outflow rate of the `token` (how much value is being moved).
   *
   */
  totalOutflowRate: Scalars['BigInt'];
  /**
   * The number of subscriptions which have units allocated to them
   * created with Indexes that distribute `token`.
   *
   */
  totalSubscriptionsWithUnits: Scalars['Int'];
  /**
   * The total supply of the token - this is impacted by users upgrading/downgrading their
   * tokens.
   *
   */
  totalSupply: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  triggeredByEventName: Scalars['String'];
};

export type TokenStatisticLog_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  tokenStatistic?: InputMaybe<Scalars['String']>;
  tokenStatistic_?: InputMaybe<TokenStatistic_Filter>;
  tokenStatistic_contains?: InputMaybe<Scalars['String']>;
  tokenStatistic_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_ends_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_gt?: InputMaybe<Scalars['String']>;
  tokenStatistic_gte?: InputMaybe<Scalars['String']>;
  tokenStatistic_in?: InputMaybe<Array<Scalars['String']>>;
  tokenStatistic_lt?: InputMaybe<Scalars['String']>;
  tokenStatistic_lte?: InputMaybe<Scalars['String']>;
  tokenStatistic_not?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_contains?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenStatistic_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenStatistic_starts_with?: InputMaybe<Scalars['String']>;
  tokenStatistic_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalAmountDistributed?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamed_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferred_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferred_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  triggeredByEventName?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_gte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_lt?: InputMaybe<Scalars['String']>;
  triggeredByEventName_lte?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  triggeredByEventName_not_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with?: InputMaybe<Scalars['String']>;
  triggeredByEventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum TokenStatisticLog_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  LogIndex = 'logIndex',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenStatistic = 'tokenStatistic',
  TotalAmountDistributed = 'totalAmountDistributed',
  TotalAmountStreamed = 'totalAmountStreamed',
  TotalAmountTransferred = 'totalAmountTransferred',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalNumberOfActiveIndexes = 'totalNumberOfActiveIndexes',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalNumberOfIndexes = 'totalNumberOfIndexes',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TotalSupply = 'totalSupply',
  TransactionHash = 'transactionHash',
  TriggeredByEventName = 'triggeredByEventName'
}

export type TokenStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  tokenStatisticLogs_?: InputMaybe<TokenStatisticLog_Filter>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalAmountDistributedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountDistributedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountDistributedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountStreamedUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountStreamedUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTransferredUntilUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTransferredUntilUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalApprovedSubscriptions?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_gte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_in?: InputMaybe<Array<Scalars['Int']>>;
  totalApprovedSubscriptions_lt?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_lte?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not?: InputMaybe<Scalars['Int']>;
  totalApprovedSubscriptions_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDeposit?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNumberOfActiveIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfActiveStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfActiveStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfClosedStreams_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfClosedStreams_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_gte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_in?: InputMaybe<Array<Scalars['Int']>>;
  totalNumberOfIndexes_lt?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_lte?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not?: InputMaybe<Scalars['Int']>;
  totalNumberOfIndexes_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalOutflowRate?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_gte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOutflowRate_lt?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_lte?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not?: InputMaybe<Scalars['BigInt']>;
  totalOutflowRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSubscriptionsWithUnits?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_gte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSubscriptionsWithUnits_lt?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_lte?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not?: InputMaybe<Scalars['Int']>;
  totalSubscriptionsWithUnits_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenStatistic_OrderBy {
  Id = 'id',
  Token = 'token',
  TokenStatisticLogs = 'tokenStatisticLogs',
  TotalAmountDistributedUntilUpdatedAt = 'totalAmountDistributedUntilUpdatedAt',
  TotalAmountStreamedUntilUpdatedAt = 'totalAmountStreamedUntilUpdatedAt',
  TotalAmountTransferredUntilUpdatedAt = 'totalAmountTransferredUntilUpdatedAt',
  TotalApprovedSubscriptions = 'totalApprovedSubscriptions',
  TotalDeposit = 'totalDeposit',
  TotalNumberOfActiveIndexes = 'totalNumberOfActiveIndexes',
  TotalNumberOfActiveStreams = 'totalNumberOfActiveStreams',
  TotalNumberOfClosedStreams = 'totalNumberOfClosedStreams',
  TotalNumberOfIndexes = 'totalNumberOfIndexes',
  TotalOutflowRate = 'totalOutflowRate',
  TotalSubscriptionsWithUnits = 'totalSubscriptionsWithUnits',
  TotalSupply = 'totalSupply',
  UpdatedAtBlockNumber = 'updatedAtBlockNumber',
  UpdatedAtTimestamp = 'updatedAtTimestamp'
}

export type TokenUpgradedEvent = Event & {
  __typename?: 'TokenUpgradedEvent';
  account: Account;
  /**
   * Holds the token and account addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type TokenUpgradedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum TokenUpgradedEvent_OrderBy {
  Account = 'account',
  Addresses = 'addresses',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isListed?: InputMaybe<Scalars['Boolean']>;
  isListed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isListed_not?: InputMaybe<Scalars['Boolean']>;
  isListed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isNativeAssetSuperToken?: InputMaybe<Scalars['Boolean']>;
  isNativeAssetSuperToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isNativeAssetSuperToken_not?: InputMaybe<Scalars['Boolean']>;
  isNativeAssetSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSuperToken?: InputMaybe<Scalars['Boolean']>;
  isSuperToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSuperToken_not?: InputMaybe<Scalars['Boolean']>;
  isSuperToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  underlyingToken?: InputMaybe<Scalars['String']>;
  underlyingToken_?: InputMaybe<Token_Filter>;
  underlyingToken_contains?: InputMaybe<Scalars['String']>;
  underlyingToken_contains_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_ends_with?: InputMaybe<Scalars['String']>;
  underlyingToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_gt?: InputMaybe<Scalars['String']>;
  underlyingToken_gte?: InputMaybe<Scalars['String']>;
  underlyingToken_in?: InputMaybe<Array<Scalars['String']>>;
  underlyingToken_lt?: InputMaybe<Scalars['String']>;
  underlyingToken_lte?: InputMaybe<Scalars['String']>;
  underlyingToken_not?: InputMaybe<Scalars['String']>;
  underlyingToken_not_contains?: InputMaybe<Scalars['String']>;
  underlyingToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_ends_with?: InputMaybe<Scalars['String']>;
  underlyingToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  underlyingToken_not_starts_with?: InputMaybe<Scalars['String']>;
  underlyingToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlyingToken_starts_with?: InputMaybe<Scalars['String']>;
  underlyingToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Decimals = 'decimals',
  Id = 'id',
  IsListed = 'isListed',
  IsNativeAssetSuperToken = 'isNativeAssetSuperToken',
  IsSuperToken = 'isSuperToken',
  Name = 'name',
  Symbol = 'symbol',
  UnderlyingAddress = 'underlyingAddress',
  UnderlyingToken = 'underlyingToken'
}

export type TransferEvent = Event & {
  __typename?: 'TransferEvent';
  /**
   * Holds the token, from and to addresses.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  from: Account;
  gasPrice: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  to: Account;
  token: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type TransferEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TransferEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  From = 'from',
  GasPrice = 'gasPrice',
  Id = 'id',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  Timestamp = 'timestamp',
  To = 'to',
  Token = 'token',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type TrustedForwarderChangedEvent = Event & {
  __typename?: 'TrustedForwarderChangedEvent';
  /**
   * Empty addresses array.
   *
   */
  addresses: Array<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  enabled: Scalars['Boolean'];
  forwarder: Scalars['Bytes'];
  gasPrice: Scalars['BigInt'];
  /**
   * The address of the governance contract the event was emitted from.
   *
   */
  governanceAddress: Scalars['Bytes'];
  host: Scalars['Bytes'];
  id: Scalars['ID'];
  isKeySet: Scalars['Boolean'];
  logIndex: Scalars['BigInt'];
  name: Scalars['String'];
  order: Scalars['BigInt'];
  superToken: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TrustedForwarderChangedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addresses?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  enabled_not?: InputMaybe<Scalars['Boolean']>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forwarder?: InputMaybe<Scalars['Bytes']>;
  forwarder_contains?: InputMaybe<Scalars['Bytes']>;
  forwarder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forwarder_not?: InputMaybe<Scalars['Bytes']>;
  forwarder_not_contains?: InputMaybe<Scalars['Bytes']>;
  forwarder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  governanceAddress?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governanceAddress_not?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  governanceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host?: InputMaybe<Scalars['Bytes']>;
  host_contains?: InputMaybe<Scalars['Bytes']>;
  host_in?: InputMaybe<Array<Scalars['Bytes']>>;
  host_not?: InputMaybe<Scalars['Bytes']>;
  host_not_contains?: InputMaybe<Scalars['Bytes']>;
  host_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isKeySet?: InputMaybe<Scalars['Boolean']>;
  isKeySet_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isKeySet_not?: InputMaybe<Scalars['Boolean']>;
  isKeySet_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['BigInt']>;
  order_gt?: InputMaybe<Scalars['BigInt']>;
  order_gte?: InputMaybe<Scalars['BigInt']>;
  order_in?: InputMaybe<Array<Scalars['BigInt']>>;
  order_lt?: InputMaybe<Scalars['BigInt']>;
  order_lte?: InputMaybe<Scalars['BigInt']>;
  order_not?: InputMaybe<Scalars['BigInt']>;
  order_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  superToken?: InputMaybe<Scalars['Bytes']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  superToken_not?: InputMaybe<Scalars['Bytes']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum TrustedForwarderChangedEvent_OrderBy {
  Addresses = 'addresses',
  BlockNumber = 'blockNumber',
  Enabled = 'enabled',
  Forwarder = 'forwarder',
  GasPrice = 'gasPrice',
  GovernanceAddress = 'governanceAddress',
  Host = 'host',
  Id = 'id',
  IsKeySet = 'isKeySet',
  LogIndex = 'logIndex',
  Name = 'name',
  Order = 'order',
  SuperToken = 'superToken',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Event": [
      "AgreementClassRegisteredEvent",
      "AgreementClassUpdatedEvent",
      "AgreementLiquidatedByEvent",
      "AgreementLiquidatedV2Event",
      "AppRegisteredEvent",
      "BurnedEvent",
      "CFAv1LiquidationPeriodChangedEvent",
      "ConfigChangedEvent",
      "CustomSuperTokenCreatedEvent",
      "FlowOperatorUpdatedEvent",
      "FlowUpdatedEvent",
      "GovernanceReplacedEvent",
      "IndexCreatedEvent",
      "IndexDistributionClaimedEvent",
      "IndexSubscribedEvent",
      "IndexUnitsUpdatedEvent",
      "IndexUnsubscribedEvent",
      "IndexUpdatedEvent",
      "JailEvent",
      "MintedEvent",
      "PPPConfigurationChangedEvent",
      "RewardAddressChangedEvent",
      "RoleAdminChangedEvent",
      "RoleGrantedEvent",
      "RoleRevokedEvent",
      "SentEvent",
      "SetEvent",
      "SubscriptionApprovedEvent",
      "SubscriptionDistributionClaimedEvent",
      "SubscriptionRevokedEvent",
      "SubscriptionUnitsUpdatedEvent",
      "SuperTokenCreatedEvent",
      "SuperTokenFactoryUpdatedEvent",
      "SuperTokenLogicCreatedEvent",
      "SuperTokenLogicUpdatedEvent",
      "TokenDowngradedEvent",
      "TokenUpgradedEvent",
      "TransferEvent",
      "TrustedForwarderChangedEvent"
    ]
  }
};
      export default result;
    