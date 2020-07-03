export type AnyIfEmpty<T extends object> = keyof T extends never ? any : T
