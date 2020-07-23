// Soal 1
// output :
// LOOPING PERTAMA
// 2 - I Love Coding
// 4 - I Love Coding
// 6 - I Love Coding
// 8 - I Love Coding
// 10 - I Love Coding
// 12 - I Love Coding
// 14 - I Love Coding
// 16 - I Love Coding
// 18 - I Love Coding
// 20 - I Love Coding
// LOOPING KEDUA
// 20 - I will become a frontend developer
// 18 - I will become a frontend developer
// 16 - I will become a frontend developer
// 14 - I will become a frontend developer
// 12 - I will become a frontend developer
// 10 - I will become a frontend developer
// 8 - I will become a frontend developer
// 6 - I will become a frontend developer
// 4 - I will become a frontend developer
// 2 - I will become a frontend developer
console.log("SOAL 1 :");
console.log("LOOPING PERTAMA");
var awal = 2;
while (awal <= 20) {
  console.log(`${awal} - I Love Coding`);
  awal += 2;
}
awal = 20;

console.log("LOOPING KEDUA");
while (awal >= 2) {
  console.log(`${awal} - I will become a frontend developer`);
  awal -= 2;
}

// Soal 2
// output :
// 1 - Santai
// 2 - Berkualitas
// 3 - I Love Coding
// 4 - Berkualitas
// 5 - Santai
// 6 - Berkualitas
// 7 - Santai
// 8 - Berkualitas
// 9 - I Love Coding
// 10 - Berkualitas
// 11 - Santai
// 12 - Berkualitas
// 13 - Santai
// 14 - Berkualitas
// 15 - I Love Coding
// 16 - Berkualitas
// 17 - Santai
// 18 - Berkualitas
// 19 - Santai
// 20 - Berkualitas
console.log("\nSOAL 2:");
for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 2 != 0) {
    console.log(`${i} - I Love Coding`);
  } else if (i % 2 == 0) {
    console.log(`${i} - Berkualitas`);
  } else if (i % 2 != 0) {
    console.log(`${i} - Santai`);
  }
}

// Soal 3
// output :
// #
// ##
// ###
// ####
// #####
// ######
// #######
console.log("\nSOAL 3:");
hastag = "#";
hasil = "";
for (var i = 1; i <= 7; i++) {
  console.log((hasil += hastag));
}

// Soal 4
// output : [ 'saya', 'sangat', 'senang', 'belajar', 'javascript' ]
console.log("\nSOAL 4:");
var kalimat = "saya sangat senang belajar javascript";
var arrayKalimat = kalimat.split(" ");
console.log(arrayKalimat);

// Soal 5
// output:
// 1. Mangga
// 2. Apel
// 3. Anggur
// 4. Semangka
// 5. Jeruk
console.log("\nSOAL 5:");
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
var sorted = daftarBuah.sort();
// menggunakan for biasa
for (var i = 0; i < sorted.length; i++) {
  console.log(sorted[i]);
}
// menggunakan for/of Loop
// for (sortItem of sorted) {
//   console.log(sortItem);
// }
