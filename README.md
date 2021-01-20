# 💻 The Movie App
### Boiler Plate를 가져와서 Movie App 만들기

<br>

## 🔖 Boiler-plate를 사용하기 전 행동 수칙
### Boiler-Plater: https://github.com/ssi02014/BoilerPlate
1. dev.js file을 config 폴더 안에 생성해주세요.
2. mongoDB 정보를 dev.js file안에다가 넣어주세요.
3. " npm install or yarn install "을 root directory에서 입력해주세요. (백엔드 종속성 다운받기)
4. " npm install or yarn install "을 client directory에서 입력해주세요. (프론트엔드 종속성 다운받기)

<br>

## 👨🏻‍💻 Movie Api
### **TMDB** : https://www.themoviedb.org/?language=ko;

<br>

## 📈 Client 참고 사항 및 패키지


<br>


<br>

## 🔍 Server: package.json scripts 수정
```javascript
    "scripts": {
        "start": "node index.js",
        "start:dev" : "nodemon index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
```

<br>

## 🔍 client: package.json에 proxy 추가
```javascript
    {
        "proxy": "http://localhost:5000/"
    }
```

<br>

## 🏃 Redux
### 1. 액션 타입 정의
```javascript
    //액션 타입
    export const LOGIN_USER = "login_user";
    export const REGISTER_USER = "register_user";
    export const AUTH_USER = "auth_user";
```

<br>

### 2. 액션 생성 함수 정의

```javascript
    export function loginUser(dataToSubmit) {

        const request = axios.post('/api/users/login', dataToSubmit)
            .then(response => response.data);

        return {
            type: LOGIN_USER,
            payload: request
        }
    }
```

<br>

### 3. 리듀서 함수 정의

```javascript
    //리듀서 함수 정의
    export default function(state = {}, action) {
        switch (action.type) {
            case LOGIN_USER:
                return {...state, loginSuccess: action.payload}
        
            case REGISTER_USER:
                return {...state, register: action.payload}
        
            case AUTH_USER:
                return {...state, userData: action.payload}

            default:
                return state;
        }
    } 
```

<br>

### 4. rootReducer 정의

```javascript
    const rootReducer = combineReducers({
        user,
    })
```

<br>

### 5. store 정의 및 provider 

```javascript
        const store = createStore(rootReducer, composeWithDevTools(
            applyMiddleware(promiseMiddleware, ReduxThunk)));

        ReactDOM.render(
            <Provider store={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider>,
        document.getElementById('root')
        );
```

<br>