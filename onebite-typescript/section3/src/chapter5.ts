// 타입 추론
// 타입스크립트는 점진적인 타입 시스템을 제공하며, 변수의 타입을 자동으로 추론함

let a = 10; // 타입을 정의하지 않아도 초기값을 기준으로 타입을 추론함
let b = 'hello';

let c = {
  id: 1,
  name: '김해원',
  profile: {
    nickname: 'haewonwon',
  },
  urls: [''],
};

// 구조 분해 할당을 통해 타입 추론이 가능함
let { id, name, profile } = c;

// 배열의 구조 분해 할당을 통해 타입 추론이 가능함
let [one, two, three] = [1, 'hello', true];

// 매개변수도 초기값을 기준으로 추론함
function func(message = 'hello') {
  return 'hello';
}

// any 타입의 진화
// 암묵적 any
// 명시적 any와는 동작이 다름

let d;
d = 10; // any -> number
d.toFixed(); // 여기부터 number
// d.toUpperCase();

d = 'hello';
d.toUpperCase(); // 여기부터 string
// d.toFixed();

const num = 10; // 넘버 리터럴 타입으로 추론됨
const str = 'hello';

let arr = [1, 'string'];
// (number | string)[] 타입으로 추론됨
// 최적의 공통 타입으로 추론됨
