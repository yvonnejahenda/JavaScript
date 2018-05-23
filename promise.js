console.log('start program')



const carPromise=new Promise(function(resolve,reject){

setTimeout(function(){
	reject("No Range Rover for you");

},10000)

})
var siteloading = true;
carPromise.then(function(car){
	console.log(car)
    
}).catch(function(error){
	console.log(error)

}).finally(function(){

	console.log('Request completed');
})

console.log('Life moves on');
