export interface Card {
    id: string;
    type: string;           // e.g., 'debit', 'credit'
    holderName: string;
    cardNumber: string;   // will be masked in UI
    expiry: string;
    cvv: string;          // never show in UI
}