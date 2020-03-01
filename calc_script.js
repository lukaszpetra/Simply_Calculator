var input = document.getElementById('input');

function buttonClick(obj){
    
    var btnPushed = obj.innerHTML;
    
    if( btnPushed == '='){
        input.innerHTML = eval(input.innerHTML);
    } else if(btnPushed == 'AC'){
        input.innerHTML = '0';
    } else{
        if(input.innerHTML == '0'){
            input.innerHTML = btnPushed;
        } else {
            input.innerHTML += btnPushed;
        }
    }
    
}