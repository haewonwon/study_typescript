// 템플릿 리터럴 타입
// 스트링 리터럴 타입들을 기반으로 특정 패턴을 갖는 문자열 타입들을 만드는 기능
// 문자열로 여러가지 상황들에 표현해야 하는 경우에 유용하게 사용함

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`;
