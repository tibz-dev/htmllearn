import { User, UserRole } from "./models";
import { successResponse, isSuccess } from "./utils";

/*
  Learned: Typed variables prevent runtime errors.
*/
const user: User = {
  id: 1,
  name: "Tebatso",
  email: "tebatso@example.com",
  isActive: true,
};

/*
  Learned: Strong typing ensures correct data flow.
*/
const response = successResponse<User>(user);

/*
  Learned: Type guards allow safe access to data.
*/
if (isSuccess(response)) {
  console.log("User name:", response.data.name);
}