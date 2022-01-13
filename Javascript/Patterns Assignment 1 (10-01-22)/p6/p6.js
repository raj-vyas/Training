let count="";
let n=5;
for (let i = 0; i < n; i++) {
    for (let j = -n; j < n; j++) {
        if(Math.abs(i)-Math.abs(j)>=0)
        {
            count+= Math.abs(i) - Math.abs(j) + 1;
        }
        else{
            count+=" ";
        }
    }
    count+="\n"
}
console.log(count);