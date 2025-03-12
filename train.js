

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





////////////////////////////////// C-TASK starts //////////////////////////////////

    // Shunday function tuzing, u 2ta string parametr ega bolsin, hamda //
    // agar har ikkala string bir hil harflardan iborat bolsa true aks //
    // holda false qaytarsin //
    // MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true; //

// const checkContent = (a, b) => {
//   const arr = b.split("");
//   const new_arr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     if (a.length === arr.length && a.includes(arr[i])) {
//       count++;
//     }
//     new_arr.push(count);
//   }
//   if (new_arr.includes(0)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const result = checkContent("mitgroup", "groupmti");
// console.log(result);


////////////////////////////////// C-TASK ENDS //////////////////////////////////










////////////////////////////////// D-TASK starts //////////////////////////////////

// Shunday class tuzing tuzing nomi Shop, 
// va uni constructoriga 3 hil mahsulot pass bolsin, 
// hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
// Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 
// 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// let now = new Date();
// // let hour = now.getHours();
// // let minute = now.getMinutes();
// // minute = minute < 10 ? "0" + minute : minute;


// // class Shop {
// //   constructor(lagmon, non, cola) {
// //     this.lagmon = lagmon;
// //     this.non = non;
// //     this.cola = cola;
// //   }

// //   sotish(items, amount) {
// //     // lag'mon
// //     if (items === "lagmon") {
// //       if (this.lagmon >= amount) {
// //         this.lagmon -= amount;
// //       }
// //     }

// //     // non
// //     if (items === "non") {
// //       if (this.non >= amount) {
// //         this.non -= amount;
// //       }
// //     }

// //     // cola

// //     if (items === "cola") {
// //       if (this.cola >= amount) {
// //         this.cola -= amount;
// //       }
// //     }

// //     return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
// //   }

// //   qabul(items, amount) {
// //     // lagmon
// //     if (items === "lagmon") {
// //       this.lagmon += amount;
// //     }

// //     // non
// //     if (items === "non") {
// //       this.non += amount;
// //     }

// //     // cola
// //     if (items === "cola") {
// //       this.cola += amount;
// //     }
// //     return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
// //   }

// //   qoldiq() {
// //     return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola qolgan!`;
// //   }
// // }

// // const trade = new Shop(6, 2, 4);
// // console.log(trade.sotish("cola", 2));
// // console.log(trade.qabul("non", 2));

////////////////////////////////// D-TASK ENDS //////////////////////////////////









////////////////////////////////// E-TASK STARTS //////////////////////////////////

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function get_reverse(str) {
//   // empty string
//   let new_string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     new_string += str[i];
//   }
//   return new_string;
// }
// const result = get_reverse("hello");
// console.log("result:", result);

// const result2 = get_reverse("koobkrow");
// console.log("result2:", result2);

////////////////////////////////// E-TASK ENDS //////////////////////////////////




////////////////////////////////// G-TASK STARTS //////////////////////////////////

// Shunday function tuzingki unga integerlardan iborat array pass 
// bolsin va function bizga osha arrayning eng katta qiymatiga 
// tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// function getHighestIndex(arr) {
//     // defining new variable
//     let greatest;
//     let greatestIndex;
//     // looping through the arr parameter of function
//     for (let i = 0; i < arr.length; i++) {
//       // giving the condition if a found number is not the greatest
//       // in that case arr[i] is greater than that.
//       if (!greatest || arr[i] > greatest) {
//         greatest = arr[i];
//         // if not the greatestIndex = looped array of i
//         greatestIndex = i;
//       }
//     }
//     return greatestIndex;
//   }
//   let array = [5, 21, 12, 21, 8];
//   const result = getHighestIndex(array);
//   console.log("result:", result);


////////////////////////////////// G-TASK ENDS //////////////////////////////////





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


