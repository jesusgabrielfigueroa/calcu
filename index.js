const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

buttons.forEach(item =>{
	item.onclick=()=>{
		if(item.id == "backspace"){
			screen.lastElementChild.className = "an";
			setTimeout(() => screen.lastElementChild.remove(), 170);

		}
		else{
			var text = document.createElement("h3");
			text.innerText = item.id;
			screen.appendChild(text);
		}
		
	}
})