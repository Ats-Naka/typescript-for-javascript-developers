export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//Exclude:除外
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//Extract:抽出
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

//NonNullable:null,undefinedを除外
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
