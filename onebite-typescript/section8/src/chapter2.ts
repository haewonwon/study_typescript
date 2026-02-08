// keyof 연산자
// 특정 객체 타입으로부터 프로퍼티 키들을 유니온 스트링 타입으로 추출하는 개념

// 객체 타입에 적용하는 연산자

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

// keyof 연산자는 무조건 타입에만 사용할 수 있는 연산자
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '김해원',
  age: 25,
};

getPropertyKey(person, 'name'); // 김해원

// typeof
// JS: 특정 변수의 타입을 string 값으로 반환하는 연산자
// TS
// 특별히 타입을 정의할 때 사용하면 동작이 다르게 바뀜
// 변수의 타입을 추론해 타입 별칭에 정의함
// 어떤 변수의 타입을 뽑아내는 용도로도 활용할 수 있음
