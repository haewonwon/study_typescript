// 인덱스드 엑세스 타입 (Indexd Access Type)
// 인덱스를 이용해 다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const key = 'author';

// 대괄호 안 스트링 리터럴 타입을 특별히 인덱스라고 부름
function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

// 대괄호 안에 number type을 넣어주면 이 배열 타입으로부터 하나의 요소 타입만 가져옴
// 숫자를 넣어도 똑같음 다만 숫자는 값이 아니라 타입임
const post: PostList[number] = {
  title: '제목',
  content: '본문',
  author: {
    id: 1,
    name: '김해원',
    age: 25,
  },
};

// 주의할 점
// 인덱스에 들어가는 문자열은 값이 아니라 타입이라는 점
// 인덱스에 들어올 수 있는 건 오로지 타입
// 존재하지 않는 프로퍼티 이름을 적으면 에러 발생

// 객체의 특정 프로퍼티뿐만 아니라 배열 타입으로부터 특정 요소의 타입을 뽑아내는 것도 가능함

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TypNum = Tup[number]; // 특정 인덱스가 아닌 number를 넣으면 튜플 타입 안에 있는 모든 타입의 최적의 공통 타입을 뽑아옴
