var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed an alphabet key";
			console.log("alphabet key");
		}
		else{
		if((keyPressed >=48 && keyPressed<=57))
		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed a number key";
			console.log("numberkey");
		}
		else{
		if((keyPressed >=37 && keyPressed<=40))
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed an arrow key";
			console.log("arrowkey");
		}
		else{
		if((keyPressed ==17)||(keyPressed==18)||(keyPressed==27))
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed a special key";
			console.log("specialkey");
		}	
		else{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed an other key";
			console.log("otherkey");
		}
	}
}
}
	}
		


function aplhabetkey()
{
	img_image="Slide1.png";
	add();
}
function numberkey()
{
	img_image="Slide2.png";
	add();
}
function arrowkey()
{
	img_image="Slide3.png";
	add();
}
function specialkey()
{
	img_image="Slide4.png";
	add();
}
function otherkey()
{
	img_image="Slide5.png";
	add();
}