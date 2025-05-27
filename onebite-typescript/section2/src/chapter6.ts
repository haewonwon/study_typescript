// any
let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // any 타입은 모든 메서드와 프로퍼티에 접근할 수 있음
anyVar.toFixed(); // 숫자 메서드도 사용 가능

let number: number = 10;
anyVar = number; // any 타입은 다른 타입의 값도 할당 가능

// unknown
let unknownVar: unknown;
unknownVar = 10;
unknownVar = 'hello';
unknownVar = true;
