console.log("Jack Ma Maslahatlari");
const list = [
    "yahshi talaba boling", //1-20
    "togri boshliq tanlang va koproq hato qiling", //21-30
    "ozingizga ishlashni boshlang", //31-40
    "siz yaxshi bilgan narsalarni bajaring", //41-50
    "yoshlarga imkoniyat bering", //51-60
    "endi dam oling, foydasi yoq endi", //61+
];

async function maslahatBering(a) {
    if (typeof a !=="number") throw new Error("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return list[5];
        // setTimeout(function() {
        //     return list[5];
        // }, 5000);
    }
}


// console.log("passed here 0");
// maslahatBering(60)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);

//     });
// console.log("passed here 1")


//Async / await

async function run() {
    let javob = await maslahatBering(21);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();