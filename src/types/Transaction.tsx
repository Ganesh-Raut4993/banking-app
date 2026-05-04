export interface Transaction {
    transaction_id: string,
    date: string,
    merchant: string,
    category: string,
    amount: number,
    type: string,
    status: string,
}