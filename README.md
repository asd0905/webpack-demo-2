# webpack-demo-2

## package.json 설치
```
npm init -y
- default형으로 설치하기
```

## webpack, webpack-cli 설치
```
npm install webpack webpack-cli --save-dev
- npm5 부터는 --save는 자동으로 됨
- --save-dev는 개발에만 사용하는 모듈설치
- = npm install name -D
```

### package.json
```
- 옵션
- private
 만약 "private": true 로 package.json 에 설정 해두면, publish 명령을 거부하게 된다.
 이 플래그는 개인적으로만 사용하는 저장소를 무심코 publish 해 버리는 것을 방지한다. 
 만약 (내부 레지스트리 등) 특정 레지스트리 만에 출시하는 환경을 원한다면, 
아래의 publishConfig 를 이용하여 publish시 registry 설정을 덮어 쓸 수 있다.

- main
 "main" 항목은 당신의 프로그램의 시작점이 되는 모듈의 ID 이다. 
 즉, 'foo' 라는 패키지가 있다면, 이 패키지을 사용자가 설치 한 뒤, 
require("foo") 를 실행했을 때 "main"으로 지정한 모듈의 exports 객체가 반환된다.
 모듈 ID는 패키지 루트에 상대적인 경로를 지정해야 한다. 
 대부분의 모듈에 있어서 메인 스크립트를 갖는 것은 유용하지만 종종 그렇지 않을수도 있다.
```

## import lodash (모듈)--------
```
- npm install name (--save)
- 사용하려는 곳에서 import
  예: index.js 에서 import _ from 'lodash'로 사용
```

## webpack 사용
```
- npx webpack 명령어
- ./src/index.js를 ./dis/main.js로 변환해줌
- 사용하던 <script>를 main.js로 수정해주면 사용
```

## webpack 옵션으로 컴파일하기 (webpack.config.js)
```
- webpack.config.js 파일 생성
- 필요한 옵션 작성
- npx webpack --config webpack.config.js 
```

## webpack package.json에 명령어 추가
```
- script옵션에 "build": "webpack" (--watch 붙이면 실시간 감사)
```

### webpack.config.js
```
- devtool
소스맵만들어 주는 옵션
- optimization
압축여부 해주는 옵션
```

## typescript 사용----------

### typescript, ts-loader 설치
```
- npm install -D typescript ts-loader
- webpack.config.js에 ts-loader 사용
  (resole, module 옵션 사용)
- index.ts 파일을 만든다.
```

### tsconfig.json 파일 만들기
```
- ts-loader사용 시에 필요한 옵션들 적용
- 옵션
- libraryTarget: 'umd'
지역변수를 전역변수로 만들어주는 옵션
쿨리스처럼 파일안에서 사용하던 함수를
밖에서 불러와야하는 경우 일반적으로는 사용할 수 없다.
트랜스파일링하면서 지역변수로 바뀌기 때문에
하지만 이를 주면 전역변수가 되기 때문에 사용가능하다. 
```

### custom.d.ts 파일 만들기
```

```

### map options
```
- tsconfig.json에 있는 sourceMap 옵션은 타입스크립트 형태로 보여준다.
  webpack.config.js에서 sourceMap 옵션을 필요로 한다.
  
- webpack.config.js의 sourceMap 옵션은 tsconfig의 그것이 필요 조건은 아니지만
  typescript를 트랜스파일할 때 true, false의 여부에 따라 자바스크립트 방식으로 바뀌어 나오게
  하거나 typescript 그대로 나오게 한다.
```

### target options
```
- tsconfg.json
target의 default는 es3
트랜스파일링한 결과인 파일의 언어를 지정 (사용한 모듈이 es6인데 target을 es5로 하면
es5의 언어로 변경되어 이를 사용하는 브라우저에서도 사용가능)
webpack.config.js에서 target을 같이 사용해줘야 한다.

- webpack.congif.js
target의 default는 web or weblist
typescript에서 tsconfg로 es5바꿔서 트랜스파일링했더라도
모듈을 es5로 사용했지만 typescript언어다.
이를 또 es5로 바꿔줘야지 ie같은 브라우저에서 사용할 수 있는
es5로서의 결과물이 된다.


ts-loader를 거치면서 typescript가 javascript으로 바껴서 내려옵니다.
그렇지만 여전히 es6형식의 문법이 그대로 내려오는 경우가 있음 (화살표, 등등)
그래서 webpack에서 한번 더 걸러준다 es5이면서 자바스크립트로.
```

## babel
```
- @babel/preset-typescript
typescript를 사용하기위해 ts-loader말고 
babel에 포함되어있는 preset을 사용해도 된다.
npm 트렌드를 볼때 ts-loader보다 더 많이 사용하는 추세이고
이전에는 추가로 설치해줘야하는 것들이 많았고 webpack/babel조합의 복잡함을
더 늘리는 걸로보이기도 했으며 무엇보다 미지원 syntax가 많아서
덜 사용하다가 요즘에는 부족한 점들이 많이 개선되어
사용자들에게 많이 사용되어지는것 같다.
용량은 2배정도 ts-loader가 작다. 옵션도 많고

- polyfill
@babel/polyfill이 babel7.4.0 버전 부터 deprecated되었다.
그러고 나서 나온 옵션이
useBuiltIns: 'usage' | 'entry' | false, defaults to false
여기서 중요한건 usage! entry는 필요한 모듈을 각각 다 import해줘야하지만
이는 필요한 부분들이 자동으로 로드되고 겹치는 부분이 있으면 한번만 로드 된다.
"corejs":3,
"shippedProposals": true
or
"corejs":{ version: 3, proposals: true },
이런식으로 넣어주면 된다.

```


### 정리
```
1. typescript를 사용해 번들하게 되면
typescript(es6)을 javascript(es5)로 바꿔줘야한다. (ie를 위해서)
여기서 ts-loaer를 이용해서 es6에서 사용하던 문법을 es5에서 사용할 수 있도록
트랜스파일할 수 있다. ts-loader에서 이작업을 해주면 해준작업그대로
처리받을 수 있도록 webpack에서도 es5로 받아야한다.
webpack target es5에서는 es6문법을 es5문법의 자바스크립트로 바꿔준다.

2. babel을 사용해서 번들하게 되면
es6에서 사용하던 문법을 es5형식으로 바꿨닫고 해도
es6에서 새로생긴 객체들은 그대로 나오게 되어 (promise...) ie와같은
하위 브라우저에서는 사용할 수 없게 된다.
그래서 babel에서 이를 polypill해줘야 한다.
예전에는 @bael/polyfill을 사용했지만 7버전 이상이 도면서
deprecated되었고 core-js를 사용해서 보다 쉽게 사용할 수 있다.

3. 요즘에는 npm trends를 살펴보면
ts-loader보다 babel/preset-typescript를 더 많이 사용한다.
옵션이 많고 가벼운 ts-loader
babel의 프리셋중 하나이며 가장 많이 사용되는 babel/preset-typescript.

웹팩의 타입스크립트 로더에는 인기있는 ts-loader 와 awesome-typescript-loader 가 
있는데 awesome-typescript-loader는 일부 작업의 부하로 컴파일 속도가 느리며, 
ts-loader는 많은 복잡한 캐시 로더를 함께 설정하여 사용해야 하는 불편함이 있다.
그리고 하나의 컴파일러를 관리하는게 더 보기에도 사용하기에도 더 쉬울 수 있기
때문이다.
```

### 발표 내용
```
오늘 발표할 내용은

webpack, typescript, babel의 관계에 관한 것입니다.

웹팩에서 어떻게 타입스크립트를 번들링하고
babel은 왜 사용해야하는지에 관해 예제를 통해 알아보려고 합니다.

웹팩의 기본적인 라이브러리들은 웹팩, 웹팩-클리이며 웹팩 컨피그 파일을 생성해서 옵션을 줍니다.
기본적인 웹팩 컨피그의 모습입니다.
웹팩을 돌려보게되면 es6문법으로 번들링하게 됩니다.
화살표 함수를 보시면 알 수 있습니다.
그래서 기본적으로 target을 es5로 지정해주어야 es6를 지원해주지 않는 브라우저 (ie)에서
제대로 동작 할 수 있습니다.
옵션을 수정하고 번들링하면 화살표 함수가 사라진 것을 확인할 수 있습니다.

이제 타입스크립트를 번들링해보겠습니다.
필요한 라이브러리는 typescript, ts-loader입니다. tsconfig파일을 생성해서 옵션을 정해줍니다.
ts-loader 라이브러리가 typescript를 javascript로 변환 시켜주고
옵션을 통해서 es6문법을 es5로 변환시켜 줍니다.

마지막으로 바벨을 왜 사용해야하는지 알아보겠습니다.
웹팩과 티에스로더로 타입스크립트를 자바스크립트로, es6문법을 es5로 바꿔줬는데
es6에서 새로 생긴 객체들을 바꿔주지 못하기 때문에 이를 지원하지 않는
브라우저에서 신텍스 에러가 발생합니다. 예를들면 promise
이를 해결하기위해 바벨이 필요합니다.polyfill
바벨에 필요한 라이브러리는 바벨코어, 클리, 프리셋-엔브, 바벨로더, 코어-제이에스입니다.
바벨 옵션을 위해 바벨컨피그를 생성합니다.
```
