/*
  utils.ts
  Demonstrates:
  - Typed functions
  - Generics
  - Type guards
*/
/**
 * Generic function
 * Works with ANY type while keeping type safety.
 */
export function wrapInArray(value) {
    return [value];
}
/**
 * Utility function with explicit return type.
 */
export function formatUserName(user) {
    return `${user.name} (${user.email})`;
}
/**
 * Type guard
 * Helps TypeScript narrow types at runtime.
 */
export function isUser(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "email" in value);
}
