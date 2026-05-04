export interface Account {
  id: string;
  holderName: string;
  accountNumber: string;
  accountType: string;
  status: string;
  balance: number;
  branchCode?: string;
  branchName?: string;
  ifscCode?: string;
  mmid?: string
}