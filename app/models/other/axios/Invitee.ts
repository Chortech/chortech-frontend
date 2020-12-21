export type Invitee = {
  type: "phone" | "email" | "combo";
  phone?: string;
  email?: string;
  name: string;
};
