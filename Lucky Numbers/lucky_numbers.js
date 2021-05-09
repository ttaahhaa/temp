let x = 40047;

x = x.toString();
let key = true;
for (let i = 0 ; i<x.length ; i++){
    if (x.charAt(i)==7 || x.charAt(i)==4){
        continue;
    }else{
        key=false;
        break;
    }
    
}
console.log(key?"YES":"NO")