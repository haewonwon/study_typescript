// 맵드 타입 기반의 유틸리티 타입 (2)

// Pick<T, K>
// 뽑다, 고르다
// 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumnailURL?: string;
}

// 타입 변수 K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체 타입에 키값들을 추출한 유니온 타입의 서브 타입만 들어올 수 있음
type Pick<T, K extends keyof T> = {
  // K extends "title" | "tags" | "content" | "thumnailURL"
  // 'title' | 'content' extends "title" | "tags" | "content" | "thumnailURL"
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 콘텐츠',
};

// Omit<T, K>
// 생략하다, 빼다
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">>
// Pick<Post, Exclude<"title" | "tags" | "content" | "thumnailURL", "title">>
// Pick<Post, "tags" | "content" | "thumnailURL">

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumnailURL: '',
};

// Record<K, V>
// 객체 타입을 새롭게 정의할 때 인덱스 시그니처처럼 유연하지만 그것보다는 조금 더 제한적인 객체 타입을 정의할 때 자주 사용됨

// 중복 코드 문제가 심함
type ThumnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumnail = Record<'large' | 'medium' | 'small', { url: string }>;
