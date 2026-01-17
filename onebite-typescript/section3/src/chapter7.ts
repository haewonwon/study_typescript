// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살입니다.
function func(value: number | string | Date | null | Person) {
  value;

  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }

  // Person은 클래스가 아닌 우리가 타입 별칭으로 만든 객체 타입
  // else if (value instanceof Person) {

  // }
}

// 어떤 변수가 특정 조건문 내부에서 더 좁은 타입임을 보장할 수 있을 때, TS는 이 변수의 타입을 더 좁은 타입으로 자동 추론해 줌
// type of 연산자를 활용해 조건문과 함께 타입을 좁힐 수 있는 표현들을 타입 가드라고 함

// 타입 가드
// instanceof
// value instanceof Date (value라는 값이 데이트 객체임?)
// 이때 null은 이 조건문을 통과하지 못함
