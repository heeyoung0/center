//기본 firebase 셋팅
const firebaseConfig = {
    apiKey: "AIzaSyBTzI66t4EioNwM-MTXkLuX0524uTE3WAs",
    authDomain: "center-fc981.firebaseapp.com",
    projectId: "center-fc981",
    storageBucket: "center-fc981.appspot.com",
    messagingSenderId: "959767648444",
    appId: "1:959767648444:web:aa5734ae6a0882644c98b9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //timeStamp 날짜변환
  //파이어베이스의 날짜 형식 timeStamp()
  
  let timeStamp = Date.now();
  //console.log(timeStamp)
  
  let date = new Date(timeStamp);
  let uploadDate = moment(date).format("YYYY-MM-DD");
  
  console.log("timeStamp [date]:" + timeStamp)
  console.log("timeStamp [length]:" + String(timeStamp).length);
  console.log("uploadDate :" + uploadDate)
  
  // 유저정보 확인
  let userInfo = localStorage.getItem('user');
  // console.log(userInfo)
  // console.log(JSON.parse(userInfo).displayName);
  $('#userName').html(JSON.parse(userInfo).displayName)
  
  // onAuthStateCanged() - 로그인/로그아웃/새로고침
  firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
          // console.log(user)
          // console.log(user.uid)
          // 로컬스트리지는 문자형만 저장-user 정보는 객체형이므로 문자형으로 변환하여 로컬스토리지에 저장함.
          localStorage.setItem('user',JSON.stringify(user))
      }
  })
  