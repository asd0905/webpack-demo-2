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
```
