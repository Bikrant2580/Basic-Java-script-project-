// // // // // // // // // // // // // // /**const product = {
   
// // // // // // // // // // // // // //     price:500,
// // // // // // // // // // // // // //     discount:15
// // // // // // // // // // // // // // };
// // // // // // // // // // // // // // console.log(product)**/
// // // // // // // // // // // // // //  /**let a = 4;
// // // // // // // // // // // // // // let b = 5;
// // // // // // // // // // // // // // value_1 = a<b ;
// // // // // // // // // // // // // // value_2 = a ===4 ;
// // // // // // // // // // // // // // console.log(value_1 && value_2);**/
// // // // // // // // // // // // // // //if statement 
// // // // // // // // // // // // // // /**let age = 16;
// // // // // // // // // // // // // // if (age>18){
// // // // // // // // // // // // // //     console.log("Can Vote");
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // else{
// // // // // // // // // // // // // //     console.log("Cannot vote");
// // // // // // // // // // // // // // }**/
// // // // // // // // // // // // // // /**let number = prompt("Enter the number you wanna check  ");
// // // // // // // // // // // // // // if (number%5===0){
// // // // // // // // // // // // // //     console.log("Multiple of 5");
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // else{
// // // // // // // // // // // // // // console.log("Not a multiple of 5")
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // let grade
// // // // // // // // // // // // // // let number = prompt("Enter the number you wanna check  ");
// // // // // // // // // // // // // // if (number>=80){
// // // // // // // // // // // // // //     grade = "A";
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // else if(number<80 & number >=60){
// // // // // // // // // // // // // //     grade = "B";
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // else{
// // // // // // // // // // // // // //     grade = "C";
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(grade)**/
// // // // // // // // // // // // // // //for  of loop
// // // // // // // // // // // // // // let string = "Bikrant";
// // // // // // // // // // // // // // let size= 0 ;
// // // // // // // // // // // // // // for ( let i of string){
// // // // // // // // // // // // // // console.log("i =", i);
// // // // // // // // // // // // // // i++;
// // // // // // // // // // // // // // size++
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log("String size =", size);



// // // // // // // // // // // // // let student =  {
// // // // // // // // // // // // //     name:"Bikrant",
// // // // // // // // // // // // //     class:15,
// // // // // // // // // // // // //     age:22,
// // // // // // // // // // // // //     cgpa:3.7,
// // // // // // // // // // // // // };
// // // // // // // // // // // // // for(let key in student){
// // // // // // // // // // // // // console.log("key = ",key,"value = ", student[key]);
// // // // // // // // // // // // // }
// // // // // // // // // // // // for (i=0; i<=100;i++){
// // // // // // // // // // // //     if (i %2===0){
// // // // // // // // // // // //         console.log("i = ",i);
// // // // // // // // // // // //     }
    
// // // // // // // // // // // // }
// // // // // // // // // // // let guess_number = 25;
// // // // // // // // // // // let number= prompt("Enter the guessing number");

// // // // // // // // // // // while(number!=guess_number){
// // // // // // // // // // //     number= prompt("You have guessed the wrong number. TRY AGAIN");
// // // // // // // // // // // }
// // // // // // // // // // // console.log(" Congratulation You have entered the right nummber");
// // // // // // // // // // let name = prompt("Enter your user name ");
// // // // // // // // // // let user_name = "@" + name + name.length ;
// // // // // // // // // // console.log(user_name);
// // // // // // // // // let marks = [ 85,97,44,37,76,60];
// // // // // // // // // let  length =  marks.length;
// // // // // // // // // let sum = 0;
// // // // // // // // // for (let i = 0; i <length;i++){
// // // // // // // // //     sum = sum + marks[i];
// // // // // // // // // }

// // // // // // // // // console.log(sum);
// // // // // // // // // let average = sum/length;
// // // // // // // // // console.log('average marks of class = ${average} ');
// // // // // // // // let companies = [ "Bloomberg","Microsoft","Google","Uber","IBM","Netflix"];
// // // // // // // // // console.log(companies);
// // // // // // // // // console.log(companies.shift());
// // // // // // // // // console.log(companies);
// // // // // // // // // console.log(companies.splice(3,1,"ola"));
// // // // // // // // // console.log(companies);
// // // // // // // // console.log(companies.splice(5,1,"Amazon"));
// // // // // // // // console.log(companies);
// // // // // // // function sum(a,b){
// // // // // // // let sum= a+b;
// // // // // // // console.log(sum);
// // // // // // // }
// // // // // // function vowel_calculate(vowel){
// // // // // //     size = vowel.length;
// // // // // //     let count = 0;
// // // // // //     for(let i=0;i<size;i++)
// // // // // //     {
// // // // // //         if(vowel[i]==="a" || vowel[i]==="e" ||vowel[i]==="i"||vowel[i]==="o"||vowel[i]==="u")
// // // // // //         {
// // // // // //             count = count+1;
// // // // // //         }
        

// // // // // //     }
// // // // // //     console.log("Total vowels is ", count);
    

// // // // // // }
// // // // // arr = [ 1,2,3,4,5];
// // // // // arr.forEach(function square(num){
// // // // //     val= num*num;
// // // // //     console.log(val);
// // // // // })

// // // // alert ( "Welcome !");
// // // let paragraph = document.querySelector("p1");
// // // console.dir(paragraph);
// // let h2 = document.querySelector("h2");
// // console.dir(h2.innerText);
// // h2.innerText = h2.innerText + " from apna college students ";
// let divs = document.querySelector(".box");
// console.log(divs);
