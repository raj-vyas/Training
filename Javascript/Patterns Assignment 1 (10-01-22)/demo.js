let count = "";
let n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = -2; j <= 2; j++) {
//         if(i== Math.abs(j) || i+ Math.abs(j)==n-1 )
//         {
//             count+="*";
//         }
//         else{
//             count+=" ";
//         }
//     }
//     count+="\n"
// }
// console.log(count);

for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        count += " ";
    }
    for(let k =0; k=n+(n-1) ;k++){
        count += "*";
    }
    count+="\n"
}
console.log(count);