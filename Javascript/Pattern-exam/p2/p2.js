let n = 5;
let str = ""
for (let i = -(n + 1); i <= n + 1; i++) {
    for (let j = -(n + 1); j <= n + 1; j++) {
        if (j == -(n + 1) || j == n + 1 || i == 0 && j == 0) {
            str += "o"
        }
        else if (i == -(n + 1) || i == (n + 1)) {
            str += "0"
        }
        else if (j < 0 && i < 0 && i <= j || j > 0 && i > 0 && i >= j) {
            str += Math.abs(j)
        }
        else if (i < 0 && j > 0 && i + j >= 0) {
            str += Math.abs((n - j) + 1)
        }
        else if (i > 0 && j < 0 && i + j <= 0) {
            str += Math.abs(n + j) + 1
        }
        else {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);