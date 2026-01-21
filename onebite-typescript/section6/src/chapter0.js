// 자바스크립트의 클래스
let studentA = {
  name: '김해원',
  grade: 'A+',
  age: 25,
  study() {
    console.log('열심히 공부함');
  },
  introduce() {
    console.log('안녕하세요!');
  },
};

// let studentB = {
//   name: '홍길동',
//   grade: 'A+',
//   age: 25,
//   study() {
//     console.log('열심히 공부함');
//   },
//   introduce() {
//     console.log('안녕하세요!');
//   },
// };

// 클래스의 이름은 파스칼 표기법을 사용함
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자 (실제 객체를 만드는 매세드)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부함');
  }

  introduce() {
    console.log(`안녕하세요. ${this.name}입니다.`); // this를 이용해 현재 객체의 프로퍼티 값들을 출력할 수 있음
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자 (확장 시 다른 건 다 지워도 매개변수는 지우면 안 됨)
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 이 코드를 작성해 줘야 함, 부모 클래스의 생성자가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

const studentDeveloper = new StudentDeveloper('김해원', 'A+', 25, 'TS');
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해 만든 객체 -> 인스턴스
let studentB = new Student('홍길동', 'A+', 25); // 이때 생성자를 호출하게 되는 것
console.log(studentB); // Student { name: '홍길동', grade: 'A+', age: 25 }
studentB.study();
studentB.introduce();
