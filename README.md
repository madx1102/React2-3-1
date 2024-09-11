# React2-3-1 202030407 김석진

Path 등록 안해서 인터넷 찾아서
github 레포지트리 연동하고 npm 찾느라 강의를 못들음

명령어 정리
npm i -g create-react-app


## ECMAScipt 기능 중 파이프라인 연산자
공식적으로 채택되지 않은 연산자이며  
바벨 플러그인을 설치해야 함 

## 설정 관련

개발 시 타입스크립트를 주 언어로 쓰고 싶다면 다음과 같은 방법으로 전용 플러그인을 설치하고, 설정을 바꾸면 됨  
//프로젝트를 생성할 때 선택 가능하기에 생성할 때 설정하는 것을 추천  

웹팩 : 라이프러지 페이지 기능에 대한 컴파일된 코드를 전부 포함하는 번들을 만들어 줌  
라이브러리와 여러 컴포넌트로 구성된 페이지를 개발했다면, 웹팩은 이 것을 하나의 번들로 합쳐줌   
SASS LESS 같은 CSS 전처리기를 사용해 개발하고 싶으면 웹팩 설정을 수정  


## Transplie
바벨은 ECMAScipt와 같은 자바스크립트 최신 버전이나, TypeScript 이전 버전의 코드로 변환시켜 주는 Transplie 도구  
개발자가 작성한 코드 -> Parse -> Transform-> Generate -> 이전 버전의 코드
바벨의 parser는 자바스크립트를 컴퓨터가 이해할 수 있는 코드 구조인
Abstract SyntaxTree(AST)로 변환해주는 역할을 수행  
바벨의 traverse 모듈은 AST를 유지하며 노드 교체, 추가 , 제거를 담당  
generator가 수정된 AST를 일반 코드로 변환  
  
SWC도 바벨과 같은 자바스크립트 트랜스 컴파일러  
next12 이후 바벨에서 SWC로 교체됨
SWC는 Rust로 작성되어 바벨에 비해 속도가 매우 빠르다  

## SWC를 프로젝트에 적용하려면
새로운 프로젝트에 적용하는 것은 다음 명령으로 생성하면 바로 사용 가능
$ npx crate-next-app@latest  
or  
$ npx crate-next-app@12  
next 12 이전 버전의 프로젝트에 적용하려면 다음과 같이 업그레이드 해야 함  
$ npm install next@12  (그리 추천하지는 않음)  

## 렌더링 전략
웹 페이지 또는 어플리케이션을 웹 브라우저에 제공하는 방법을 의미  
정적 페이지 제작은 Gastsby를 추천 (리액트 기준)  
서버 사이드 렌더링 전략을 원하면 다른 프레임워크를 검토해보는 것을 권장  
  
Next.js에서는 이 모든 방법을 새로운 수준으로 제공  
어떤 페이지는 빌드 시점에 정적으로 생성, 어떤 페이지는 실행 시점에 동적으로 생성할 지 쉽게 정할 수 있음  
특정 페이지에 대한 요청이 있을 때마다 페이지를 다시 생성 할 수 있음  
반드시 클라이언트에서 렌더링해야 할 컴포넌트도 지정 가능해 개발이 원활하다  

## 서버 사이드 렌더링 SSR
웹 페이지를 제공하는 가장 흔한 방법  
APM을 이용하는 일반적인 웹 페이지 생성  
자바스크립트 코드가 적재되면 동적으로 페이지 내용을 렌더링  
  
Next.js도 이와 같이 동적으로 페이지를 렌더링 가능  
여기에 스크립트 코드를 집어 넣어서 나중에 웹 페이지를 동적으로 처리 (하이드레이션)  
  
한 사람이 작성한 여러 글을 한 페이지에 모아서 작성해야한다면 SSR을 이용하는 것이 적당함  
서버 사이드 렌더링 -> 자바스크립트가 하이드레이션된 페이지 전송 -> 클라이언트에서 DOM 위에 하이드레이션하여 페이지 새로고침 없이 사용자와 웹 페이지간 상호 작용 가능하게 함  
리액트 하이드레이션 덕분에 이 상태에서 웹 앱을 싱글 페이지 애플리케이션 처럼 작동 할 수 있음  
CSR SSR의 장점을 모두 가지는 것  
특정 렌더링 전략만 사용한다고 가정하면 SSR이 CSR에 비해 여러 장점이 있음  
  
### SSR의 장점
더 안전한 웹 애플리케이션 : 쿠키 관리 주요 API 데이터 검증 등의 작업을 서버에서 처리하여 중요 데이터를 클라이언트에 노출하지 않음    
더 뛰어난 웹 사이트 호환성  
더 뛰어난 SEO  

## SSR이 최적의 렌더링 전략이 아닌 경우
다른 방식에 비해 SSR은 더 많은 자원, 더 많은 부하 , 더 많은 유지 보수 비용  
페이지 요청 처리 시간이 길어짐  
페이지가 외부 API 또는 데이터 소스에 접근해야 한다면, 렌더링 할 때 마다 이를 다시 요청해야 함  
페이지 간의 이동이 CSR에 비해 느림  
Next.js는 기본적으로 빌드 시점에 정적으로 페이지를 만듬  
페이지에서 동적 작업을 해야한다면 해당하는 함수를 페이지에 export 해야함  

## 클라이언트 사이드 렌더링 CSR
React 앱을 실행하면 렌더링 시작 전에 빈 화면이 한동안 유지 되는 것이 보임  
이는 서버에서 스크립트와 스타일만 포함된 HTML을 전송하기 때문  
실제 렌더링은 클라이언트에서 이루어짐  
CSR로 생성한 앱의 HTML을 보면 div 태크 하나 밖에 없어서 빈 화면만 보였던 것  
빌드 과정에서 js와 css파일을 HTML페이지에 불러오도록 만들고 root div에 렌더링 함  
  
## 장점은 단점이 될 수 있다  
네트워크 속도가 느린 환경에서는 번들이 모두 다운로드 될 때까지 계속 빈 페이지를 보아야 한다  
검색 로봇에게도 그 내용은 빈 것으로 보임  
번들을 모두 받을 때까지 검색 로봇이 기다리기는 하지만 성능 점수는 낮을 것 
  
### React.useEffect Hook
최근 리액트는 함수형 컴포넌트 사용을 강조하여 life cycle 함수 대신 Hook을 사용  
함수형 컴포넌트 내에서 DOM 조작이나 데이터 불러오기 같은 사이드 이펙트 기능을 구현할 때, useEffec 함수를 사용해 컴포넌트가 마운트 된 후 해당 기능을 실행하도록 만들 수 있음  

## 정적 사이트 생성 SSG
SSG는 일부 또는 전체 페이지를 빌드 시점에 미리 렌더링  
SSG은 SSR 및 CSR과 비교할 때 다음과 같은 장점이 있다  
쉬운 확장 : 단순 HTML 파일이므로 CDN을 통해 파일을 제공하거나 캐시에 저장하기 쉬움  
뛰어난 성능 : 미리 랜더링 해서 클라나 서버가 처리할 필요가 없음  
더 안전한 API 요청 : 빌드 시점에 렌더링 되서 보호해야할 데이터에 접근할 일이 없음 
  
SSG는 높은 확장성과 뛰어난 성능을 보이는 프런듵엔드 애플리케이션을 만들고 싶을 때 가장 좋은 방법이다  
한 가지 문제점을 일단 웹 페이지를 만들고 나면 다음 배포 전까지 내용이 변하지 않는다는 것  
조금이라도 수정하려면 필요한 데이터를 가져와서 수정하고 다시 생정하는 과정을 반복해야 한다  
이런 문제 때문에 나온 방법이 "증분 정적 재생성 (ISR)"  
동적 컨텐츠를 제공할 때 로딩하는데 시간이 오래 걸린다면, SSG ISR을 함께 사용하면 문제를 해결 할 수 있다  
많은 양의 데이터를 필요로 하는 복잡한 대시보드를 만든다면, 데이터를 불러오기 위한 RESTAPI 호출에 수 초가 소요됨  
데이터가 자주 변하지 않는다면 SSG와 ISR을 사용해 데이터를 10분동안 캐싱할 수 있다    

