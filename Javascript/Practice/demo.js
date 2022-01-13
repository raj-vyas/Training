// // function fun(a,b){
// //     return a*b;
// // }

// // console.log(fun(6,2))


// // function fun(y) {
// //   return arguments.length;
// // }
// //console.log(fun(6))
// // let x = fun(6)
// // console.log(x)

// //var cars= Array("a","b","c");
// // cars = ['a',"b"]
// // //cars1=cars[0]
// // //cars[0]=["d"]
// // //cars.forEach(fun);
// // function fun(cars){
// //     console.log(cars)    
// // }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(","))
// console.log(Math.ceil(-7.9))
// console.log(Math.round(-7.9))
// console.log(Math.floor(7.9))
// console.log(Math.random()+1)

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort())
console.log(function(a, b){return a - b})

function myFunction2() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
  }

