// 서로소 유니온 타입
// 객체 타입을 정의하는 특별한 방법
// 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입

// tag 키워드가 없을 때 세 가지 타입의 관계는 교집합이 있음
// Admin이면서 Member이면서 Guest일 수 있음

// tag가 있으면 교집합이 있을 수 없음
// string literal type은 딱 하나의 값만 포함

function login(user: User) {
  // 더 직관적인 방법
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
      break;
    }
    case 'GUEST': {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
      break;
    }
  }

  // 단순히 kickCount in user 이런 식으로 하면 가독성이 좋지 않음
  // if (user.tag === 'ADMIN') {
  //   // admin 타입
  //   console.log(`${user.name}님 ${user.kickCount}명 강퇴했습니다.`);
  // } else if (user.tag === 'MEMBER') {
  //   // member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
  // } else {
  //   // guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  // }
}

// 서로소 유니온 타입 사용하면 좋을 사례
// 비동기 작업의 결과를 처리하는 객체
// API 호출 등

type LoadingTask = {
  state: 'LOADING';
};

type ErrorTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | ErrorTask | SuccessTask;

// 로딩 중 => 콘솔에 로딩 중 출력
// 실패 => 실패: 에러메세지를 출력
// 성공 => 성공: 데이터를 출력

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩 중');
      break;
    }
    case 'FAILED': {
      console.log(`에러 발생: ${task.error?.message}`);
      // 옵셔널 체이닝 문법을 지우면 에러가 남
      break;
    }
    case 'SUCCESS': {
      console.log(`성공: ${task.response?.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: 'LOADING',
};

const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류 발생',
  },
};

const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터',
  },
};
