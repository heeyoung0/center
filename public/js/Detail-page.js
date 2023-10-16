
const Ep = document.querySelector('.Ep-text');
const btn = document.querySelector('.Ep-area');

btn.onclick = () => {
    Ep.classList.toggle('on')
}


/*  */
//addList에 정보를 보여주기 (제목,가격,쿠퐁정보)

let prodTitle = document.querySelector('#Detail-Text > .container > .title');
let descPrice = document.querySelector('#Detail-Text > .container > .dis_price');

let selectColors = document.querySelector("#Detail-Search");//색상선택 select

//addList 항목 (제목/가격/쿠폰/옵션)
let addList = document.querySelector("#addList");
let addTitle = document.querySelector(".titleArea > .prod_title");
let addPrice = document.querySelector(".price_area > .price");

//수량계산
let btnMinus = document.querySelector('.btnMinus');
let btnPlus = document.querySelector('.btnPlus');
let inputNum = document.querySelector("#inputNum");

function addView() {
    //상품컬러선택
    selectColors.addEventListener('change', function(){
        let optColor = selectColors.options[selectColors.selectedIndex].innerText;//selectbox에서 인덱스값 가져오기
        //console.log(optColor)
        let optText = document.querySelector(".optColor > span");
        optText.innerText = optColor
        addList.classList.add('active')
    })

    //상품옵션 닫기
    let addListClose = document.querySelector('.btnClose');
    //클릭하면 addList 닫기
    addListClose.addEventListener('click',function(){
        addList.classList.remove('active')
    })

    //상품정보 출력
    addTitle.textContent = prodTitle.textContent;// 타이틀텍스트
    addPrice.innerText = descPrice.innerText;// 가격 텍스트

    //가격정보
    let count = inputNum.innerText; //span요소가 가지고 있는 초기수량을 변수로 저장
    //console.log(count)



    /* input 요소의 마우스 이벤트 -> change / input */

    inputNum.addEventListener('input', function() {
        let userCount = inputNum.value;
        //console.log(userCount)

        btnMinus.onclick = function(){
            if (userCount == 1){
                return //inputNum의 수량이 1이면 더이상 실행하지 않고 종료
            }
            userCount = userCount - 1;
            inputNum.value = userCount; //count 변수에 저장된 값을 inputNum에 출력
    
        }
        btnPlus.onclick = function(){
            userCount = Number(userCount) + 1;
            inputNum.value = userCount; //count 변수에 저장된 값을 inputNum에 출력
            
        }
    })
}
addView();


//장바구니 담기 - 모달창 열기
function addCart() {
    document.querySelector(".modal_box").classList.add('on')
}

//모달창 닫기
function modalClose() {
    document.querySelector(".modal_box").classList.remove('on')
}

