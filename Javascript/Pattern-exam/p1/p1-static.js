let n = 3;
let str = ""

for (let i = 0; i < (n * n) + 2; i++) {
    for (let j = -n; j <= n; j++) {
        if (j == 0 && i == 0) {
            str += "o"
        }

        else if (i + j == 0 || i > n && i + j == n) {
            str += "/"
        }
        else if (i == j || i > n && i - j == n) {
            str += "\\"
        }

        else if (i <= n && i >= 1 && i - Math.abs(j) <= n && i - Math.abs(j) > 0 || i >= n && i <= n+n && i - Math.abs(j) <= n+n & i - Math.abs(j) > n) 
        {
            str += "-";
        }
        else if (Math.abs(j) == 1 && i > (n*n)-n && i<(n*n)+1 ) {
            str += "|"
        }
        else if (i == (n * n) + 1 || j == 0 && i > (n*n)-n) {
            str += "="
        }

        else {
            str += " "
        }
    
    }
    str += "\n"
}
console.log(str);