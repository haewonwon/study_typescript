// 인터페이스 확장 (상속)

// interface Animal {
//   name: string;
//   age: number;
// }

// 인터페이스로 만든 객체 타입이 아닌 타입 별칭이어도 확장 가능함
// 즉, 인터페이스는 객체 타입이면 다 확장할 수 있음
type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  name: string; // 프로퍼티의 타입을 재정의할 수 있음 (스트링 리터럴 타입) 단, 원본 타입의 서브 타입이어야 함
  isBark: boolean;
}

const dog: Dog = {
  name: 'haewon',
  age: 1,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장: 여러가지 인터페이스를 확장하는 문법
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: 'haewon',
  age: 1,
  isBark: true,
  isScratch: true,
};
