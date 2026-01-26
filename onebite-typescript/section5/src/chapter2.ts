// 인터페이스 합치기
// 선언 합침 (declartion merging)

// 타입 별칭으로 타입을 정의할 때는 동일한 타입을 두 번 정의하려고 하면 에러가 발생함
// 하지만 인터페이스는 타입 별칭과 달리 에러가 발생하지 않음
// 동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐지기 때문

interface Person {
  name: string;
}

interface Person {
  // name: number;
  // 충돌은 허용되지 않음 / 후속 속성 선언에 같은 형식이 있어야 합니다. 'name' 속성이 'string' 형식이어야 하는데 여기에는 'number' 형식이 있습니다.
  // 서브 타입도 안 됨 반드시 같은 타입으로만 정의해야 함
  age: number;
}

// 합쳐짐
const person: Person = {
  name: '',
  age: 27,
};

// 선언 합침은 보통 잘 사용되지 않음 라이브러리의 타입 정의가 부실한 경우, 직접 이 타입을 추가하고 정확하게 만들어주는 일종의 모듈 보강 작업을 할 때 사용함
// 모듈 보강 (예시가 완벽하진 않음)
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
