// 인터페이스
interface Person {
  readonly name: string; // readonly 가능
  age?: number; // 선택적 프로퍼티 가능
  // sayHi: () => void; // 메서드 타입 정의 가능
  sayHi(): void; // 호출 시그니처 가능
  // 함수 오버로딩을 구현하고 싶을 땐 함수 표현식이 아닌 호출 시그니처로 정의해야 함
  sayHi(a: number, b: number): void;
}

// 인터페이스에서는 유니온이나 인터섹션 타입은 만들 수 없음

const person: Person = {
  name: '김해원',
  // age: 25,
  sayHi: function () {
    console.log('Hi');
  },
};

person.sayHi();
