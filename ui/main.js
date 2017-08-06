console.log('Loaded!');

var element = document.getElementById('main.txt');


var img =document.getElementById('madi');

function moveright(){
 marginLLeft= marginLeft+10;
 img.style.marginLeft=marginLeft+'px';
 
}
img.onclick = function ()
{
    //mg.style.marginLeft='100px';i
    var interval = setInterval(moveRight,100);    
}    