window.onload= function()
{
	var entrada="Hola";
	var lista=document.getElementById("list");
	var pulsa=document.getElementById("addLi");
	var borraTodo=document.getElementById("removeAll");
	var borraHecho=document.getElementById("removeDone");
	
	pulsa.onclick= function ()
	{
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

	borraTodo.onclick= function(){
		lista.innerHTML="";
	}

	borraHecho.onclick= function(){
		var hechos=document.getElementsByClassName("done");

		while(hechos.length>0)
		{
			hechos[0].remove();
		}
	}
}