// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 반환값의 타입이 호환되는가
// 반환값끼리 다운 캐스팅이 되면 안 되도록 평가함
// 업 캐스팅하는 상황은 호환된다고 판단함
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number literal

a = b; // OK
// b = a; // Not OK

// 매개변수의 타입이 호환되는가
// 1. 매개변수의 개수가 같을 때
// 업 캐스팅일 때 호환이 안 된다고 판단함
// 다운 캐스팅이 허용됨
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // Not OK
d = c; // OK

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

// 예시
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc // Not OK
dogFunc = animalFunc; // OK

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // error
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2. 매개변수의 개수가 다를 때
// 할당하려고 하는 쪽의 매개변수의 개수가 더 적을 때에만 호환이 됨
// 당연히 매개변수의 타입 자체가 다르면 당연히 안 됨
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // OK
// func2 = func1 // Not OK
