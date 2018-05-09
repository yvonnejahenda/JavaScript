console.log('app is running')

let lights=document.querySelectorAll('.circle')

function switchOff(light) {
	light.classList.add('off')
}
function switchOn(light){
	light.classList.remove('off')
}
lights.forEach(function(light){
     switchOff(light);
})

switchOn(lights[0]);

let current=0;

setInterval(function(){
	switchOff(lights[current]);

	current++;
	if (current>=lights.length){
		current=0;
	}
	switchOn(lights[current]);

},2000)