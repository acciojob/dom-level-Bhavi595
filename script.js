//your JS code here. If required.
let levelelement = document.getElementById("level");
let level = 1;
while(true){
	if(levelelement.tagName === "HTML")
	{
		break;
	}

	levelelement = levelelement.parentNode;
	level++;
	
}


	alert(`The level of the element is : ${level}`);