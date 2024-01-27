var x= prompt("Enter your age");
function age(){
    if(x>=18){
        document.write("You can vote");
    }
    else{
        document.write("You can not vote");
    }
}
age(x);