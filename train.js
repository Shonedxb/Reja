

// // --------------------------------------------------------


// // A-TASK STARTS

// // function count_letter(element, string) {
// //     let count = 0; // a variable to store the count of occurences
// //     for (let i = 0; i < string.length; i++) {
// //       // condition to check if the character at the current position is equal to specific letter required!
// //       if (string[i] === element) {
// //         count++; // if true increment by 1
// //       }
// //     }
// //     return count ? count : "there is no such alphabet";
// //   };
// //   console.log(count_letter("e", "engineer")); 
// //   console.log(count_letter("t", "engineer")); 
// //   console.log(count_letter("b", "bubble-bus"));
// //   // charAt() = a method that returns the character at a specified index (position) in a string.
  
  
//   // A-TASK ENDS


// // B-TASK STARTS
//Shunday function tuzing, u 1ta string parametrga ega bolsin, 
//hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function count_digits(str) {
//   let count = 0;
//   for (let n of str) {
//     if (n >= "0" && n <= "9") {
//       count++;
//     }
//   }
//   return count;
// }
// const result = count_digits("ah98mad7al3ie1v");
// console.log(result);

//   // B-TASK ENDS


/* Asychronous Functions*/
// // console.log("Jack Ma Maslahatlari");

// // const list = [
// //     "yaxshi talaba bo'ling", // 0-20
// //     "to'g'ri bosjliq tanlang va ko'proq xato qiling", // 20-30
// //     "uzingizga ushlashingizni boshlang", // 30-40
// //     "siz kuchli bo'lgan narsalarni qiling", // 40-50
// //     "yoshlarga investitsiya qiling", //
// //     "endi dam oling, foydasi yo'q endi", // 60
// // ];

// // async function maslahatBering(a) {
// //     if(typeof a !== "number") throw new Error("insert a number", null);
// //     else if(a <= 20) return list[0];
// //     else if(a > 20 && a <= 30) return(null, list[1]);
// //     else if(a > 30 && a <= 40) return(null, list[2]);
// //     else if(a > 40 && a <= 50) return(null, list[3]);
// //     else if(a > 50 && a <= 60) return(null, list[4]);
// //     else {
// //         // setTimeout(function () {
// //         //     callback(null, list[5]);
// //         // }, 5000);
// //         return list[5];
// //     }
// // }


/*Promise functions*/

// // console.log("Jack Ma Maslahatlari");

// // const list = [
// //     "yaxshi talaba bo'ling", // 0-20
// //     "to'g'ri bosjliq tanlang va ko'proq xato qiling", // 20-30
// //     "uzingizga ushlashingizni boshlang", // 30-40
// //     "siz kuchli bo'lgan narsalarni qiling", // 40-50
// //     "yoshlarga investitsiya qiling", //
// //     "endi dam oling, foydasi yo'q endi", // 60
// // ];

//ASYNC function
// // Async function maslahatBering(a) {
// //     if(typeof a !== "number") throw new Error("insert a number", null);
// //     else if(a <= 20) return list[0];
// //     else if(a > 20 && a <= 30) return(null, list[1]);
// //     else if(a > 30 && a <= 40) return(null, list[2]);
// //     else if(a > 40 && a <= 50) return(null, list[3]);
// //     else if(a > 50 && a <= 60) return(null, list[4]);
// //     else {
// //             // setTimeout(function () {
// //             //     callback(null, list[5]);
// //             // }, 5000);
// //             // return list[5];
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(list[5]);
// //             }, 5000);
// //         });
// //     }
// // };

// // // then/catch
// // console.log("passed here 0");
// // maslahatBering(51).then((data) => {
// //     console.log("Javob: ", data);
// // }).catch((err) => {
// //     console.log("Error:", err);
// // });
// // console.log("passed here 1");


// // // asynch/await
// // async function run() {
// //     let javob = await maslahatBering(25);
// //     console.log(javob);
// //     javob = await maslahatBering(70);
// //     console.log(javob);
// //     javob = await maslahatBering(41);
// //     console.log(javob);
// // }
// // run();

////////////////////////////////////// Task-A ////////////////////////////////



// // let count_soz = 0;
// // function topHarf(soz, harf) {
// //     // let count_soz = 0;
// //     for (let position = 0;position < harf.length; position++) {
// //         if (harf.charAt(position) == soz) {
// //             count_soz += 1;
// //         }
// //     }
// //     return count_soz;
// // }

// // // Variant 1
// // gucci = topHarf("c", "guccci");
// // console.log("Gucci da c nechta?", gucci);
// // //// Variant 2
// // // console.log(topHarf("e","enginer"));



// // function qoldiqTopish(a, b, callback) {
// //     if(b===0) callback("Bo'luvchi 0 ga teng bo'lmasligi lozim", null);
// //     else {
// //         callback(null, a % b);
// //     }
// // }

// // qoldiqTopish(5,0, (err, data) => {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log("qoldiq", data);
// //     }
// // });



// // let promise = new Promise(function (resolve, reject) {
// //     const x = "geeksforgeeks";
// //     const y = "geeksforgeeks"
// //     if (x === y) {
// //         resolve();
// //     } else {
// //         reject();
// //     }
// // });

// // promise.
// //     then(function () {
// //         console.log('Success, You are a GEEK');
// //     }).
// //     catch(function () {
// //         console.log('Some error has occurred');
// //     });


