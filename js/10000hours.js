const startButton =documnet.querySelector(".start_btn");
const result =documnet.querySelector(".result");
const modal =documnet.querySelector("#modal");
const openButton =documnet.querySelector(".modal_btn");
const closeButton =documnet.querySelector(".close_btn");
const shareButton =documnet.querySelector(".result");
const loading =documnet.querySelector(".result_loading");

function calculator(){
    const fieldvalue = documnet.querySelector("#field value");
    let timeValue = Number(docment.querySelector("#time_value"));
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeReslut = documnet.querySelector(".time_result");

    if(fieldValue.value == ""){
        alert('입력되지않았습니다.');
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
    } else if(timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function(){
        loading.style.display = 'none';
        result.style.display
        = 'flex';
        fieldResult.innerText = fieldvalue.value;
        timeReslut.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);
}

function openmodal(){
    modal.style.display = 'flex';
}

function closemodal(){
    modal.style.display = 'none'
}

window.oneclick = function (event) {
    if(event.target == modal)
        closeMoal();
}

function copyurl(){
    let url = window.location.href;
    let tmp = document.createElement('input');

    documnet.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.    ")
}




shareButton.addEventListener('click', copyurl)
openButton.addEventListener('click', openmodal)
closeButton.addEventListener('click', closemodal)
startButton.addEventListener('click', calculator)