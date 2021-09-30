<h1 align="center", size=100>Momentum-App</h1>  
</br>

### Overview
<img src="https://img.shields.io/badge/Made%20with-Javascript-blue?style=flat">
바닐라 JS 크롬 앱 클론코딩입니다. Login, Clock, Quotes, To Do List, Weather 기능이 있습니다.
</br></br>  

### Demo
Here is a working live demo : <a>https://aldrn29.github.io/Momentum-App/</a>
</br></br>  

### Folder Structure
```
Momentum-App
│
├── index.html
├── js
│   ├── background.js
│   ├── clock.js
│   ├── greetings.js
│   ├── quotes.js
│   ├── todo.js
│   └── weather.js
│ 
├── imag
│   ├── 0.jpg
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   │ 
├── css
│   └── style.css
```  
</br>

### Description
**background.js, quotes.js**
- 이미지 배열에서 정보를 랜덤하게 가져와서 Element 생성하여 추가 
- Math.random, Math.floor 함수 사용

**clock.js**
- Date 객체를 사용하여 관련 정보 표현
- setInterval, setTimeout 함수 사용: 일정주기/시간 이후로 실행되는 타이머 설정
- padStart 함수 사용: 자릿수 채우기

**greetings.js**
- preventDefault 함수 사용: 기본으로 정의된 이벤트의 작동 멈춤
- localstorage 사용: 유저 정보 저장 및 삭제

**todo.js**
- localstorage에 객체(text, id)를 string으로 저장하고 int로 불러옴
- localstorage 사용: To Do 정보 저장 및 삭제
- JSON.stringify, JSON.parse, forEach, filter 함수 사용

**weather.js**
- openweathermap의 API를 사용하여 실시간 위치, 날씨, 온도, 습도 정보를 표현
</br></br>  

### Landing Pages
<img src="https://github.com/aldrn29/Momentum-App/blob/main/screenshot/screenshot.PNG?raw=true" width="60%">  
<img src="https://github.com/aldrn29/Momentum-App/blob/main/screenshot/screenshot2.PNG?raw=true" width="60%">