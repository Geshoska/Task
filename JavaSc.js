
function add(){
    let textNode = document.getElementById('myInput');
	let par = document.getElementById('par'); 
    let btn = document.getElementById('new');
    btn = document.getElementById("par").appendChild(textNode);
}
function remove(){
	let textNode = document.getElementById('myInput');
	let par = document.getElementById('par'); 
    let btn1 = document.getElementById('rem');
    btn1 = document.getElementById("par").removeChild(textNode);
} 