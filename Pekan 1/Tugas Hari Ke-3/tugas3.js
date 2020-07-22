// Soal 1
// output dari code dibawah : saya senang belajar javascript
console.log("Soal ke-1 :");
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(`${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`);

console.log("\t");

// Soal 2
// output dari code dibawah : 12
console.log("Soal ke-2 :");
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

let hasil =
  parseInt(kataPertama) +
  parseInt(kataKedua) +
  parseInt(kataKetiga) +
  parseInt(kataKeempat);

console.log(hasil);

console.log("\t");

// Soal 3
// output dari code dibawah :
// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali
console.log("Soal ke-3 :");
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 15); // do your own!
var kataKetiga = kalimat.substring(15, 19); // do your own!
var kataKeempat = kalimat.substring(19, 25); // do your own!
var kataKelima = kalimat.substring(25, 32); // do your own!

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

console.log("\t");

// Soal 4
// output dari code dibawah : B
console.log("Soal ke-4 :");
var nilai = 75;

if (nilai > 100) {
  console.log("Maaf nilai paling tinggi adalah 100");
} else if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("D");
} else {
  console.log("E");
}

console.log("\t");

// Soal 5
// output dari code dibawah : 2 Agustus 2000
console.log("Soal ke-5 :");
var tanggal = 2;
var bulan = 8;
var tahun = 2000;

switch (bulan) {
  case 1:
    if (tanggal > 31) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Januari ${tahun}`);
    }
    break;

  case 2:
    if (tanggal > 29) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Febuari ${tahun}`);
    }
    break;

  case 3:
    if (tanggal > 31) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Maret ${tahun}`);
    }
    break;

  case 4:
    if (tanggal > 30) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} April ${tahun}`);
    }
    break;

  case 5:
    if (tanggal > 31) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Mei ${tahun}`);
    }
    break;

  case 6:
    if (tanggal > 30) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Juni ${tahun}`);
    }
    break;

  case 7:
    if (tanggal > 31) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Juli ${tahun}`);
    }
    break;

  case 8:
    if (tanggal > 31) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Agustus ${tahun}`);
    }
    break;

  case 9:
    if (tanggal > 30) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} September ${tahun}`);
    }
    break;

  case 10:
    if (tanggal > 31) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Oktober ${tahun}`);
    }
    break;

  case 11:
    if (tanggal > 30) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Juli ${tahun}`);
    }
    break;

  case 12:
    if (tanggal > 31) {
      console.log("Maaf tanggal tidak valid");
    } else {
      console.log(`${tanggal} Desember ${tahun}`);
    }
    break;

  default:
    console.log("Tanggal / Bulan / Tahun tidak valid");
    break;
}
