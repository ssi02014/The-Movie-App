# 💻 The Movie App
### node.js와 React로 만든 The Movie App

<br>

## 🎥 HomePage View
![mainPage](https://user-images.githubusercontent.com/64779472/107623786-37fe2580-6c9d-11eb-85f0-9ed87e42815c.PNG)


<br />
<hr />

## 🔖 The Movie App을 사용하기 전 행동 수칙
### Boiler-Plater: https://github.com/ssi02014/BoilerPlate
1. **" npm install or yarn install "** 을 backend 폴더에서 입력해주세요. (백엔드 종속성 다운받기)
2. **" npm install or yarn install "** 을 client 폴더에서 입력해주세요. (프론트엔드 종속성 다운받기)
3. backend 폴더에서 **" npm start or yarn start "** 를 통해 server를 실행시켜주세요.
4. cliend 폴더에서 **" npm start or yarn start "** 를 통해 client를 실행시켜주세요.
5. 회원가입을 해주세요. 
6. 회원가입 한 계정을 통해서 로그인 해주세요.
7. 로그인 후 App 기능을 확인합니다.
    - 또는, **ID: 1q2w3e4r@naver.com / Pwd: 1q2w3e4r** 로그인을 해서 App 기능들을 확인해보세요.

<br>

## 👨🏻‍💻 Movie API
### **TMDB** : https://www.themoviedb.org/?language=ko;

<br>

## 📈 프로젝트 하면서 학습한 내용
1. **antd**를 이용한 디자인


<br>

## 🔍 The Movie App 기능
1. **Boiler-plate: Login, Logout, Register, HOC 기능**
2. **Movie Chart 보기**
3. **Movie Detail Page**
    - 출연 배우 목록 및 사진 보기
4. **Movie Detail Page 에서 Favorite button 눌러서 Favorite 영화 목록에 추가하기**
5. **Favorite Page에 Favorite한 영화 리스트 출력하기**

<br />
<hr />
<br />

## 🏃 fetch를 이용한 API 연결하기
```javascript
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetchMovies(endpoint); //fetch 반복 사용으로 함수로 빼줌
    }, []);

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            setMovies([...movies, ...data.results]);
            setMainMovieImage(data.results[0]);
            setCurrentPage(data.page);
        })
    }
```

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

