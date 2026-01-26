// 타입스크립트의 클래스
const employee = {
  name: '김해원',
  age: 25,
  position: 'developer',
  work() {
    console.log('일함');
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 'name' 멤버에는 암시적으로 'any' 형식이 포함됩니다.
  // 매개변수의 타입을 지정하지 않고 매개변수를 적었을 때 발생한 에러와 같음
  // 타입을 추론할 정보가 아무것도 없는 상황에 발생함
  // 이럴 때 any 타입이 할당되는데, any 타입은 안전하지 않기 때문에 에러가 발생하는 것임
  // any를 허용하고 싶으면 tsconfig에서 "noImplicitAny": false 옵션 추가하면 됨

  // 속성 'name'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
  // 타입을 정의해도 에러가 발생함
  // 초기값도 없고, 생성자에도 할당되어 있지 않은데 이 필드를 왜 적음? 이라는 뜻임
  // 이 에러를 없애는 방법
  // 1. 선택적 프로퍼티를 이용해 선택적 필드를 만들어 줌
  // 2. 기본값을 그냥 넣어줌
  // 3. 생성자를 만들면 됨 (best)

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}

const employeeB = new Employee('김해원', 25, '개발자');
console.log(employeeB);

// 타입스크립트에서의 클래스는 자바스크립트 클래스로 취급되면서 동시에 타입으로도 취급됨
// 아래처럼 작성 가능
// 타입스크립트가 구조적으로 타입을 결정하는 구조적 타입 시스템을 따르기 때문에 가능함
const employeeC: Employee = {
  name: '',
  age: 12,
  position: '',
  work() {},
};

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // super를 생략하면 에러가 발생함
    this.officeNumber = officeNumber;
  }
}
