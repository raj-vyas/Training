let count="";
let n=4;
for (let i = -n; i <= n; i++) {
    if(i==0)
    {continue}
    for (let j = -n; j <= n; j++) {
        if (j==0)
        {continue}
        if(Math.abs(i)+Math.abs(j)>=n+2)
        {
            count+= "-";
        }
        else{
            count+="0";
        }
    }
    count+="\n"
}
console.log(count);
