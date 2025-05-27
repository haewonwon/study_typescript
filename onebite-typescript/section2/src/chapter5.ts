// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해 두고 사용하는 타입

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  KOREA = 'ko',
  ENGLISH = 'en',
}

const user1 = {
  name: '김해원',
  role: Role.ADMIN, // 관리자
  language: Language.KOREA,
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 일반 유저
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);
