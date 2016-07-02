var gameStart = document.querySelector('button')
var startDiv = document.querySelector('.startDiv')
var gameDiv = document.querySelector('.gameDiv')
gameStart.addEventListener('click', function(){
    startDiv.style.display = 'none';
    gameDiv.style.display = 'flex';
})