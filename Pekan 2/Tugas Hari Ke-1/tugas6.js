// Soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objectDaftarPeserta = {
  nama: "Asep",
  jeniskelamin: "laki-laki",
  hobi: "baca buku",
  tahunlahir: 1992,
};
console.log("Soal 1 :");
console.log(objectDaftarPeserta);

// Soal 2
console.log("\nSoal 2 :");
let buah = [
  {
    nama: "Strawberry",
    warna: "Merah",
    adabijinya: "Tidak",
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adabijinya: "Ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adabijinya: "Ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adabijinya: "Tidak",
    harga: 5000,
  },
];

console.log(buah[0]);

// Soal 3
console.log("\nSoal 3 :");
var dataFilm = [];

function addDataFilm(nama, durasi, genre, tahun) {
  dataFilm = [
    ...dataFilm,
    {
      nama: nama,
      durasi: durasi,
      genre: genre,
      tahun: tahun,
    },
  ];
}

addDataFilm("Dilan 1990", "2 hours", "Romance", "2019");
console.log(dataFilm);

// Soal 4
console.log("\nSoal 4 :");
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }

  get animalName() {
    return this.name;
  }

  get animalLegs() {
    return this.legs;
  }

  get animalColdBlooded() {
    return this.cold_blooded;
  }
}

var sheep = new Animal("Shaun");
console.log(sheep.animalName); // "shaun"
console.log(sheep.animalLegs); // 4
console.log(sheep.animalColdBlooded); // false

class Ape extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
    this.hands = 2;
  }

  yell() {
    console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti");
console.log(sungokong.name);
console.log(sungokong.legs);
sungokong.yell();

class Frog extends Animal {
  jump() {
    console.log("hop hop");
  }
}

var kodok = new Frog("buduk");
console.log(kodok.name);
console.log(kodok.legs);
kodok.jump();

// Soal 5
console.log("\nSoal 5 :");
class Clock {
  constructor({ template }) {
    this.template = template;
    var timer;
    this.render = function () {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = "0" + hours;

      var mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;

      var secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;

      var output = template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);

      console.log(output);
    };
  }

  stop() {
    clearInterval(timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
