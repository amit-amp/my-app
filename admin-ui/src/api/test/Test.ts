import { User } from "../user/User";

export type Test = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
