# 😷 PM - Put on a Mask!

> - 미세먼지를 의미하는 **PM(particulate matter)** 과 **Put on a Mask** 를 줄인 말을 의미함.
> - 공공 API인 [서울시 미세먼지 API](https://data.seoul.go.kr/dataList/OA-2219/S/1/datasetView.do)를 사용함.
> - 서울시 지도 이미지 기준 각 구의 좌표를 구해 컴포넌트로 생성함. (styled-components의 props 활용)
> - 추후 백엔드도 구현 예정임. (Express) + REST API

<br />

***

# [🌐 배포](https://thisisyjin.github.io/PM/)

## [ver.1](https://thisisyjin.github.io/PM/)
- redux 없이 react-hooks 로 제작한 버전 
- ❗️ mixed content 문제 -> 아직 해결중에 있음. (백엔드 구현 후 다시 수정)

## [ver.2](https://github.com/thisisyjin/PM/tree/redux)
- redux 사용. (데이터 양이 많지 않아서 hook으로도 충분히 구현 가능하긴 함.)
- 배포버전은 따로 X (ver.1과 동일하게 동작함)

***

<br />

## ⚙️ Setting
```
$ git clone https://github.com/thisisyjin/PM.git

$ cd PM
$ npm install

$ npm start || yarn start

```

<br />

## [📝 기획 및 디자인](https://www.figma.com/file/khZCEevpYG7v8kk8BhJL3P/%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80?node-id=0%3A1)
- 직접 Figma로 디자인 및 기획함.

<br />

## 🚀 스택
- `React`
- `Redux`
- `JavaScript`

<br />

## 📂 디렉터리 구조

- ver.2 (redux) 기준 작성
```
├── public
└── src
    ├── components
    ├── pages
    ├── components
    ├── modules
    ├── assets
    └── lib
```

<br />


## 🛠 dependencies
- `create-react-app`
```
"dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.27.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-actions": "^2.6.5",
    "redux-devtools-extension": "^2.13.9",
    "styled-components": "^5.3.5",
    "web-vitals": "^2.1.0"
  }
```

<br />

## 🦋 Preview

- 지역구 선택시 지도 변경사항
![ex1](https://user-images.githubusercontent.com/89119982/170923610-191ae0c7-f9ba-4f02-8a00-bb36cb9f55cc.gif)


- hover시 상세 데이터 (PM10, PM2.5 정보)
![ex2](https://user-images.githubusercontent.com/89119982/170923681-4c98a698-ce8a-403e-8a5e-2b8b1e94dace.gif)


- modal (랜덤 텍스트 렌더링)
![exm](https://user-images.githubusercontent.com/89119982/170923252-b21587da-e45e-4845-976e-784f1eb3e288.gif)

