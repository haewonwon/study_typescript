// 제네릭 클래스

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(['1', '2']);
stringList.push('hello');

// StringList 클래스가 필요할 때는 NumberList를 그대로 복붙해서 타입을 string으로 변경해야 함
// 다만 이 작업은 너무 많은 중복이 발생함 즉, 비효율적임
// 이때 제네릭 클래스를 이용해서 문제를 해결하는 게 좋음
// class StringList {
//   constructor(private list: string[]) {}

//   push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와는 다르게 클래스의 생성자를 호출할 때 생성자의 인수로 전달하는 값을 기준으로 타입 변수의 타입을 추론힘
// 그렇기 때문에 둘과 다르게 앞에다 타입을 명시해 주지 않아도 됨
// const numberList = new List([1, 2, 3]); // OK
// const numberList = new List<number>([1, 2, 3]);
