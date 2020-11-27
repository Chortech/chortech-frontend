export interface AddDebtRequest {
  description: string;
  category: string;
  debt: number;
  creditorId: string;
}
