export interface Account {
  id: string;
  name: string;
  status: 'active' | 'dormant' | 'inactive';
  balance: number;
}