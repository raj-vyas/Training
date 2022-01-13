let n = 5
let str = ""
for (let i = 0; i < 1; i++) {
    for (let j = -n; j <= 0; j++) {
        if (j == 0 && i == 0) {
            str += "o\n"
        }
        else{
            str+=" "
        }
    }
}
for (let k = 0; k < n-1; k++) {
    for (let i = 1; i <=n; i++) {
        for (let j = -n; j <= n; j++) {
    
            if (i + j == 0 ) {
                str += "/"
            }
            else if (i == j ) {
                str += "\\"
            }
    
            else if (i <= n && i >= 1 && i - Math.abs(j) <= n && i - Math.abs(j) > 0 ) {
                str += "-";
            }
            else {
                str += " "
            }
        }
        str += "\n"
    }
}
for (let i = (n*n)-(n-1); i < (n * n) + 2; i++) {
    for (let j = -n; j <= n; j++) {
        if (Math.abs(j) == 1 && i > (n*n)-n && i<(n*n)+1 ) {
            str += "|"
        }
        else if (i == (n * n) + 1 || j == 0 && i > (n*n)-n) {
            str += "="
        }
        else {
            str += " "
        }
    }
    str+="\n"
}
console.log(str);