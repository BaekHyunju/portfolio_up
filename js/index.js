// ***** 소개 타이핑 *****
const $text = document.querySelector(".typing-text");

// 글자 모음
const letters = [
    "감각적인",
    "노력파",
    "열정적인"
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(800);

    // 지우는 효과
    remove();
}

// 글자 지우는 효과
const remove = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
        await wait(speed);

        letter.pop();
        $text.innerHTML = letter.join("");
    }

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i + 1] ? 0 : i + 1;
    typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);


// 포트폴리오 탭메뉴
// $(function(){
  
//     $('ul.tabs li').click(function(){
//       var tab_id = $(this).attr('data-tab');
  
//       $('ul.tabs li').removeClass('current');
//       $('.tab-content').removeClass('current');
  
//       $(this).addClass('current');
//       $("#"+tab_id).addClass('current');
//     })
  
//   })



  $(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
    });