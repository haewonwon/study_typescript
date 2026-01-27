// map, forEach 메서드 타입 정의하기

// map 메서드
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
// arr이 string 배열 타입이라면 매개변수 it은 string
// arr이 number 배열 타입이라면 매개변수 it은 number
map(['hi', 'hello'], (it) => it.toUpperCase());
map(['hi', 'hello'], (it) => parseInt(it)); // map 메서드는 이것도 가능해야 함

// forEach 메서드
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it)); // callback 함수의 반환값은 없음

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// it의 타입은 arr2 배열 요소의 타입과 같아야 함
forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(['123', '456'], (it) => {
  it;
});
