export interface Comment {
  text: string;
  created_at: number;
  id?: string;
  writer?: Writer;
}

export interface Writer {
  id: string;
  name: string;
}
