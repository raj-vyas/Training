// // var a=10;
// // if (a%5==0)
// // {
// //     return true;
// //     //console.log("True");
// // }
// // else{
// //     console.log(5);
// // }
// 3
function myfunction(n)
{
    if (Number(n) === n && n % 1 !== 0)
    {
        return true;   
    }
    else{
      return false;
    }
}
console.log(myfunction(5.5));


