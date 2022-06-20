리액트 펫 커뮤니티 사이트입니다.

사용법

1. server/config/dev.js 파일에 몽고key와 navercloud(오브젝트 스토리지) 키를 각각 넣어준다.

   mongoURI -> 몽고DB
   
   access_key -> navercloud
   
   secret_key -> navercloud

2. client/src/firebase.js 파일에 파이어베이스 키를 넣어준다.

3. 터미널을 'project-pet/server'로 이동한다.

4. 'npm start' 를 입력하면 서비스 이용 가능

_참고_

갤러리 페이지 이동하려면 -> http://localhost:5000/gallery

갤러리 작성 페이지 이동하려면 -> http://localhost:5000/upload

스토어 작성 페이지 이동하려면 -> http://localhost:5000/storeUpload
