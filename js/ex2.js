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
	}

	list.addEventListener('click', tachar, false);

	function tachar(event){
		if(event.target.className==="done")
		{
			event.target.className=""
		}
		else
		{
			event.target.className= "done";	
		}
		 	
	}
}