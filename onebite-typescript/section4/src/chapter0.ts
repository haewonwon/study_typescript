// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법: 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 기본값과 다른 타입으로 정의하면 안 됨
// 힘수를 호출할 때 자동 추론된 매개변수의 타입과 다른 타입의 값을 인수로 전달하면 안 됨

// 선택적 매개변수는 끝에 있어야 함 즉 필수 매개변수는 선택적 매개변수 앞에 오게끔
function introduce(name = '김해원', age: number, heigth?: number) {
  // name은 생략하면 안 됨 필수 매개변수이기 때문임
  console.log(`name: ${name}`);
  console.log(`heigth: ${heigth}`);
  // 연산을 하려고 하면 에러가 발생함
  // 이럴 때는 타입 가드를 이용해야 함 (typeof heigth === "number")
}

// 함수를 호출할 때 heigth 매개변수를 생략하고 싶을 때, ?를 붙여주면 됨
// 객체 타입에서 선택적 프로퍼티를 만들었던 것처럼 선택적 매개변수로 만들어 주면 됨
introduce('김해원', 27);

// 몇 개의 인수가 전달될지 모르니 rest 파라미터를 이용해 매개변수를 선언해야 함
// 가변적인 길이의 인수들을 전달하면 배열로 묶어 rest라는 변수에 저장할 수 있도록 도와주는 문법
// 매개변수의 개수를 고정하면 싶으면 배열 타입이 아닌 튜플 타입으로 만들면 됨
// [number, number, number]
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
