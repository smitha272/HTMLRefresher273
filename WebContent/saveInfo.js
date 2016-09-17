/**
 * 
 */

function doFirst()
{
	
	var button=document.getElementById('button');
	button.addEventListener('click',saveDetails,false);
	display();
}
function saveDetails()
{
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var comment= document.getElementById('comment').value;
	
	localStorage.setItem(name,comment);
	
	display();
	
	document.getElementById('name').value="";
	document.getElementById('email').value="";
	document.getElementById('comment').value="";
}
function display()
{
	var right = document.getElementById('right');
	
	right.innerHTML = "Comments Section!"+"<br />";
	
	for(var x=0;x<localStorage.length;x++)
	{
		var name = localStorage.key(x);
		var comment = localStorage.getItem(name);
		right.innerHTML += name+"'s comment is: "+comment+"<br />";
	}
		
}
window.addEventListener('load',doFirst,false);