btn = document.querySelector(".equal")
d = document.querySelector('.display')

btn.addEventListener('click',()=>{
	try{
		d.value = eval(d.value) ;
	}
	catch{
		d.value = "Invalid Input!"
	}
	
})