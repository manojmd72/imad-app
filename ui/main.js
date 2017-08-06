console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

var img =document.getElementById('madi');
var marginLeft = 0;
var temp =0;

function moveRight(){
 marginLeft= marginLeft+1;
 img.style.marginLeft=marginLeft+'px';
 
temp =  img.style.marginLeft; 
}
img.onclick = function ()
{
    //mg.style.marginLeft='100px';i
    var interval = setInterval(moveRight,100);    
    };