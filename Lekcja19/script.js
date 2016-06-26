console.log( 'test ')

var all = document.querySelectorAll('input')
var questions = document.querySelector('.questions')
var result = document.querySelector('.result')

for (var i = 0; i < all.length; i++) {
	all[i].addEventListener( 'click', function(){
		this.setAttribute('checked', true)
		console.log( this )
		// console.log( document.querySelector('input[type=radio]:checked'))
	})
}

var button = document.querySelector('button')

button.addEventListener( 'click', function(){
	var checked = document.querySelectorAll('input[type=radio]:checked')

	var score = 0
	for (var i = 0; i < checked.length; i++) {
		score += parseInt( checked[i].getAttribute('value') )
	}
	questions.style.display = 'none';
	result.style.display = 'block';
	result.innerHTML = 'Your score is equal to ' + score
	button.style.display = 'none';
})


function pattern(n) {
 var number = "", output = "";
 while (n > 0) {
   number = number + n;
   output = number + (output ? "\n" : "") + output;
   n--;
 }
 return output;
}

pattern(7)
