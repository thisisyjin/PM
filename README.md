# ๐ท PM - Put on a Mask!

> - ๋ฏธ์ธ๋จผ์ง๋ฅผ ์๋ฏธํ๋ **PM(particulate matter)** ๊ณผ **Put on a Mask** ๋ฅผ ์ค์ธ ๋ง์ ์๋ฏธํจ.
> - ๊ณต๊ณต API์ธ [์์ธ์ ๋ฏธ์ธ๋จผ์ง API](https://data.seoul.go.kr/dataList/OA-2219/S/1/datasetView.do)๋ฅผ ์ฌ์ฉํจ.
> - ์์ธ์ ์ง๋ ์ด๋ฏธ์ง ๊ธฐ์ค ๊ฐ ๊ตฌ์ ์ขํ๋ฅผ ๊ตฌํด ์ปดํฌ๋ํธ๋ก ์์ฑํจ. (styled-components์ props ํ์ฉ)
> - ์ถํ ๋ฐฑ์๋๋ ๊ตฌํ ์์ ์. (Express) + REST API

<br />

***

# [๐ ๋ฐฐํฌ](https://thisisyjin.github.io/PM/)
> โ๏ธ Mixed Content ๋ฌธ์ ๋ก ์ฌ์ดํธ ์ค์  - ์์ ํ์ง ์์ ์ฝํ์ธ  (ํ์ฉ) ์ค์  ํ์.

<br>
    
# [๐ ๋ฐฐํฌ v2](https://thisisyjin.github.io/PMv2/) - ๊ถ์ฅ 
> ๐  Mock Server์ API๋ฅผ ์์ฑํ์ฌ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ ๋ฐฉ๋ฒ์ผ๋ก ํด๊ฒฐํจ. <br>
> [ํด๋น Repo](https://github.com/thisisyjin/PMv2)์ ํด๊ฒฐ ๋ฐฉ๋ฒ ๊ธฐ์ ํจ.


***

## Branch ์ค๋ช

### [ver1 = main](https://thisisyjin.github.io/PM/)
- redux ์์ด react-hooks ๋ก ์ ์ํ ๋ฒ์ 

### [ver1-(2) = redux](https://github.com/thisisyjin/PM/tree/redux)
- redux ์ฌ์ฉ. (๋ฐ์ดํฐ ์์ด ๋ง์ง ์์์ hook์ผ๋ก๋ ์ถฉ๋ถํ ๊ตฌํ ๊ฐ๋ฅํ๊ธด ํจ.)
- redux-actions / react-redux ์ฌ์ฉ.
- ๋ฐฐํฌ๋ฒ์ ์ ๋ฐ๋ก X (ver.1๊ณผ ๋์ผํ๊ฒ ๋์ํจ)

***

<br />

## โ๏ธ Setting
```
$ git clone https://github.com/thisisyjin/PM.git

$ cd PM
$ npm install

$ npm start || yarn start

```

<br />

## [๐ ๊ธฐํ ๋ฐ ๋์์ธ](https://www.figma.com/file/khZCEevpYG7v8kk8BhJL3P/%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80?node-id=0%3A1)
- ์ง์  Figma๋ก ๋์์ธ ๋ฐ ๊ธฐํํจ.

<br />

## ๐ ์คํ
- `React`
- `Redux`
- `JavaScript`

<br />

## ๐ ๋๋ ํฐ๋ฆฌ ๊ตฌ์กฐ

- ver.2 (redux) ๊ธฐ์ค ์์ฑ
```
โโโ public
โโโ src
    โโโ components
    โโโ pages
    โโโ components
    โโโ modules
    โโโ assets
    โโโ lib
```

<br />


## ๐  dependencies
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

## ๐ฆ Preview

- ์ง์ญ๊ตฌ ์ ํ์ ์ง๋ ๋ณ๊ฒฝ์ฌํญ
![ex1](https://user-images.githubusercontent.com/89119982/170923610-191ae0c7-f9ba-4f02-8a00-bb36cb9f55cc.gif)


- hover์ ์์ธ ๋ฐ์ดํฐ (PM10, PM2.5 ์ ๋ณด)
![ex2](https://user-images.githubusercontent.com/89119982/170923681-4c98a698-ce8a-403e-8a5e-2b8b1e94dace.gif)


- modal (๋๋ค ํ์คํธ ๋ ๋๋ง)
![exm](https://user-images.githubusercontent.com/89119982/170923252-b21587da-e45e-4845-976e-784f1eb3e288.gif)

