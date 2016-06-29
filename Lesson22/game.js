/**
 * Created by tomek on 27.06.16.
 */
var container = document.querySelector('.container')
var line = document.querySelector( '#line' );
var start = document.querySelector( '#start' );
var meta = document.querySelector( '#meta' );
var gameOver = document.querySelector('.gameOver');

var win = document.querySelector('.win')
start.addEventListener( 'mouseover', function(){

    line.addEventListener( 'mouseout', function(){
        this.style.backgroundColor = 'white';
        gameOver.style.display = 'block';
        container.style.display = 'none';
    });

    meta.addEventListener( 'mouseover', function(){
        win.style.display = 'block';
        container.style.display = 'none';
        gameOver.style.display = 'none';
    })

});



