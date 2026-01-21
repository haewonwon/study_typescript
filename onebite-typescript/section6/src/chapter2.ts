// 접근 제어자 (access modifier)
// public, private, protected
// 객체 지향 프로그래밍을 할 때 중요한 역할을 하는 문법
// 은닉화하는 게 일반적임 (즉, 클래스의 인스턴스를 외부에서 수정할 수 없도록 막는 게 일반적)

// public: 기본적인 접근 제어자 / 아무 제약 없는 상태 / 외부에서도 접근 가능 / 지워도 기본적으로 public
// private: 가장 제한적인 접근자 / 클래스 내부가 아니라면 어디서든지 접근이 불가능 / 파생 클래스에서도 접근 불가
// protected: 외부에서는 아예 접근 자체가 불가능 / 파생 클래스 내부에서는 접근할 수 있음 / public과 private의 중간에 있는 접근 제어자

// private으로 설정하면 아래처럼 에러가 발생함
// 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.
// 클래스 외부에서 접근하는 게 아예 다 제한됨 읽을 수조차도 없음
// 메서드 안에서만 접근할 수 있음
// 파생 클래스 내부에서도 사용할 수 없음

// 외부에서는 접근 안 되게, 파생 클래스에서는 접근되도록 하고 싶다면 protected를 사용하면 됨
class Employee {
  // 필드
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자
  // 생성자의 매개변수 앞에도 접근 제어자를 달 수 있음
  // 다만 에러 발생 / 'name' 식별자가 중복되었습니다.
  // 생성자의 매개변수들에 접근 제어자들 달아주면 자동으로 알아서 필드를 만듦
  // 필드의 값 초기화도 자동으로 함
  constructor(private name: string, protected age: number, public position: string) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position); // super를 생략하면 에러가 발생함
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    console.log(`${this.age}`);
  }
}

const employee = new Employee('김해원', 25, '개발자');
// 프로퍼티에 접근해 값을 수정할 수 있음
// 객체이기도 하고, 각각의 필드에 접근 제어자가 기본적으로 public이 설정되어 있기 때문
// 아무것도 쓰지 않으면 public 접근 제어자가 붙어있다고 이해하면 됨
// employee.name = '홍길동';
// employee.age = 30;
employee.position = '디자이너';

console.log(employee);
