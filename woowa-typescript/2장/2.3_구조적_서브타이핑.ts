// 타입스크립트의 타입은 값의 집합이라고 생각할 수 있음
// 타입은 단지 집합에 포함되는 값이고 특정 값은 많은 집합에 포함될 수 있음
// 따라서 타입스크립트에서는 특정 값이 string 또는 number 타입을 동시에 가질 수 있음

type stringOrNumber = string | number;

// 이처럼 집합으로 나타낼 수 있는 타입스크립트의 타입 시스템을 지탱하고 있는 개념이 바로 구조적 서브타이핑임
// 구조적 서브타이핑이란 객체가 가지고 있는 속성 (프로퍼티) 을 바탕으로 타입을 구분하는 것
// 이름이 다른 객체라도 가진 속성이 동일하다면 타입스크립트는 서로 호환이 가능한 동일한 타입으로 여김

interface Pet {
  name: string;
}

interface Cat {
  name: string;
  age: number;
}

let pet: Pet;
let cat: Cat = { name: 'Zag', age: 5 };

pet = cat; // Cat 타입은 Pet 타입의 서브타입이므로 호환이 가능함

// 구조적 서브타이핑은 함수의 매개변수에도 적용됨

interface Pet {
  name: string;
}
// let cat = { name: 'Zag', age: 5 }; // 위에서 이미 선언해 주석 처리함
function greet(pet: Pet) {
  console.log('Hello, ' + pet.name);
}

greet(cat); // Cat 타입은 Pet 타입의 서브타입이므로 호환이 가능함

// cat 객체는 Pet 타입의 서브타입이므로 greet 함수의 매개변수로 전달할 수 있음

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Developer2 {
  name: string;
  age: number;
  sleepTime: number;

  constructor(name: string, age: number, sleepTime: number) {
    this.name = name;
    this.age = age;
    this.sleepTime = sleepTime;
  }
}

function greet2(p: Person) {
  console.log(`Hello, I'm $(p.name)`);
}

const developer2 = new Developer2('zig', 20, 7);

greet2(developer2); // Hello, I'm zig
