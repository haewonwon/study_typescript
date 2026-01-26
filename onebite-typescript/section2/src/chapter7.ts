// void
// 아무것도 반환하지 않는 함수의 반환 타입

function func(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void;
// a = 10; // void 타입은 아무것도 할당할 수 없음
// a = undefined; // undefined는 할당 가능
// a = null; // null도 할당 가능 (strictNullChecks가 false일 때)

// never
// 절대 반환하지 않는 함수의 반환 타입

function func3(): never {
  // 무한 루프, 반환할 수 없어서
  while (true) {}
}

function func4(): never {
  throw new Error('에러 발생');
}

let b: never;
