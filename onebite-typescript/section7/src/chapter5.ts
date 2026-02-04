// 프로미스 (Promise)
// 제네릭을 활용해 비동기 처리를 돕는 프로미스 객체의 타입을 정의하는 방법을 공부할 것

const promise = new Promise<number>((resolve, reject) => {
  // resolve: 비동기 작업이 성공했을 때 호출하는 함수
  // 20: 비동기 작업의 결과값
  // reject: 비동기 작업이 실패했을 때 호출하는 함수, 인수로 실패의 이유를 전달함

  setTimeout(() => {
    // resolve(20);
    reject('실패');
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // error: 'response'은(는) 'unknown' 형식입니다.
  // unknown 타입은 모든 연산이 불가하기에 오류가 발생함
  // 다만 resolve의 인수로 넘버 타입을 전달해 number 타입으로 추론되어야 할 것 같은데 unknown 타입으로 추론되고 있음
  // promise는 resolve나 reject를 호출해서 전달하는 비동기 작업의 결과값의 타입을 자동으로 추론할 수 있는 기능을 가지고 있지 않음
  // 그래서 기본적으로 결과값을 unknown 타입으로 추론함
  // 그렇다고 누가 봐도 number 타입인 값을 타입 좁히기하기엔 번거로움
  // 이때 제네릭을 활용하면 됨
});

// reject의 인수로는 뭐든 가능하기에 any 타입으로 들어옴
promise.catch((err) => {
  // 타입 좁히기
  if (typeof err === 'string') {
    console.log(err);
  }
});

// promise는 제네릭 클래스 기반으로 타입이 선언되어 있기 때문에 타입 변수로 비동기 처리의 결과값의 타입을 정의해 줄 수는 있지만 실패했을 때의 타입은 정해줄 수 없음

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

// 1. 타입 변수
// 2. 함수의 반환값 타입을 직접 명시 (추천, 협업의 관점에서 볼 때 가독성이 더 좋음)
function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '제목',
        content: '게시글 콘텐츠',
      });
    });
  });
}

const postRequet = fetchPost();
postRequet.then((post) => {
  post.id;
});
