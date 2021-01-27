import { Comment } from "./Comment";

export interface Payment {
    id: string;
    from: string;
    to: string;
    amount: number;
    paid_at: number;
    group?: string;
    notes?: string;
    comments?: Array<Comment>;
}