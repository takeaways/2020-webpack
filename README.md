# Webpack

## npm

1. 장점

- 라이브러리 의존성을 확실하게 구별할 수 있다.
- 바로 설치에서 사용할 수 있다.

- npm init -y
- Node package manager

```bash
node -v
npm -v
```

2. npm 사용

```bash
npm i gulp //node_modules
npm i --save-prod
npm i -D

npm i -g gulp //usr/local/lib/node_modules 에 설치 됩니다.
npm uninstall gulp //uninstall
```

3. dependencies vs devdependencies

- npm run build 실행시 devdependencies는 설치되지 않아요!
- dependencies 로직과 연동 - 직접 연관
- devdependencies 개발 보조용

# webpack

1. 모듈 번들러

- 웹 서비스 모든 파일을 하나의 파일로 합쳐버리겠다!
  - 자원을 요청하는 네트워크 요청을 감소!
  - 자원이 압축 병합등등
  - 레이지 로딩
- 자원을 조합해서 하나의 병합된 결과물을 만드는 도구

> 웹팩이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)입니다. 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미합니다. 그럼 모듈과 모듈 번들링에 대해서 조금 더 살펴보겠습니다.

2. webpack build

```
npm i webpack webpack-cli -D
```

3. mode

- mode development, none, production
- webpack --mode=none

4. 왜?

- 자바스크립트 변수 유효 범위
- 브라우저별 HTTP요청 숫자의 제약
- 사용하지 않는 코드의 관리
- Dynamic & Lazy Loading
- Code Splitting
- Tree shaking

5. source map

- 빌드를 했다고 하더라고 콘솔에서는 정상적인 파일을 볼 수 있게 해줄게

## entry - from

## output - to

## module - 중간에 개입

# Babel

- 최대한 많은 호환을 위환 변환기
