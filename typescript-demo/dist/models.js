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
export var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["User"] = "USER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
