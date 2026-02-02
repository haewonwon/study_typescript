// 제네릭 인터페이스와 제네릭 타입 별칭
// 제네릭은 함수 말고도 인터페이스나 타입 별칭, 클래스에도 사용이 가능함

// 제네릭 인터페이스
// 제네릭 함수와 똑같이 type 변수를 이용함
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 그냥 중괄호를 열면 'KeyPair<K, V>' 제네릭 형식에 2 형식 인수가 필요합니다. 와 같은 에러가 뜸
// 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 정의할 때 꺽쇠를 열어 타입 변수에 타입을 직접 할당해 줘야 함
// 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
let keypair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1'],
};

// 제네릭 인터페이스는 특히 객체의 인덱스 시그니처 문법과 함께 사용하면 굉장히 유연한 객체 타입을 만들 수 있음
// 인덱스 시그니처: 규칙만 만족하면 어떤 객체든 허용하는 유연한 객체 타입을 만드는 문법
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1234,
  key2: 123456,
};

interface Map<V> {
  [key: string]: V; // value의 타입을 바꿔 쓸 수 있는 인덱스 시그니처 타입
}

let stringMap: Map<string> = {
  key: 'value',
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
// 제네릭 인터페이스를 만드는 것과 크게 다를 건 없음
type Map2<V> = {
  [key: string]: V;
};

// 제네릭 인터페이스처럼 제네릭 타입 별칭도 직접 타입 변수에 할당할 타입을 직접 지정해 줘야 함
let stringMap2: Map2<string> = {
  key: 'hello',
};

// 제네릭 인터페이스의 활용 예시
// 유저 관리 프로그램
// 유저 구분: 학생 유저 / 개발자 유저

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 유저 구분도 많아지고, 특정 회원만 이용할 수 있는 함수도 많아진다면 불편할 듯
// 함수를 만들 때마다 타입 좁히기를 사용해야 하기 때문에
// 이럴 때 제네릭 인터페이스를 이용하면 훨씬 더 깔끔하게 코드를 작성할 수 있음

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: '김해원',
  profile: {
    type: 'developer',
    skill: 'Typescript',
  },
};

const student: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '인하대학교',
  },
};
