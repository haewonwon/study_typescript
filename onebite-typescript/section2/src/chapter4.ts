// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '김해원',
  nickname: 'haewonwon',
  birth: '2002.02.21',
  bio: '안녕하세요',
  location: '인천',
};

let user2: User = {
  id: 2,
  name: '홍길동',
  nickname: 'haewonwon',
  birth: '2002.02.21',
  bio: '안녕하세요',
  location: '인천',
};

// 인덱스 시그니처
type countryCodes = {
  [key: string]: string;
};

let countryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  UnitedKingdom: 'uk',
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};
