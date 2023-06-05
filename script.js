var heart = 3;
var randomNumber = 0;

function Guess(){
    var number = document.getElementById('number').value;

    if(heart ==3 ){
        random = Math.floor(Math.random()*10)+1;
    }

    if( number == random){
        document.getElementById('result').innerText = 'Tebrikler doğru bildiniz';
        ShowButton('btn-again');
        HideButton('btn-guess');


        //tekrar dene butonu yerine tekrar oyna
        document.getElementById('btn-again').innerText = 'Tekrar Oyna';

    }else{
        var element = document.querySelectorAll('#hearts > i')[heart-1];
        element.classList.remove('heart-red');
        element.classList.add('heart-grey');

        heart--;

        if(heart > 0) {
            document.getElementById('result').innerText = 'Yanlış Bildiniz.';
        }else{
            ShowButton('btn-again');
            HideButton('btn-guess');

            document.getElementById('result').innerText('Yanlış bildiniz.Doğru cevap :' + random);
            document.getElementById('result').innerText='';
        }
    }
}

function Again(){
    heart=3;

    for( var i=0; i<3; i++){
        var element = document.querySelectorAll('#hearts > i')[i];
        element.classList.remove('heart-grey');
        element.classList.add('heart-red');
    }

    HideButton('btn-again');
    ShowButton('btn-guess');

    document.getElementById('result').innerText='';
}

function ShowButton(id){
    document.getElementById(id).classList.add('btn-show');
    document.getElementById(id).classList.remove('btn-hide');

}

function HideButton(id){
    document.getElementById(id).classList.add('btn-hide');
    document.getElementById(id).classList.remove('btn-show');

}