window.onload= function()
{
	var entrada="Hola";
	var pulsa=document.getElementById("addLi");
	
	pulsa.onclick= function ()
	{
		var lista=document.getElementById("list");
		var li=document.createElement("li");
		texto=document.createTextNode(entrada);

		li.appendChild(texto);
		lista.appendChild(li);

		li.addEventListener('click', tachar, false);
	}

	function tachar(event){
		var myClassList = event.target.classList;

		myClassList.contains("done")?myClassList.remove("done"):myClassList.add("done");
		 	
	}
}