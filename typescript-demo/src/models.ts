/* 
  Learned: Interfaces define object shapes.
  Seniors expect interfaces for domain models.
*/
export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

/*
  Learned: Enums represent fixed sets of values.
*/
export enum UserRole {
  Admin = "ADMIN",
  User = "USER",
}