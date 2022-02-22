//Lev1_2//
let black = document.getElementsByClassName(`example`)
console.log(black);

function myFunction() {
    black[0].style.backgroundColor = `black`;
    black[1].style.backgroundColor = `black`;
    black[2].style.backgroundColor = `black`;
    black[3].style.backgroundColor = `black`;
    black[4].style.backgroundColor = `black`;
}

//Lev2_3//
let color = document.getElementsByClassName('color');

changeMe = () => {
        color[0].style.backgroundColor = '#f6c89f';
        color[1].style.backgroundColor = '#ffe7d1';
        color[2].style.backgroundColor = '#4b8e8d';
        color[3].style.backgroundColor = '#396362';
    }
    //Lev2_4//
var button = document.getElementById('button');
let chColor = document.getElementById('farbeAuswahlen');

button.addEventListener('click', function() {
    event.preventDefault();
    document.body.style.backgroundColor = chColor.value.toLowerCase().replace(' ', '');
});