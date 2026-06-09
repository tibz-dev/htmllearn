/* 
  app.ts
  Demonstrates:
  - Type inference
  - Explicit typing
  - Enum usage
  - Safe runtime checks
*/

// Node ESM requires explicit file extensions.
// TypeScript keeps ".js" here and resolves it correctly at compile time.
import { User, UserRole, ApiStatus } from "./models.js";
import { formatUserName, wrapInArray, isUser } from "./utils.js";

/**
 * Type inference:
 * TypeScript infers the type automatically.
 */
let status: ApiStatus = "loading";

/**
 * Explicitly typed object using interface.
 */
const currentUser: User = {
  id: 1,
  name: "Tebatso",
  email: "tebatso@restec.co.za",
  role: UserRole.Admin,
  isActive: true
};

/**
 * Function using typed parameters and return type.
 */
function printUser(user: User): void {
  console.log(formatUserName(user));
}

printUser(currentUser);

/**
 * Generic function usage
 */
const wrappedUser = wrapInArray(currentUser);
console.log(wrappedUser);

/**
 * Runtime validation using type guard
 */
const unknownData: unknown = currentUser;

if (isUser(unknownData)) {
  console.log("Valid user detected:", unknownData.email);
} else {
  console.log("Invalid user object");
}

status = "success";