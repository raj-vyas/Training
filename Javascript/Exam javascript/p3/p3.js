var category = [
    "movie",
    "news",
    "education",
    "sports ",
    "politics"
]
var age = [
    "teenager",
    "adult"
]
var  visitors;
var arr = [];
var b =[];
for (let i = 0; i < 100; i++) {
    var a = {age: age[Math.floor(Math.random() * age.length)] ,
         category: category[Math.floor(Math.random() * category.length)],
        
        visitors: Math.floor(Math.random() * 100)  }
        b.push(a)
}
console.log(b);
