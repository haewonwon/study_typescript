// 개발자가 의도적으로 타입을 명시하거나 바꾸지 않았는데도 컴파일러 또는 엔진 등에 의해서 런타임에 타입이 자동으로 변경되는 것을 암묵적 타입 변환이라고 함
// 암묵적 타입 변환 여부에 따라 타입 시스템을 강타입과 약타입으로 분류할 수 있음

// 강타입 특징을 가진 언어에서는 서로 다른 타입을 갖는 값끼리 연산을 시도하면 컴파일러 또는 인터프리터에서 에러가 발생함
// 약타입 특징을 갖는 언어에서 서로 다른 타입을 갖는 값끼리 연산할 때는 컴파일러 또는 인터프리터가 내부적으로 판단해서 특정 값의 타입을 변환하여 연산을 수행한 후 값을 도출함

// C++, 자바, 자바스크립트에선느 서로 다른 타입을 갖는 값으로 빼기 연산을 수행하면 정상적으로 동작함
// C++ 와 자바에서는 내부적으로 문자열 타입 값을 숫자 타입인 아스키 값으로 변경해서 연산함
// 자바스크립트에서는 문자열로 표기된 숫자를 실제 숫자 값으로 변환해서 빼기 연산을 함

// 이에 반해 파이썬, 루비, 타입스크립트에서는 컴파일러 혹은 인터프리터에서 타입 에러가 발생함

// 암묵적 변환은 개발자가 명시적으로 타입을 변환하지 않아도 다른 데이터 타입끼리 연산을 진행할 수 있는 편리함을 제공하지만, 작성자의 의도와 다르게 동작할 수 있기 때문에 예기치 못한 오류가 발생할 가능성도 높아짐
