function show (){
     console.log("Hello world")
}

// show();
// show();


let arry =[20, 31, 666, 484]


function printInfo(Name) {
     console.log("ki khobar tor", Name)
}
// printInfo('shuvo');

// printInfo(arry);


// function add(x,y) {
//      const total = x+y;
//      return total;
     
// }
// const result = add(10,5);
// console.log(result);


// function sumOfArray(arr) {
//      let sum = 0;
//      for( let i= 0; i <arr.length; i++){
//          sum= sum + arr[i];  
//      }
//      return sum;
     
// }

// const Numbers =[20, 366, 33, 445, 5];
// let total = sumOfArray(Numbers);
// console.log(total);

// function sumOfOddNumbers (arr){
//      let sum= 0;

//      for(let i = 0; i <arr.length; i ++){
//           if (arr[i] %2 === 1){
//                sum = sum + arr[i];

//           }
//      }
//      return sum;
// }



// let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const total= sumOfOddNumbers(Numbers);
// console.log(total);


function information(info) {
     const sentence = "amar nam "+info.name+", amar bari "+info.address+", amar age "+info.age;
     return sentence;
}


const myinfo ={
     name : "sumon",
     age : 23,
     address : "noakhali"
}

console.log(information(myinfo));
