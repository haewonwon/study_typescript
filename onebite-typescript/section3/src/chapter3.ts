// Unknown 타입
function unknownExample() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = [1, 2, 3];
  let e: unknown = null;
  let f: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // Error: Type 'unknown' is not assignable to type 'number'.

  // let str: string = unknownVar;
  // Error: Type 'unknown' is not assignable to type 'string'.

  // let bool: boolean = unknownVar;
  // Error: Type 'unknown' is not assignable to type 'boolean'.
}

// Never 타입
function neverExample() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  let neverVar: never;

  // neverVar = 10;
  // Error: Type 'number' is not assignable to type 'never'.
  // neverVar = 'hello';
  // Error: Type 'string' is not assignable to type 'never'.
  // neverVar = true;
  // Error: Type 'boolean' is not assignable to type 'never'.
}

// Void 타입
function voidExample() {
  function voidFunc(): void {
    console.log('Hello, World!');
    return undefined;
  }
}

// Any 타입
function anyExample() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar = undefined;
  let neverVar: never;

  anyVar = unknownVar; // OK, unknown can be assigned to any
  undefinedVar = anyVar; // OK, any can be assigned to undefined
  // neverVar = anyVar;
  // Error: Type 'any' is not assignable to type 'never'.
}
