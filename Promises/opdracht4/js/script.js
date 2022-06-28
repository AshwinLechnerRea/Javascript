// setTimeout(() => {
//     document.querySelector(".blok:nth-child(1)").style.backgroundColor = "dodgerblue";
//     setTimeout(() => {
//         document.querySelector(".blok:nth-child(2)").style.backgroundColor = "khaki";
//         setTimeout(() => {
//             document.querySelector(".blok:nth-child(3)").style.backgroundColor = "mediumseagreen";
//             setTimeout(() => {
//                 document.querySelector(".blok:nth-child(4)").style.backgroundColor = "silver";
//                 setTimeout(() => {
//                     document.querySelector(".blok:nth-child(5)").style.backgroundColor = "violet";
//                     setTimeout(() => {
//                         document.querySelector("h1").innerHTML = "You say tomato, but I say Kenny";
//                         setTimeout(() => {
//                             document.querySelector("img").src = "images/kenny.png";
//                         }, 1000);
//                     }, 600);
//                 }, 400);
//             }, 200);
//         }, 400);
//     }, 600);
// }, 1000);

// setTimeout(() => {
//     console.log("You say yes");
//     setTimeout(() => {
//         console.warn("I say no");
//         setTimeout(() => {
//             console.log("You say stop");
//             setTimeout(() => {
//                 console.warn("I say go go go");
//             }, 1000);
//         }, 1500);
//     }, 1000);
// }, 1500);

let southPark = new Promise((resolve, reject) => {
    setTimeout(() => {
        document.querySelector(".blok:nth-child(1)").style.backgroundColor = "dodgerblue";
        resolve();
    }, 1000);
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(".blok:nth-child(2)").style.backgroundColor = "khaki";
            resolve();
        }, 600);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(".blok:nth-child(3)").style.backgroundColor = "mediumseagreen"
            resolve();
        }, 400);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(".blok:nth-child(4)").style.backgroundColor = "silver";
            resolve();
        }, 200);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(".blok:nth-child(5)").style.backgroundColor = "violet";
            resolve();
        }, 400);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector("h1").innerHTML = "You say tomato, but I say Kenny";
            resolve();
        }, 600);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector("img").src = "images/kenny.png";
            resolve();
        }, 1000);
    });
})


let logDialog = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("You say yes");
        resolve();
    }, 1000);
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.warn("I say no");
            resolve();
        }, 1500);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("You say stop");
            resolve();
        }, 1000);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.warn("I say go go go");
            resolve();
        }, 1500);
    });
})
Promise.all([southPark, logDialog]).then(() => {
    alert("All promises are done!");
})