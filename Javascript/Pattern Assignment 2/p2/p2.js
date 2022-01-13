let n = 5;
let str = "";
for (let i = -n; i <= n; i++) {
    if (i==0) {
        continue
    }
    for (let j = -n; j <= n; j++) {
        if (j==0) {
            continue
        }
        if (Math.abs(i)+Math.abs(j)<=n+1  && Math.sign(i)==Math.sign(j))  {
            str+="0"
        }
        else {
            str+=" "
        }
        
    }
    str += "\n"
}
console.log(str);