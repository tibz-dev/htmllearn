/* 
  models.ts
  Demonstrates:
  - Interfaces
  - Type aliases
  - Enums
*/

/**
 * Enum used to restrict role values.
 * Prevents magic strings and invalid assignments.
 */
export enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

/**
 * Interface defines the shape of a User object.
 * Interfaces are preferred for object contracts.
 */
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
}

/**
 * Type alias used for union types.
 * Demonstrates TypeScript’s ability to limit values.
 */
export type ApiStatus = "success" | "error" | "loading";