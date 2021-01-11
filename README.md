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

## import lodash (모듈)
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
