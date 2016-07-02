/**
 * Created by tomek on 29.06.16.
 */
var start = document.querySelector('#start')
var reset = document.querySelector('#reset')
var stop = document.querySelector('#stop')
var sec = document.querySelector('#sec')
var min = document.querySelector('#min')
var hour = document.querySelector('#hour')
var startFlag = true
var interval = null


var seconds = 0
var minutes = 0
var hours = 0
start.addEventListener('click', function () {

    if( startFlag ) {
        startFlag = false

        interval = setInterval(function () {
            seconds++

            if (seconds === 60) {
                seconds = 0
                minutes++
                sec.innerText = seconds
                if (minutes === 60) {
                    minutes = 0
                    min.innerText = minutes
                    hours++
                    hour.innerText = hours
                }
                min.innerText = minutes < 10 ? '0' + minutes : minutes

            }
            sec.innerText = seconds < 10 ? '0' + seconds : seconds


            console.log(hours, ':', minutes, ':', seconds)

        }, 1000)
    }
})

reset.addEventListener( 'click', function () {
    startFlag = true;
    seconds = 0
    minutes = 0
    hours = 0
    clearInterval( interval )
    sec.innerText = '00'
    min.innerText = '00'
    hour.innerText = '00'
})

stop.addEventListener( 'click', function () {
    startFlag = true;
    clearInterval( interval )
})