let numberarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//letterarray = ['a', 'b', 'c', 'd', 'e'];
let letterarray = "abcde";
let a = [];
let arr = [], arr2=[];

for (let i = 0; i < 9; i++) {

    a = Math.round(Math.random() * 10);
    //ans=Math.round(a);
    arr = letterarray.charAt(Math.floor(Math.random() * letterarray.length));
    arr2 = letterarray.charAt(Math.floor(Math.random() * letterarray.length));
    
    console.log(a,arr,arr2);
}
