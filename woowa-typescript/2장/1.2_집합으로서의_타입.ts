// 프로그래밍에서의 타입은 수학의 집합과 유사함
// 타입은 값이 가질 수 있는 유효한 범위의 집합을 말함

const num: number = 123;
const str: string = 'abc';

function func(n: number) {
  // func() 함수의 인자로 number 타입 값만 할당할 수 있도록 제한되어 있음
}

func(num);
// func(str); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// 따라서 number의 집합에 속하지 않는 string 타입의 str을 func() 함수의 인자로 전달하면 에러가 발생함
