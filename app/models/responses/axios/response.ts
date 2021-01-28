export interface Response<T> {
  success: boolean;
  status: number;
  response?: T | null | undefined | any;
}
