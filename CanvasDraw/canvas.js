window.addEventListener('load',()=>{
//console.log("hello");

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

//Resizing
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;	

ctx.fillRect(75,75,100,200); 

ctx.strokeStyle ="blue";
ctx.lineWidth=20;
ctx.strokeRect(50,50,150,250);

ctx.strokeStyle ="pink";
ctx.lineWidth=10;
ctx.strokeRect(50,50,150,250); 


ctx.beginPath();
ctx.moveTo(300,100);
ctx.lineWidth=5;
ctx.lineTo(300,200);
ctx.lineTo(500,200);
ctx.closePath();
ctx.stroke();

//Variables


let painting = false;

function startPosition(){
	 painting = true;
	 draw(e);
}

function finishedPosition(){
	 painting = false;
	 ctx.beginPath();
}

function draw(e) {
	if(!painting) return;
	ctx.linewidth = 30;
	ctx.linecap = "round";
	ctx.strokeStyle = "red";
	
	ctx.lineTo(e.clientX,e.clientY);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(e.clientX,e.clientY);
	ctx.closePath();
	
	
}
//EventListeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);


});

