let n = 5
let str = ""

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (n % 2 == 0 && (i == Math.floor(n / 2) && j == Math.floor(n / 2) || i == Math.floor(n / 2) - 1 && j == Math.floor(n / 2) - 1
            || i == Math.floor(n / 2) && j == Math.floor(n / 2) - 1 || i == Math.floor(n / 2) - 1 && j == Math.floor(n / 2))) {

            str += "o"

        }
        else if (n % 2 != 0 && (i == Math.floor(n / 2) && j == Math.floor(n / 2))) {
            str += "o";
        }

        else if (i == j) {
            str += "\\"
        }
        else if (i + j == n - 1) {
            str += "/"
        }
        else if (i == 0 & j <= n || i == n - 1 & j <= n) {
            str += "-"
        }
        else if (j == 0 & i <= n || j == n - 1 & i <= n) {
            str += "|"
        }
        else {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);
