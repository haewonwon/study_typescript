let numArr: number[] = [1, 2, 3];
let srtArr: string[] = ['hello', 'Im', 'Haewon'];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소가 다양할 경우
let multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, 'hello', true];

tup1.push(3);
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
  ['김해원', 20],
  ['이해원', 22],
  ['박해원', 24],
];
