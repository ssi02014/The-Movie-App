# 💻 The Movie App
### node.js와 React로 만든 The Movie App

<br>

## 🔖 The Movie App을 사용하기 전 행동 수칙
### Boiler-Plater: https://github.com/ssi02014/BoilerPlate
1. dev.js file을 backend/config 폴더 안에 생성해주세요.
2. mongoDB 정보를 dev.js file안에다가 넣어주세요.
```javascript
    //dev.js 파일 내용 예시
    module.exports = {
        mongoURI: 'mongodb+srv://minjae:******@boiler-plate.03g6t.mongodb.net/<dbname>?retryWrites=true&w=majority'
    }
```
3. " npm install or yarn install "을 backend 폴더에서 입력해주세요. (백엔드 종속성 다운받기)
4. " npm install or yarn install "을 client 폴더에서 입력해주세요. (프론트엔드 종속성 다운받기)

<br>

## 👨🏻‍💻 Movie API
### **TMDB** : https://www.themoviedb.org/?language=ko;

<br>

## 📈 프로젝트 하면서 학습한 내용
1. **antd**를 이용한 디자인


<br>

## 🔍 The Movie App 기능
1. Boiler-plate: Login, Logout, Register, HOC 기능
2. Movie Chart 보기
3. Movie Detail Page
    - 출연 배우 목록 및 사진 보기
4. Movie Detail Page 에서 Favorite button 눌러서 Favorite 영화 목록에 추가하기
5. Favorite Page에 Favorite한 영화 리스트 출력하기

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


