// infer
// inference(추론)
// 조건부 타입 내에서 특정 타입만 딱 추론해 올 수 있는 기능
// infer R
// R을 추론하라

type FuncA = () => string;
type FuncB = () => number;

// string 타입이냐는 것밖에 검사를 못함
// type ReturnType<T> = T extends () => string ? string : never;

type ReturnType<T> = T extends () => infer R ? R : never;
// infer R을 R이라는 타입 변수처럼 생각하면 됨
// R 타입은 조건식을 참으로 만드는 타입을 추론하도록 동작함

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>;

// 예제
// 타입 변수 T에 제공한 프로미스 타입에서 프로미스의 결과값 타입만 똑 떼오는 함수
// 1. T는 프로미스 타입이어야 함
// 2. 프로미스 타입의 결과값 타입을 반환해야 함
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
