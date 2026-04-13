export interface Account {
  id: string;
  holderName: string;
  accountNumber: string;
  accountType: string;
  status: 'active' | 'dormant' | 'inactive';
  balance: number;
  branchCode?: string;
  branchName?: string;
  ifscCode?: string;
  mmid?: string
}