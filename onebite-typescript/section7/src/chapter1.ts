// 타입 변수 응용하기

// 첫 번째 사례
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2); // error: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
// 첫 번째 인수로 string을 전달했기 때문에 T가 string 타입으로 할당됨
// 이럴 때는 타입 변수를 두 개 선언하면 됨

// 두 번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];

  // 타입 변수를 사용하면 함수 내부에서는 아직 이 타입 변수 T에 할당될 타입이 뭔지 모름
  // 그래서 최대한 오류가 발생하지 않는 쪽으로 제한하기 위해 TS가 타입 변수의 Type을 unknown으로 추론함

  // 이럴 때는 T 배열 타입으로 바꿔주면 됨
  // T가 뭐가 될지 몰라서 unknown 타입이긴 한데 그래도 데이터의 타입은 unknown 배열 타입이라고 정의해 주는 것
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, 'hello', 'mynameis']);
// "hello"
// number 타입의 값을 배열에 추가하면 string union 타입으로 추론되고 있음
// 매개변수에 number, string의 유니온 타입이 제공됨 그렇기 때문에 타입 변수 T에도 number와 string의 유니온 타입이 할당됨
// Data의 매개변수 타입이 결국 number, string 매개변수의 배열 타입으로 잡히기 때문에 첫 번째 요소를 꺼내서 반환해라 라고 하면 TS는 첫 번째 요소가 number인지 string인지 모르기 때문에 그냥 유니온 타입으로 반환하는 것임
// 하지만 우리는 첫 번째 요소의 타입을 바꿔도 진짜 첫 번째 요소의 타입인 number 타입으로 추론되는 것을 원함
// 이럴 때는 데이터 매개변수의 타입을 배열 타입이 아닌 튜플 타입으로 써야 함
// 튜플 타입은 특정 인덱스에 해당하는 요소의 타입을 지정할 수 있는 기능이 있기 때문임
// data: [T, ...unknown[]]

// 세 번째 사례
// extends 키워드를 이용해 타입 변수의 조건을 달아 제한할 수 있음
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength('12345'); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10);
