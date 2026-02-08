// 맵드 타입
// 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법
// 인터페이스에서는 사용할 수 없음
// 타입 별칭에서 사용해야 함

// 키오브 연산자처럼 객체 타입을 조작하는 기능

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
  // 콜론을 기준으로 앞은 key / 뒤는 value
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadOnlyUser {
  // ...기능
  return {
    id: 1,
    name: '김해원',
    age: 25,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ...수정하는 기능
}

updateUser({
  // id: 1,
  // name: '김해원',
  age: 27,
});
