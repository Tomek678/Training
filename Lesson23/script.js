/**
 * Created by tomek on 29.06.16.
 */
var start = document.querySelector('#start')
var reset = document.querySelector('#reset')
var sec = document.querySelector('#sec')
var min = document.querySelector('#min')
var hour = document.querySelector('#hour')

var interval = null
start.addEventListener('click', function () {
    var seconds = 0
    var minutes = 0
    var hours = 0
    interval = setInterval( function () {
        sec.innerText = seconds

        if( seconds === 60 ) {
            seconds = 0
            sec.innerText = seconds
            min.innerText = minutes
            if (minutes === 60 ){
                minutes = 0
                min.innerText = minutes
                hours++
                hour.innerText = hours
            }
            minutes++
        }
        seconds++


        console.log( hours, ':', minutes, ':', seconds )

    }, 1000)

})

reset.addEventListener( 'click', function () {

    clearInterval( interval )
    sec.innerText = 0
    min.innerText = 0
    hour.innerText = 0


})