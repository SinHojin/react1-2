# 신호진 202030217

## 3월 27일 강의
### 1. JSX의 역할
- JSX 는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
- React가 createElemente 함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
- 만일 JS로 작업할 경우 직접 createElemente 함수를 사용해야 합니다.
- 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX 는 가독성을 높여 주는 역할을 합니다.

```JS
class Hello extends React.Component{
  render(){
    return <div>Hello{this.props.toWhat}</div> // JSX 사용
  }
}

ReactDOM.render(
  <Hello toWhat="world"/>, // JSX 사용
  document.getElementById('root')
)
```
### 2. JSX의 장점
- 코드가 간결해 집니다.
- 가독성이 향상 됩니다.
- Injection Attack 이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.
```html
<div>Hello, {name}</div> <!-- JSX 사용-->
```
```js
React.createElement('div',null,'hello') // JSX 미사용
```

### 3. JSX 사용법
- 모든 자바 스크립트 문법을 지원합니다.
- 자바 스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
- 아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.
- 만일 html이나 xml에 자바 스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.
```js
const name = '호진';
const element = <h1>안녕, {name}</h1>;

ReactDOM.render{
  element,
  document.getElementById('root');
}
```
- 만일 태그의 속성값을 넣고 싶을 때는 다음과 같이 합니다.
```js
const element = <div tabIndex = "0"></div>; // 큰 따옴표 사이에 문자열을 넣거나,

const element = <img src ={user.avatarUrl}></img>; // 중괄호 사이에 자바 스크립트 코드를 넣으면 됨!
```

## 3월 20일 강의
### 1. 리액트는 무엇인가?
- 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리이다.

### 2. 다양한 JavaScript Ui Frameworks
1. react.js  
2. Express  
3. Node.js  
4. Vue.js  
5. AngularJS  
6. Node.js  
7. Swelter  
8. NetUS  
9. NextJS  

### 3. 리액트 개념정리
- 복잡한 사이트를 쉽고 빠르게 만들고 관리하기 위해 만들어진것이 바로 리액트  
- 다른표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구
### 4. 리액트의 장점
1. 빠른 업데이트와 랜더링 속도
- Virtual DOM  
- DOM(Document Object Model)이란 XML, HTML문서의 각 항목을 계층으로 표현하여 생성, 변형, 변환, 삭제할 수 있도록 돕는 인터페이스. 이것이 W3C의 표준  
- Virtual DOM은 DOM조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법  
- >DOM은 동기식, Virtual DOM은 비동기식 방법으로 랜더링을 함  
2. 컴퍼넌트 기반 구조
- 리액트의 모든 페이지는 컴포넌트로 구성됨
- 하나의 컴포넌트는 다른 여러개의 컴포넌트 조합으로 구성할 수 있음
- 그래서 리액트로 개발을 하다 보면 레고 블록을 조립하는것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됨
3. 재사용성
* 반복적인 작업을 줄여주기 때문에 생산성을 높여준다.
* 유지보수가 용이하다.
* 재사용이 가능 하려면 해당 모듈의 의존성이 없어야함.
* 든든한 지원군
메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발젆아고 있습니다.
* 활발한 지식 공유 & 커뮤니티
* 모바일 앱 개발 가능

리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(crosss-platform) 모바일 앱을 개발할 수 있습니다.

### 5. 리액트의 단점

1. 방대한 학습량
- 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.

2. 높은 상태 관리 복잡도
- state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.

## 3월 13일 강의

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
```

## 3월 6일 강의
# h1
## h2
### h3
#### h4
##### h5
###### h6 

# 리스트
1. 첫 번째
2. 두 번째
3. 세 번째

- 첫 번째
- 두 번째

*이탤릭체*  
**굵게**  
***두개합침***

개행은  
스페이스 두개

