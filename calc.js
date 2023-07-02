var result;
var test;
const btns = document.getElementsByClassName('btn');
for(const btn of btns){
    btn.onclick = display;
}
function display(){
    var num = this.value;
    console.log(num);
    test  = document.getElementById('see').innerHTML += num; 
    console.log(test);
    result = eval(test);
    
    

}
document.getElementById('clear').onclick = function(){
    
    document.getElementById('see').innerHTML = test.toString().slice(0, -1);
   
   

 }
document.getElementById('equals').onclick = function(){
    document.getElementById('see').innerHTML = result;
}

document.getElementById('del').onclick = function(){
    document.getElementById('see').innerHTML = '';
}
