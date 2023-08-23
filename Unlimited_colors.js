let body=document.querySelector("body")
let start=document.getElementById("start")
let stop=document.getElementById("stop")

///generate Random colors

const randomColor=function()
{
    const hexa='0123456789ABCDEF'
    let color="#"
    for(let i=0;i<6;i++)
    {
        color+=hexa[parseInt(Math.random()*16)]
    }
    return color;
}
// console.log(randomColor());


let colorsAdding;
start.addEventListener('click',function()
{
    colorsAdding=setInterval(function(){
        body.style.backgroundColor=randomColor();
       },1000)
})
stop.addEventListener('click',function()
{
  clearInterval(colorsAdding);
  colorsAdding=null
})
