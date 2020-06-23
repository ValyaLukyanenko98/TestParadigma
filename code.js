//
// if (document.documentElement.clientWidth < 1000){
//     document.getElementById('headerName').style.display='none';
//     document.getElementById('signIn').style.display='none';
//     document.getElementById('logo').style.width='100%';
// }

function openCloseAction(window, windowDisplay) {
    let element = document.getElementById(window);
    element.style.display = windowDisplay;
}
// просмотр карты
document.getElementById("lookMap")
    .addEventListener('mouseover', function (){
    openCloseAction('cardOpen','block');
});
document.getElementById("lookMap")
    .addEventListener('mouseout',function (){
    openCloseAction('cardOpen', 'none');
});

// просмотр подсказки
document.getElementById("buttonInfo")
    .addEventListener('mouseover', function (){
    openCloseAction ('popUpInfo','block');
});
document.getElementById("buttonInfo")
    .addEventListener('mouseout',function (){
    openCloseAction('popUpInfo', 'none');
});


function openCloseActionWrapper(window, windowDisplay, wrapper, wrapperDisplay) {
    let elementWindow = document.getElementById(window);
    elementWindow.style.display = windowDisplay;
    let modalWrapper = document.getElementById(wrapper);
    modalWrapper.style.display = wrapperDisplay;
}

// плучение карты
document.getElementById("receiveCardButton")
    .addEventListener('click', function (){
    openCloseActionWrapper(
        'contentWindow',
        'block',
        'wrapper',
        'block');
});
document.getElementById("signIn")
    .addEventListener('click', function (){
    openCloseActionWrapper(
        'contentWindow',
        'block',
        'wrapper',
        'block');
});
document.getElementById("closeTrainingWindow")
    .addEventListener('click', function (){
    openCloseActionWrapper(
        'contentWindow',
        'none',
        'wrapper',
        'none'
    );
});

// одобрение заявки
function retract (element) {
    let input = document.getElementById(element);
    input.value = "";
}

document.getElementById('phone')
    .addEventListener('click', function (){
        retract('phone')
    });
document.getElementById('name')
    .addEventListener('click', function (){
        retract('name')
    });


let name = document.getElementById('name');
function check() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    
    if(name.value == ''||phone.value==''||name.value == 'Ваше имя'||phone.value=='Ваш номер телефона'){
        name.style.borderColor = 'red';
        phone.style.borderColor = 'red';
    } else {
        openCloseActionWrapper(
            'orderHandling',
            'block',
            'contentWindow',
            'none');
    }
}
document.getElementById("getProgram").onclick = check;

document.getElementById("closeExecutionWindow")
    .addEventListener('click', function (){
    openCloseActionWrapper(
        'orderHandling',
        'none',
        'wrapper',
        'none'
    );
});



