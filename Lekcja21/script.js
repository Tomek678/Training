var text = document.querySelector('textarea')
var content = document.querySelector('.content')
var button = document.querySelector('button')
var div = document.createElement( 'DIV')


button.addEventListener( 'click', function(){
	content.style.display = 'none'
	div.setAttribute('id', 'teleport')
	div.innerText = text.value
	document.body.appendChild( div )
	setTimeout( function () {

		content.style.display = 'flex'
		div.removeAttribute('id')
		document.body.removeChild( div )


	}, 5000 )

})