// 타입을 사용하는 여러 프로그래밍 언어에서 값이나 객체는 하나의 구체적인 타입을 가지고 있음
// 타임은 이름으로 구분되며 컴파일타임 이후에도 남아있음

interface Developer {
  faceValue: number;
}

interface BankNote {
  faceValue: number;
}

let developer: Developer = { faceValue: 52 };
let bankNote: BankNote = { faceValue: 10000 };

developer = bankNote; // OK
bankNote = developer; // OK

// 그러나 타입스크립트에서 타입을 구분하는 방식은 조금 다름
// 타입스크립트는 구조로 타입을 구분함, 이를 구조적 타이핑이라고 함
