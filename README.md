# 신호진 202030217

## 3월 27일 강의
### 1. JSX의 역할
- JSX 는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
- React가 createElemente 함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
- 만일 JS로 작업할 경우 직접 createElemente 함수를 사용해야 합니다.
- 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX 는 가독성을 높여 주는 역할을 합니다.

```JSx
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
```jsx
<div>Hello, {name} </div> // JSX 사용
```
```jsx
React.createElement('div',null,'hello') // JSX 미사용
```

### 3. JSX 사용법
- 모든 자바 스크립트 문법을 지원합니다.
- 자바 스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
- 아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.
- 만일 html이나 xml에 자바 스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.
```jsx
const name = '호진';
const element = <h1>안녕, {name}</h1>;

ReactDOM.render{
  element,
  document.getElementById('root');
}
```
- 만일 태그의 속성값을 넣고 싶을 때는 다음과 같이 합니다.
```jsx
const element = <div tabIndex = "0"></div>; // 큰 따옴표 사이에 문자열을 넣거나,

const element = <img src ={user.avatarUrl}></img>; // 중괄호 사이에 자바 스크립트 코드를 넣으면 됨!
```
- 함수형 컴포넌트
``` jsx
root.render(
  <React.StrictMode>
    <Library/> //결과를 보고 싶으면 수정하기 Library에 book을 import했기 때문에 Library 사용
  </React.StrictMode>
);

import React from "react";

export default function Book(props) { //export default는 앞에 쓰는 게 트랜드, props는 생략 가능
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h1>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h1>
        </div>
    );
}

import React from "react";
import Book from "./Book";

export default function Library(props) { 
    return(
        <div>
            <Book name = '처음 만난 파이썬' numOfPage={300} />
            <Book name = '처음 만난 AWS' numOfPage={400} />
            <Book name = '처음 만난 리액트' numOfPage={500} />
        </div>
    );
}   
```


### 4.1 엘리먼트에 대해 알아보기
#### 1. 엘리먼트의 정의
- 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
- 공식 페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들" 이라고 설명하고 있습니다.
- 웹사이트의 경우는 DOM 엘리먼트이며 HTML 요소를 의미합니다.

그렇다면 리액트 엘리먼트와 DOM엘리먼트는 어떤 차이가 있을까요?
- 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있습니다.
- DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
- 반면 리액트 엘리먼트는 변화한 부분만 가지고 있어 가볍습니다.

||DOM|Virtual DOM|
|-|-|-|
|**업데이트 속도**|느리다|빠르다|
|**element 업데이트 방식**|DOM 전체를 업데이트|변화 부분을 가상DOM으로 만든 후 DOM과 비교하여 다른 부분만 업데이트|
|**메모리**| 낭비가 심함 |효율적|

#### 2. 엘리먼트의 생김새
- 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
- 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체 입니다.
- 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.

리액트 엘리먼트의 예를 보면 type 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다는 것을 알 수 있습니다.  
역시 자바 스크립트 객체입니다.
```JSX
{
  type: Button,
  props:{
    color: 'green', children: 'Hello, element!'
  }
}
```
다음 코드는 Button 과 ConfirmDialog 컴포넌트고 ConfirmDialog가 Button 을 포함하고 있습니다.
``` jsx
function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
        <b>
        {props.children}
        </b>
        </button>
    )
}

function ConfirmDialog(props){
  return(
    <div>
    <p> 내용을 확인하셨으면 버튼을 눌러주세요.</p>
    <Button color = 'green'>확인</Button>
    </div>
  )
}
```
#### 3. 엘리먼트의 특징
리액트 엘리먼트의 가장 큰 특징은 불변성입니다. 즉. 한 번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없습니다. 
만일 내용이 바뀌면 어떻게 해야 할까요?

- 이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.
- 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것입니다.
- 이렇게 교체하는 작업을 하기 위해 virtual DOM을 사용합니다.

#### 4. 엘리먼트 렌더링하기
Root DOM node  
다음 html 코드는 id 값이 root 인 div 태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드 입니다. 이 div 태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 Root DOM node 라고 합니다.
```jsx
<div id = 'root'></div>
```
엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요합니더ㅏ.
```jsx
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

#### 4.2 렌더링된 엘리먼트 업데이트 하기
- 다음 코드는 tick() 함수를 정의하고 있습니다.
- 이 함수는 현재 시간을 포함한 element 를 생성해서 root div에 렌더링 해줍니다.
- 그런데 라인 12를 보면 setInterval()함수를 이용해서 위에서 정의한 tick()을 1초에 한 번씩 호출하고 있습니다.
- 결국  1초에 한 번씩 element를 새로 만들고 그것을 교체하는 것입니다.
- 다음 코드를 실행하고, 크롬 개발자도구에서 확인해 보면 시간 부분만 업데이트 되는 것을 확인할 수 있습니다.

```jsx
function tick(){
  const element = (
    <div>
    <h1>안녕, 리액트!</h1>
    <h2>현재시간:{new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
이때 render()함수를 사용하게 됩니다.<br>
이 함수의 첫 번째 파라메터 출력할 리액트 엘리먼트이고, 두번 째 파라메터는 출력할 타겟을 나타냅니다.
<br>즉 리액트 렌터링의 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정이라고 할 수 있습니다.


### 5.1 컴포넌트에 대해 알아보기
- 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 갖습니다.
- 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.
- 컴포넌트는 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.
- 컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서는 유사합니다.
- 다만 입력과 출력은 입력은 Props가 담당하고, 출력은 리액트 앨리먼트의 형태로 출력됩니다.
- 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.

### 5.2 Props 에 대해 알아보기
1. Props 의 개념
- Props는 Prop(property: 속성,특성)의 준말입니다.
- 이 Props가 바로 컴포넌트의 속성입니다.
- 컴포넌트에 어떤 속성, Props 를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
- Props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
- 에어비엔비의 예도 마찬가지 입니다.
2. Props의 특징
- 읽기 전용입니다. 변경할 수 없다는 의미 입니다.
- 속성이 다른 엘리먼트를 생성하려면 새로운 Props를 컴포넌트에 전달하면 됩니다.

Pure함수 vs Impure 함수
- Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수입니다.
- Impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수 입니다.
```jsx
// Pure 함수
// input 을 변겨오하지 않으며 같은 input 에 대해서 항상 같은 output을 리턴
function sum(a,b){
  return a + b;
}

// impure 함수
// input 을 변경함
function withdraw(account amount){
  account.total -= amount;
}
```
- 리액트 공식 문서에는 컴포넌트의 특징을 다음과 같이 설명하고 있습니다.  
All React components must act like pure functions with respect to their props.  
- 모든 리액트 컴포넌트는 그들의 Props 에 관해서는 Pure 함수 같은 역할을 해야 한다.
- 다시 말해 "모든 리액트 컴포넌트는 Props 를 직접 바꿀 수 없고 //여기 작성 못함
#######################################################################

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

