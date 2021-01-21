# 💻 The Movie App
### Boiler Plate를 가져와서 Movie App 만들기

<br>

## 🔖 Boiler-plate를 사용하기 전 행동 수칙
### Boiler-Plater: https://github.com/ssi02014/BoilerPlate
**Boiler-Plate란? : 자주 사용하는 기능들을 미리만들어 놓은 것(로그인, 로그아웃, 회원가입)**
1. dev.js file을 config 폴더 안에 생성해주세요.
2. mongoDB 정보를 dev.js file안에다가 넣어주세요.
3. " npm install or yarn install "을 backend directory에서 입력해주세요. (백엔드 종속성 다운받기)
4. " npm install or yarn install "을 client directory에서 입력해주세요. (프론트엔드 종속성 다운받기)

<br>

## 👨🏻‍💻 Movie Api
### **TMDB** : https://www.themoviedb.org/?language=ko;

<br>

## 📈 프로젝트 하면서 학습한 내용
1. **fetch**를 이용한 API 요청
2. **antd**를 이용한 디자인


<br>

## 🔍 The Movie App 기능
1. Boiler-plate: Login, Logout, Register 기능
2. Movie Chart 보기

<br>

## 🏃 API Config.js
### 1. API 관련 변수 생성
```javascript
        export const API_URL = 'https://api.themoviedb.org/3/';
        export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
        export const API_KEY = '본인 API';
```

<br>

## 🏃 Antd 라이브러리
### 1. Antd 라이브러리 사용 예시
```javascript
        import { Descriptions } from 'antd'; //antd 라이브러리 Import

        <Descriptions title="Movie Info" bordered>
            <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        </Descriptions>
```

<br>

