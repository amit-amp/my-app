import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  tests?: TestWhereUniqueInput | null;
  username?: string;
};
