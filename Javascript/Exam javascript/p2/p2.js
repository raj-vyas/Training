let numberarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//letterarray = ['a', 'b', 'c', 'd', 'e'];
let letterarray = "abcde";
let a = [], b = [];
//let a="",b="";
let arr = [], arr2 = [];
let third_array =[];
let new_array=[];



for (let i = 0; i < 10; i++) {
    a = numberarray[Math.floor(Math.random() * letterarray.length)] +
        letterarray[Math.floor(Math.random() * letterarray.length)];
    b = a[Math.floor(Math.random() * 2)];
    third_array = a+b; 

    //third_array.push(a+b);
    console.log(third_array);
}

let index="",value="";
while(third_array>0){
    index = (Math.random * third_array.length);
    value = third_array[index];
    third_array.splice(index,1);
    new_array.push(value)

    console.log(new_array);

}



