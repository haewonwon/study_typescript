// 사용자 정의 타입 가드 (커스텀 타입 가드)
// 함수를 이용해 우리의 입맛대로 타입 가드를 만들 수 있는 문법

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 보통 JS로 프로그래밍할 때 어떤 값이 어떤 객체에 포함되는지 검사하는 로직을 함수로 별도로 만드는데, 그걸 똑같이 해야 함
function isDog(animal: Animal): animal is Dog {
  // return animal.isBark !== undefined // 이때 animal 타입이 잘 좁혀지지 않았기 때문에 에러가 발생함

  return (animal as Dog).isBark !== undefined; // 타입 단언을 해 주면 됨

  // animal is Dog라는 아주 독특한 문법을 사용하면 됨
  // 이 함수가 참이면 내가 인수로 전달한 animal이라는 값이 Dog 타입이겠구나 라고 알아들음
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

// 보통 이런 상황에서 타입 좁히기를 할 때, 서로소 유니온 타입을 이용하지만 이번 실습에서는 그렇게 하지 못한다고 가정
// 이미 남이 만들어둔 타입이라든가, 라이브러리가 제공하는 타입이어서 우리가 직접 손을 댈 수 없는 상황이라고 가정
function warning(animal: Animal) {
  // 이런 상황에서는 아래처럼 작성할 수밖에 없는데 직관적으로 좋지 않고, 프로퍼티의 이름이 중간에 바뀌기라도 하면 이상한 타입으로 추론되는 문제가 생김
  // 이럴 때 사용하면 좋은 게 사용자 정의 타입 가드임
  // if ('isBark' in animal) {
  //   // 강아지
  // } else if ('isScratch' in animal) {
  //   // 고양이
  // }

  if (isDog(animal)) {
    // 이때도 타입 좁히기가 안 됨 / TS는 우리가 직접 만든 함수의 반환값을 가지고는 타입을 잘 좁혀주지는 않음 이럴 때 함수 자체를 타입 가드 역할을 하도록 만들어 주면 됨
    // 강아지
    animal;
  } else if (isCat(animal)) {
    // 고양이
    animal;
  }
}
