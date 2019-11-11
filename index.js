//loading the canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
//setting the border

canvas.style.border="1px solid black"
// define the pen color
const penColor = document.querySelector('#penColor');
// define the pen width
const penWidth = document.querySelector('#penWidth');
document.querySelector('.save').addEventListener('click',saveImg)
document.querySelector('.clear').addEventListener('click',clearImg)

const m ={x:0,y:0};
canvas.addEventListener('mousemove',function(e){
m.lastX =m.x;
m.lastY=m.y;
m.x=e.x-canvas.offsetLeft;
m.y=e.y-canvas.offsetTop;
console.log(m.x,m.y)
draw('move');
})
canvas.addEventListener('mousedown',function(e){
  draw('down');
})
canvas.addEventListener('mouseup',function(e){
  draw('up');
})
canvas.addEventListener('mouseout',function(e){
  draw('up');
})
canvas.addEventListener('mousedown',function(e){
  shape('down')
})

function draw(val){
  if(val==='up'){
    m.draw=false;
  }
  if(val==='down'){
    m.draw=true;
  }
  if(m.draw){
    console.log('drawing');
    ctx.beginPath();
    ctx.moveTo(m.lastX,m.lastY);
    ctx.lineTo(m.x,m.y);
    ctx.strokeStyle = penColor.value;
    ctx.lineWidth= penWidth.value;
    ctx.stroke();
    ctx.closePath();
  }
}

// saving the image on the computer 
function saveImg(){
const dataURL=canvas.toDataURL()
console.log(dataURL);
const link =document.createElement('a');
document.body.appendChild(link);
link.setAttribute('download','image.png');
link.href=dataURL;
link.click();
document.body.removeChild(link)
}
//clearing the canvas

function clearImg(){
  let temp = confirm('Clear confirm?');
  if(temp){
    ctx.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);
  }
}




  





