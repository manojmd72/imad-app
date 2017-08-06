console.log('Loaded!');

/*
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
    
    
    */
    var button = document.getElementById('counter');
    var counter=0;
    button.onclick= function(){
        counter= counter+1;
        var span= document.getElementById('count');
        span.innerHTML= counter.toString();
    };