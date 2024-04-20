# 신호진 202030217

## 4월 17일 강의

### 7.1 훅이란 무엇인가?
- 클래스형 컴포넌트에서는 생성자(constuctor)에서 state를 정의하고, setState() 함수를 통해 state를 업데이트 합니다.
- 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.
- 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook) 입니다.
- 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었습니다.
- Hook 이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수' 를 의미합니다.
- 훅의 이름은 모두 'use' 로 시작합니다.
- 사용자 정의 훅(custom hook)을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use' 로 시작할 것을 권장합니다.

### 7.2 useState
- useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook 입니다.
- 다음 예제는 버튼을 클릭할 때 마다 카운트가 증가하는 함수형 컴포넌트 입니다.
- 하지만 증가는 시킬 수 있지만 증가할 때마다 재 렌더링은 일어나지 않습니다.
- 이럴 때 state를 사용해야 하지만 함수형에는 없기 때문에 useState() 를 사용합니다.
~~~jsx
import { useState } from "react"

export default function Counter(props){
    //let count=0

    const [count, setCount] = useState(0)

    return(
    <>
    <p>총 {count}</p>
    <button onClick={() => setCount(count+1)}>
        클릭
    </button>
    </>
    );
}
~~~
- useState() 함수의 사용법은 다음과 같습니다.
- 첫 번째 항목은 state의 이름(변수명)이고,
- 두 번째 항목은 state의 set 함수 입니다. 즉 state를 업데이트 하는 함수입니다.
- 함수를 호출 할 때 state의 초기값을 설정합니다.
- 함수의 리턴 값은 배열의 형태입니다.

### 7.3 useEffect
- useState와 함께 가장 많이 사용하는 Hook 입니다.
- 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
- 영어로 side effect는 부작용을 의미합니다. 일반적으로 프로그래밍에서 사이트 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말합니다.
- 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect 의 의미에 가깝습니다.
- 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다.
- 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링중에는 작업이 완료 될 수 없기 때문입니다. 렌더링이 끝난 이후에 실행되어야 하는 작업들입니다.
- 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.
- 저자는 useEffect 가 side effect가 아니라 effect 에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해이다. 부작용의 부를 不로 생각했기 때문이다.
- side effect 는 副作用으로 '원래의 용도 혹은 목적의 효과외에, 부수적으로 다른 효과가 있는 것' 을 뜻하는 것입니다.
- 결국 sideEffect 는 렌더링 외에 실행해야 하는 부수적인 코드를 말합니다.
- 예를 들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들 입니다.

- useEffect() 함수는 다음과 같이 사용합니다.
- 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다.
~~~jsx
useEffect(이펙트 함수, 의존성 배열);
~~~
- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다.
- 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됩니다.
- 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러 번 실행되지 않습니다.

## 4월 3일 강의
3. Props 사용법
- JSX 에서는 key-value 쌍으로 props 를 구성합니다.
```JSX
function App(props){
  return(
    <Profile name = "소플"
    introduction = "안녕하세요, 소플입니다." 
    viewCount={1500}
    />
  );
}
```
위의 코드는  
1.Profile 컴포넌트로 전달해서 name,introduction, viewCount에 각각 속성을 할당하는,  
2.이때 전달되는 props 는 다음과 같은 자바스크립트 객체입니다.
```jSX
{
  name: "소플",
  introduction: "안녕하세요, 소플입니다.",
  viewCount: 1500
}
```
- JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있다고 배웠습니다.
- 다음 코드처럼 props를 통해서 value 를 할당 할 수도 있고, 직접 중괄호를 사용하여 할당할 수도 있습니다.
```JSX
function App(props){
  return(
    <Layout
      width={2560}
      height={1440}
      header={
        <Header title="소플의 블로그입니다."/>
      }
      footer={
        <Footer />
      }
    />
  )
}
```
- JSX를 사용하지 않는 경우 props의 전달 방법은 createElement()함수를 사용하는 것입니다.

### 5.3 컴포넌트 만들기
1. 컴포넌트의 종류
- 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
- 이후 Hook 이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
- 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에,
- 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.

2. 함수형 컴포넌트
- Welcome 컴포넌트는 props를 받아, 받은 props 중 name 키의 값을 "안녕," 뒤에 넣어 반환합니다.

```JSX
function Welcome(props){
  return <h1>안녕, {props.name}</h1>;
}
```

3. 클래스형 컴포넌트
- Welcome 컴포넌트는 React.Component class로 부터 상속을 받아 선언합니다.
```JSX
class Welcome extends React.Component{
  render(){
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```
4. 컴포넌트 이름 짓기
- 이름은 항상 대문자로 시작합니다.
- 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다. html tag.
- 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

5. 컴포넌트의 렌더링
- 렌더링의 과정은 다음 코드와 같습니다.
```JSX
function Welcome(props){
  return <h1>안녕, {props.name}</h1>;
}

const element = <Welcom name ="인제"/>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### 5.4 컴포넌트 합성
- 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.
- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있습니다.
- 다음 코드에서는 props의 값을 다르게 해서 Welcome 컴포넌트를 

### 5.5 컴포넌트 추출
- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.
- 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.

- Comment 는 댓글 표시 컴포넌트 입니다.
- 내부에는 이미지, 이름, 댓글과 작성일이 포함되어 있습니다.
- 첫 번째로 이미지 부분을 Avatar 컴포넌트로 추출해 보겠습니다.

```JSX
function Avatar(props){
  return(
    <img className="avatar"
    src ={props.user.avatarUrl}
    alt ={props.user.name}
    />
  );
}
```
- 두 번째로 사용자 정보 부분을 추출합니다.
- 컴포넌트 이름은 UserInfo로 합니다. React 컴포넌트 이름은 Camel notation 을 사용합니다.
- UserInfo 안에 Avatar 컴포넌트를 넣어서 완성시킵니다.
```JSX
function UserInfo(props){
  return(
    <div className="user-info">
      <Avatar user={props.user}/>
      <div className="user-info-name">
        {props.user.name}
      </div>
  );
}
```

### 5.6(실습) 댓글 컴포넌트 만들기
- 프로젝트 디렉토리에서 /src/chapter_05 만

### 6.1 state
1. State란?
- State는 리액트 컴포넌트의 상태를 의미합니다.
- 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.
- 정확히는 컴ㅁ포넌트의 변경가능한 데이터를 의미합니다.
- State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state의에 포함시켜야 합니다.

2. State의 특징
- 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.
- 예의 LikeButton 은 class 컴포넌트 입니다.
- constructor는 생성자이고 그 안에 있는 this.state가 현 컴포넌트의 state입니다.
- 함수형에서는 useState() 라는 함수를 사용합니다.

### 6.2 생명주기에 대해 알아보기
- 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것입니다.
- constructor가 실행 되면서 컴포넌트가 생성됩니다
- 생성 직후 componentDidMount() 함수가 호출됩니다.
- 컴포넌트가 소멸하기 전까지 여러 번 렌더링 합니다.
- 렌더링은 props, setState(), forceUpdate() 에 의해 상태가 변경되면 이루어집니다.
- 그리고 렌더링이 끝나면 componentDidUpdate() 함수가 호출됩니닫.
- 마지막으로 컴포넌트가 언마운트 되면 componentWillUnmount() 함수가 호출됩니다.

```JSX
class LikeButton extends React.Component{
    constructor(props){
      super(props);

      this.state={
        liked: false
      };
    }

    ...
}
```

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
// input 을 변경하지 않으면 같은 input 에 대해서 항상 같은 output을 리턴
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
- 다시 말해 "모든 리액트 컴포넌트는 Props 를 직접 바꿀 수 없고  //여기 작성 못함
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

