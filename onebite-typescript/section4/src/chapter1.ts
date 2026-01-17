// 힘수 타입 표현식과 호출 시그니처
// 함수의 타입을 우리가 별도로 정의하는 문법들

// 함수 타입 표현식 (Function Type Expression)
// 타입 별칭을 이용해 함수의 타입을 정의할 수 있음
type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b; // 타입 별칭 이용하지 않고 정의해도 문제 없음
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

// 호출 시그니처 (콜 시그니처)
// 타입 별칭 등을 사용하지 않고 정의할 때는 타입을
function func(a: number): void {}
// 위처럼 정의하는데 정의하는 부분을 떼어서 작성하는 문법

// 마치 객체 타입을 정의하듯이 하는 이유는 자바스크립트의 함수 또한 객체이기 때문
type Operation2 = {
  (a: number, b: number): number; // 여기로 떼어옴
  name: string;
  // 함수도 객체이기 때문에 프로퍼티를 추가로 정의할 수 있음
  // 당연히 함수 호출도 가능하고, 점표기법으로 객체를 사용하듯이 사용할 수 있음
  // 이런 걸 하이브리드 타입이라고 부름
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;
