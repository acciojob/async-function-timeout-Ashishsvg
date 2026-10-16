let inputtext = document.getElementById("text").value;
let inputnum = document.getElementById("delay").value;
let output = document.getElementById("output");

let btn = document.getElementById("btn")
btn.addEventListener("click",()={
	dodelay();
})

async function dodelay(){
	await setTimeout(()=>{
		output.innerHTML = `${inputtext}`
	},inputnum)
}


