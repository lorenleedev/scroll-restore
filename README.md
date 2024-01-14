# 리액트 프로젝트에서 뒤로가기 시 스크롤을 유지하는 기능 구현

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 참고사항
예제는 Router v6를 이용하는데, v6부터는 뒤로가기 시 스크롤 위치 유지기능을 기본으로 제공하기 때문에 강제로 manual로 바꾼 후 기능구현을 하였습니다.

auto: 사용자가 뒤로가기 시 이전 페이지 스크롤 유지 (기본값)  
manual: 사용자가 뒤로가기 시 이전 페이지 위치를 보기위해 스스로 스크롤을 이동해야함  
window.history.scrollRestoration = "manual"; 


### 배포된 페이지
[https://lorenleedev.github.io/scroll-restore/](https://lorenleedev.github.io/scroll-restore/)

