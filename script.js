let output = document.getElementById("output");

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
	let inputtext = document.getElementById("text").value;
	let inputnum = document.getElementById("delay").value;
	dodelay();
})

async function dodelay(){
	await setTimeout(()=>{
		output.innerHTML = `${inputtext}`
	},inputnum)
}


