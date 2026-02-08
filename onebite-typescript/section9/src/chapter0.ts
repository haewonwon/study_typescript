// 조건부 타입
// 삼항연산자를 이용해서 조건에 따라 타입을 결정하는 문법

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 조건부 타입은 기본 타입들만 가지고 사용하면 별로 활용할 곳이 많지는 않음
// 제네릭과 함께 사용할 때 위력을 발휘함

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// 제네릭, 조건부 타입, 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('hi im haewonwon');
result.toUpperCase();

let result2 = removeSpaces(undefined);
