import { z } from "zod";
//
// type User = {
//   id: string;
//   name: string;
//   age: number;
//   hobbies: string[];
// };

// HELLLO???????????

// const EmailAddress = z.string().email();

const UserSchema = z.object({
  id: z.string(),
  // email: EmailAddress,
  name: z.string().min(10, "Please you a name with 10 characters"),
  age: z.number().min(18),
  hobbies: z.string().array(),
});
type User = z.infer<typeof UserSchema>;

// UserSchema.parse({ id: null, name: "Klaus", age: 32, hobbies: ["JavaScript"] });

//
export const UserListSchema = UserSchema.array();
export type UserList = z.infer<typeof UserListSchema>;

const FindUserApiResponseSchema = {
  users: UserSchema.array(),
};

function loadUserList(): UserList {
  return [];
}

// zod  https://zod.dev

function loadUserFromRestApi(): unknown {
  return { id: "U1", name: "Klaus", age: 32, hobbies: ["JavaScript"] };
}

const serverResponse = loadUserFromRestApi();

const validUser = UserSchema.parse(serverResponse);
sayHelloToUser(validUser);

function sayHelloToUser(user: User) {}

// if (serverResponse !== null && typeof serverResponse === "object" && "id" in serverResponse) {
//   const id = serverResponse.id;
// }
