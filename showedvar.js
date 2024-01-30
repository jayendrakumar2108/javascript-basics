var shadowedVar="I am global";
function exampleFunction(){
    var shadowedVar="I am local";
    console.log(shadowedVar); //"I am local"
}
console.log(shadowedVar); //"I am global"