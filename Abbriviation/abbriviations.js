let start, end, count;

function abrriviator(arr){
    let output = [];
    arr.forEach(el=>{
        // console.log(typeof el)
        if (typeof el !== "string" || el.length<10)
            output.push(el);
        else{
            start  = el.substring(0,1)
            end = el.substring(el.length -1, el.length)
            count = (el.length -2)
            output.push(start + count + end)
        }
    })
    return output;
}

let abrv = abrriviator([10, "word",
    "localization",
    "internationalization",
    "pneumonoultramicroscopicsilicovolcanoconiosis"])
let x = 1;
for (let i in abrv){
    console.log(x+". "+abrv[i])
    x++;
}