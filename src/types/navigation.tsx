// Types
export type HomeStackParamList = {
  Home: undefined;
  AccountDetails: { accountId: string };
  Transactions: undefined;
};

export type TransferStackParamList = {
  Transfer: undefined;
  NewPayee: undefined;
}

export type BottomTabParamList = {
  HomeStack: undefined;
  TransferStack: undefined;
  Cards: undefined;
  ReachUs: undefined;
  AccountDetails: { accountId: string };
  Transactions: undefined;
};
