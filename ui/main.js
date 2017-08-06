console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

var img =document.getElementById('madi');
var marginLeft = 0;

function moveRight(){
 marginLLeft= marginLeft+10;
 img.style.marginLeft=marginLeft+'px';
 
}
img.onclick = function ()
{
    //mg.style.marginLeft='100px';i
    var interval = setInterval(moveRight,100);    
    };