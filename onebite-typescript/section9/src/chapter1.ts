// 분산적인 조건부 타입
// 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
// 우리가 알던 조건부 타입처럼 동작하지 않게 됨
// 조건부 타입에 타입 변수로 유니온 타입을 할당하면 일반적인 조건부 타입이 아니라 분산적인 조건부 타입으로 업그레이드 됨
// 유니온 타입이 그대로 타입 변수에 들어가는 게 아니라 한 번은 number, 한 번은 string으로 분리되어서 들어감
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | => string
// StringNumberSwitch<string> => number
let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

// 실용적인 예제
// 유니온에서 특정 타입을 제거하는 타입
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | never | boolean
// 유니온 타입은 합집합, 네버 타입은 공집합
// 공집합과 다른 어떤 집합을 합집합한다는 건 그냥 원본 집합
// number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;

// 분산적인 조건부 타입을 막고 싶을 때
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
