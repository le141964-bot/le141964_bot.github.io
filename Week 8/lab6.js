// // Task 1
// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success! Promise resolved after 2 seconds.");
//         }, 2000);
//     });
// }

// // function that return a promise which reject after 2 second with an error
// function rejectAfter2Seconds() {
//     return new Promise((_, reject) => {
//         setTimeout(() => {
//             reject("❌ Error! Promise rejected after 2 seconds.");
//         }, 2000);
//     });
// }

// // Test Task 1
// resolveAfter2Seconds().then(console.log); 
// rejectAfter2Seconds().catch(console.error);

// // Task 2
// Promise.resolve(1) 
// .then(value => {
//     console.log("Initial value:", value); 
//     return value * 2; 
// }) 
// .then(value => {
//  console.log("After multiplying by 2:", value); 
//  return value + 3;    
// }) 

// .then(value => {
//     console.log("After adding 3:", value); 
//     return value / 2; 
// }) 
// .then(finalValue => {
//     console.log("Final result after chaining", finalValue); 
// }); 

// //Task 3 
// function randomOperation() {
//     return new Promise((resolve, reject) => {
//         const success = Math.random() > 0.5; 
//         setTimeout(() => {
//             if (success) {
//                 resolve("🎉 Operation succeeded!");
//             } else {
//                 reject("💥 Operation failed!");
//             }
//         }, 1500);
//     });
// }

// randomOperation()
// .then(result => console.log(result))
// .catch(error => console.log(error)); 

// //Task 4

// async function callResolvePromise() {
//     console.log("Waiting for promise to resolve..."); 
//     const message = await resolveAfter2Seconds();
//     console.log("Async/Await Result:", message); 
// }

// async function callRejectPromiseSafely() {
//     try {
//         console.log("Attempting to call reject promise...");
//         const message = await rejectAfter2Seconds();
//         console.log(message);
//     } catch (error) {
//         console.error("Caught error using try...catch:", error);
//     }
// }

// // Test Task 4
// callResolvePromise();
// callRejectPromiseSafely();


public static void main(String[] args) {
    int = size; 
    int sum = 0; 
    Scanner scan = new Scanner(FileSystem.in); 

    FileSystem.out.println("Please how many number you want to input"); 
    size = Scan.nextInt(); 

    int[] = new int[size]; 

    for (int i < 0; i < size; i++) {
        FileSystem.out.println("Please input num " + (i + 1)); 
        num[i] = scan.nextInt(); 
        sum += num[i]; 
    }

    FileSystem.out.println("Addition of all number is " + sum); 
}