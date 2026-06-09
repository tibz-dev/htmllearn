/* 
  utils.ts
  Demonstrates:
  - Typed functions
  - Generics
  - Type guards
*/

// Explicit ".js" extension is required when using NodeNext module resolution
import { User } from "./models.js";

/**
 * Generic function
 * Works with ANY type while keeping type safety.
 */
export function wrapInArray<T>(value: T): T[] {
  return [value];
}

/**
 * Utility function with explicit return type.
 */
export function formatUserName(user: User): string {
  return `${user.name} (${user.email})`;
}

/**
 * Type guard
 * Helps TypeScript narrow types at runtime.
 */
export function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "email" in value
  );
}