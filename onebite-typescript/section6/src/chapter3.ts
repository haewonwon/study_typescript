// 인터페이스와 클래스
// 보통 클래스를 만들 때 인터페이스로 설계도를 먼저 만들고 구현하는 일은 보통 없음
// 라이브러리의 구현이나 복잡하고 정교한 프로그래밍을 해야 할 때 인터페이스를 이용해 설계도를 구현하는 과정도 분명히 존재할 수 있음
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// implement: 구현하다
// interface는 class의 설계도 역할
// 주의할 점: interface로 정의하는 필드들은 무조건 public임
// private나 protected를 달면 잘못 구현했다고 에러가 뜸
// private 필드가 필요하다면 인터페이스에 정의하지 말고 따로 정의해 줘야 함
class Character implements CharacterInterface {
  // 필드
  // name: string;
  // moveSpeed: number;

  // 생성자
  constructor(public name: string, public moveSpeed: number) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
