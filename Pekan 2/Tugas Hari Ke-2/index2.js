var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

// Lanjutkan code untuk menjalankan function readBooksPromise
console.log("Soal 2 :");
var start = 0;
function readBook(time, books, start) {
  readBooksPromise(time, books[start])
    .then(function (resolve) {
      if (start < books.length - 1) {
        start++;
        if (resolve === 0) {
          reject(sisaWaktu);
        }
        readBook(resolve, books, start);
      } else {
        console.log("\nSelesai Membaca");
      }
    })
    .catch(function (reject) {
      console.log("\nSelesai");
    });
}

readBook(10000, books, start);

// readBooksPromise(10000, books[i])
//   .then(function (resolve) {
//     if (i <= books.length - 1) {
//       i++;
//       console.log(i);
//       readBooksPromise(resolve, books[i]).then(function (resolve) {
//         if (i <= books.length - 1) {
//           i++;
//           console.log(i);
//           readBooksPromise(resolve, books[i]);
//         }
//       });
//     }
//   })
//   .catch(function (reject) {
//     console.log("Waktu Habis");
//   });
