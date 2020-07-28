// di file promise.js
function readBooksPromise(time, book) {
  console.log(`saya mulai membaca ${book.name}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sisaWaktu = 0;
      if (time >= book.timeSpent) {
        sisaWaktu = time - book.timeSpent;
        console.log(
          `saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`
        );
        if (sisaWaktu === 0) {
          reject(sisaWaktu);
        }
        resolve(sisaWaktu);
      } else {
        console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`);
        reject(sisaWaktu);
      }
    }, book.timeSpent);
  });
}

module.exports = readBooksPromise;