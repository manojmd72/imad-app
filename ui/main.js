console.log('MainJs Loaded!');

var submit = document.getElementById('submit_btn');

submit.onclick = function () {
    
    var request= new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(request.readyState===XMLHttpRequest.DONE){
            if (request.status===200){
                console.log('User Logged in"');
                alert('Logged in Successfully');
            } else if (request.status===403) {
                alert('Usernmae/Password is incorrect');
            } else if (request.status ===500) {
                alert('Something went wrong on the server');
            }
        }
    };
    
    //Make the Request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://deshmukhmanoj.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username:username, password: password}));

};
