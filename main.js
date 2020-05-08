// 오디오 객체를 변수에 저장
var audio = new Audio();
// 재생 파일 연결
audio.src = "audio/home.mp3";
// 볼륨 설정
audio.volume = 0.3;

// html의 오디오 아이콘을 가져옴
var audioPlayer = document.getElementById("audio_player");
// 오디오 아이콘을 저장한 변수에 이벤트에 따른 함수를 연결
audioPlayer.addEventListener("click", playPause);

var lever = true; //오디오 컨트롤 제어 변수

//오디오 재생-정지 함수
function playPause() {
  if (lever == true) {
    //아이콘을 눌렀을 때 lever값이 true이면,
    audio.play(); //오디오 재생
    audioPlayer.style.color = "rgba(225, 225, 225, 0.76)";
    //아이콘을 진하게 설정
    lever = false; //레버 변수를 false로 설정
  } else {
    //아이콘을 눌렀을 때 lever값이 false이면,
    audio.pause(); //음악 정지
    audioPlayer.style.color = "rgba(36, 33, 33, 0.2)";
    //아이콘을 연하게 설정
    lever = true; // 변수를 다시 true로 설정
  }
}

var seeYou = document.getElementById("seeU");
seeYou.addEventListener("click", announce);

function announce() {
  alert("It will be added, thank you🤩");
}
