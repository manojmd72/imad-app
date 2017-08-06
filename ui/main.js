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
    //var counter=0;
   
    button.onclick= function(){
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = function()
        {
            if (request.readystate === XMLHttpRequest.DONE)
            {
                if (request.status===200) {
                var counter = request.responseText;
                var span = document.getElementById ('count');
                span.innerHTML=counter.toString();
                
            }
            
         }
         
};
         
         request.open('GET', 'http://deshmukhmanoj.imad.hasura-app.io/counter', true);
         request.send(null);
};

         
         
            
   