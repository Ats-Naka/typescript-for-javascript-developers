export {};

/*
type MyExclude =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);
*/
/*
type MyExclude = never | never | DebugType;
*/
type MyExclude = DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//Exclude:除外
type FunctionType = Exclude<SomeTypes, string | number>;

//--------------------------
type MyFunctionType = MyExclude;
//--------------------------

//Extract:抽出
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;

//NonNullable:null,undefinedを除外
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
