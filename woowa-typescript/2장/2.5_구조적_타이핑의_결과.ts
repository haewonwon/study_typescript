interface Cube {
  width: number;
  height: number;
  depth: number;
}

function addLines(c: Cube) {
  let total = 0;

  for (const axis of Object.keys(c)) {
    const length = c[axis];

    total += length;
  }
}

// addLines() 함수의 매개변수인 c는 Cube 타입으로 선언되었고, Cube 인터페이스의 모든 필드는 number 타입을 가지기 때문에 c[axis]는 당연히 number 타입일 것이라고 예측할 수 있음
// 그러나 c에 들어올 객체는 Cube의 width, height, depth 외에도 어떤 속성이든 가질 수 있음
// 따라서 c[axis]가 number 타입이라고 확신할 수 없음 (string 타입일 수도 있음)

const namedCube = {
  width: 6,
  height: 5,
  depth: 4,
  name: 'SweetCube',
};

addLines(namedCube); // width, height, depth, name 모두 포함되어 있지만, addLines 함수는 width, height, depth만 사용하므로 호환 가능함
