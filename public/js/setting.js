//기본 firebase 셋팅
const firebaseConfig = {
    apiKey: "AIzaSyAd3zuH726zBIr-RQvNLonrjLtWOTNFJbk",
    authDomain: "centert-3ae9f.firebaseapp.com",
    databaseURL: "https://centert-3ae9f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "centert-3ae9f",
    storageBucket: "centert-3ae9f.appspot.com",
    messagingSenderId: "715194698544",
    appId: "1:715194698544:web:00c072cddbccc165afd6f5"
};

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  //timeStamp 날짜변환
  //파이어베이스의 날짜 형식 timeStamp()

    /* let timeStamp = Date.now();
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
  }) */
  