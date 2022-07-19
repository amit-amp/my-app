import { Test } from "../test/Test";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  tests?: Test | null;
  updatedAt: Date;
  username: string;
};
