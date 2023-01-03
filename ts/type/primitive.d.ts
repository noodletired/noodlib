export type Primitive = string | number | boolean | bigint | symbol | undefined | null;
export type Nullish = null | undefined;
export type JSONPrimitive = string | number | boolean | null;
export type JSONValue = JSONPrimitive | { [x: string]: JSONValue } | JSONValue[];
