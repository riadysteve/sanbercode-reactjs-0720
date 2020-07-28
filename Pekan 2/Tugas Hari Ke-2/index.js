var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "Komik", timeSpent: 1000 },
];
console.log("Soal 1 :");

readBooks(10000, books[0], function (sisaWaktu) {
  if (sisaWaktu >= books[1].timeSpent) {
    readBooks(sisaWaktu, books[1], function (sisaWaktu) {
      if (sisaWaktu >= books[2].timeSpent) {
        readBooks(sisaWaktu, books[2], function (sisaWaktu) {
          if (sisaWaktu >= books[3].timeSpent) {
            readBooks(sisaWaktu, books[3], function (sisaWaktu) {
              console.log("\nSaya Selesai Membaca!");
            });
          }
        });
      }
    });
  }
});
