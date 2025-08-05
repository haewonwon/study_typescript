// 기본 타입 간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입 간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog;

// dog = animal;
// // Error: Type 'Animal' is not assignable to type 'Dog'.

// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs',
};

// 1)
book = programmingBook;
// programmingBook = book;
// // Error: Type 'Book' is not assignable to type 'ProgrammingBook'.
// 다운 캐스팅임

// 2) 초과 프로퍼티 검사
let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs', // skill 속성이 Book 타입에 없으므로 할당 불가
};

// 3) 이런 경우는 허용됨
let boo3: Book = programmingBook;

// 4) 함수의 인수로 객체 리터럴을 전달할 때도 마찬가지임
function func(book: Book) {}

func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs',
});

func(programmingBook);
