var canvas = document.getElementById("my_canvas")
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-400;
canvas.height = window.innerHeight-400;
var color = "red"
line_Width = 1;
// Event starts --------------------------------------------------------------------------------
Mouseevent = "empty";
Last_postion_x = 0;
Last_postion_y = 0;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    Mouseevent = "mousedown";
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
    current_mouse_x = e.clientX -canvas.offsetLeft;
    current_mouse_y = e.clientY -canvas.offsetTop;

if (Mouseevent == "mousedown")
{
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = line_Width;
     ctx.arc(current_mouse_x , current_mouse_y ,40,0, 2*Math.PI)
     ctx.stroke();
    
}

    Last_postion_x = current_mouse_x;
    Last_postion_y = current_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    Mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    Mouseevent = "mouseleave";
}

function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}