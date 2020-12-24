export type Invitee = {
  type: "phone" | "email" | "combo";
  phone?: string;
  email?: string;
  name: string;
};

export type InviteeByEmail = {
  name: string;
  email: string;
};

export type InviteeByPhone = {
  name: string;
  phone: string;
};
