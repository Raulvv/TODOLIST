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

}