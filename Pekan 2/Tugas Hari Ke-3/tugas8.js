// Soal 1
console.log("Soal 1 :");
const luasLingkaran = (r) => 3.14 * r * r;
const kelilingLingkaran = (r) => 3.14 * r * 2;
console.log(luasLingkaran(10));
console.log(kelilingLingkaran(5));

// Soal 2
console.log("\nSoal 2 :");
let kalimat = "";
const tambahKata = (kata) => (kalimat += `${kata} `);

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");
console.log(kalimat);

// Soal 3
console.log("\nSoal 3 :");
class Book {
  constructor(name, totalPage, price) {
    this.name = name;
    this.totalPage = totalPage;
    this.price = price;
  }
}

let LOTR = new Book("LOTR", 1000, "150000");
console.log(LOTR);

class Komik extends Book {
  constructor(name, totalPage, price, isColorful) {
    super(name, totalPage, price);
    this.isColorful = isColorful;
  }
}

let Shinchan = new Komik("Shinchan", 100, "32000", false);
console.log(Shinchan);
