var text = document.querySelector('textarea')
var button = document.querySelector('button')
var content = document.querySelector('.content')
var teleport = document.querySelector('.teleport')
button.addEventListener( 'click', function(){
	console.log( text.value )
	content.style.display = 'none';
	teleport.style.display = 'block';
	teleport.innerHTML = text.value
})