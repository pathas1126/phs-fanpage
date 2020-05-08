// e-mail입력란을 변수에 저장
var surveyEmail = document.getElementById("surveyEmail");
// checkbox를 변수에 저장
var checkBox = document.getElementsByClassName("table_album");
// radio 변수에 저장
var radio = document.getElementsByClassName("table_gender");

//이메일을 작성하고 넘어가도록 하는 함수
function checkEmail() {
  if (surveyEmail.value == "") {
    //이메일칸이 비어있다면
    alert("Please enter your email address🤔"); //경고창 표시
    surveyEmail.autofocus = "autofocus"; //이메일칸에 커서를 가져다줌
  }
}

//라디오 박스와 체크박스가 하나라도 체크되었는지 확인하는 함수
function checkSurvey() {
  //alert(radio); 연결, 변수 확인
  if (radio[0].checked || radio[1].checked || radio[2].checked) {
    // 라디오박스가 하나라도 체크된 경우, ||연산자에서는 하나만 true면 true값이 나옴
    if (
      checkBox[0].checked ||
      checkBox[1].checked ||
      checkBox[2].checked ||
      checkBox[3].checked ||
      checkBox[4].checked ||
      checkBox[5].checked ||
      checkBox[6].checked
    ) {
      //  체크박스가 하나라도 체크된 경우
      alert("Thank you for participating in the survey!😍");
      // 설문 참여에 감사하는 알림창 표출
    } else {
      //체크박스가 하나도 체크되지 않은 경우
      alert("What is your favorite Album?💽"); //앨범을 선택하라는 알림창 표시
    }
  } else {
    //성별이 선택되지 않았을 경우
    alert("Choose your gender, Please👽"); //성별을 체크해달라는 알림
  }
}

//체크박스 오디오

//오디오 객체 변수에 저장
var audio = new Audio();
//오디오 볼륨 설정
audio.volume = 0.2;
//오디오 src에 줄 값(위치)들을 배열에 저장
var audioS = [
  "./audio/stupid.mp3",
  "./audio/longing.mp3",
  "./audio/standing.mp3",
  "./audio/memory.mp3",
  "./audio/gift.mp3",
  "./audio/bye.mp3",
  "./audio/wild_flower.mp3"
];
//체크박스가 포함된 td를 가져옴
var audioList = document.getElementById("audioList");
//체크박스가 담긴 td에 이벤트리스너 설정, 이벤트 전파를 활용
//클릭시, playPause()함수가 실행
audioList.addEventListener("click", playPause);

// 현재 이벤트에 의해 선택된 태그의 id값
var currentId;
//현재 선택된 태그 id 값의 숫자형 자료를 저장할 변수
var currentSong;
//currentSong을 순서대로 저장할 배열
var currentList = [];
//노래 재생/정지 함수 선언
function playPause(event) {
  //이벤트가 지정하는 태그의 id값을 가져옴
  currentId = event.target.getAttribute("id");
  //숫자형으로 변환해서 저장
  currentSong = Number(currentId);
  //currentSong을 배열 가장 뒤에 저장 => 순차적으로 저장됨
  currentList.push(currentSong);
  //currentList의 가장 마지막 값은 currentSong이기 때문에
  //마지막 값 이전 값과 같은지 비교해야하므로 currentList.length-2와
  //값이 같은지 비교후, 같다면 음악이 정지(버튼 해제시 음악 정지)
  if (currentSong == currentList[currentList.length - 2]) {
    //if문 이전에 currentSong이 currentList에 추가되기 때문에
    //pop()을 두 번 사용해야 currentList에서 마지막에 선택한
    //태그의 id숫자형 자료를 모두 제거할 수 있음
    currentList.pop();
    currentList.pop();
    console.log(currentList);
    console.log(currentSong);
    audio.pause();
    console.log("pause");
  } else {
    //현재 태그 != 이전 태그라면 audio.src 변경

    //음악 파일 경로 설정
    //와미리 배열에 담아둔 경로들을 태그 id순서 맞춰서 src 설정
    audio.src = audioS[currentSong];
    //음악 재생
    audio.play();
    console.log(currentList);
    console.log(currentSong);
    console.log("play");
  }
}
