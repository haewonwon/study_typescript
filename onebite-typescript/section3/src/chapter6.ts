// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = '김해원';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog;

// 타입 단언의 규칙
// A as B
// A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함

let num1 = 10 as never; // never는 모든 타입의 서브 타입
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼 타입
// let num3 = 10 as string; // number와 string은 교집합이 없음
let num3 = 10 as unknown as string; // 이렇게 하면 무조건 성공이지만 좋은 방법이 아님

// const 단언
// 변수를 선언했을 때 const로 선언한 것과 동일한 효과를 보도록 만들어주는 개념
// 객체 타입과 함께 사용할 때 활용도가 있음
let num4 = 10 as const;

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;

// 객체 리터럴 값 뒤에 as const를 붙이면 모든 프로퍼티가 read-only, 읽기 전용 프로퍼티가 된 객체로 추론됨
// 즉 as const를 붙여 초기화한 객체는 프로퍼티의 값을 수정할 수 없는 객체가 됨
// 프로퍼티가 많은 객체를 초기화할 때도 일일이 타입을 정의해서 read-only를 붙여줄 필요가 없음
// 프로퍼티의 개수가 많더라도 모든 프로퍼티를 read-only 프로퍼티로 만들 수 있음

// cat.name = ""

// Non Null 단언
// 어떤 값이 null이거나 undefined가 아니라고 TS 컴파일러에게 알려주는 역할

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글',
  author: '김해원',
};

const len: number = post.author!.length;
