/*
  Learned: Union types allow multiple possible types.
*/
export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

/*
  Learned: Generics make functions reusable and type-safe.
*/
export function successResponse<T>(data: T): ApiResponse<T> {
  return { success: true, data };
}

/*
  Learned: Type guards safely narrow union types.
*/
export function isSuccess<T>(
  response: ApiResponse<T>
): response is { success: true; data: T } {
  return response.success;
}