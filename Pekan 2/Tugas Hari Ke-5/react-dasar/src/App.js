import React from "react";
import "./App.css";

function App() {
  return (
    <div className="form">
      <h1>Form Pembelian Buah</h1>
      <div className="form-control">
        <label for="nama">Nama Pelanggan</label>
        <input type="text" />
      </div>
      <div className="form-control">
        <label for="item" className="self-end">
          Daftar Item
        </label>
        <div className="checkbox">
          <div className="checkbox-item">
            <input type="checkbox" /> Semangka
          </div>
          <div className="checkbox-item">
            <input type="checkbox" /> Jeruk
          </div>
          <div className="checkbox-item">
            <input type="checkbox" /> Nanas
          </div>
          <div className="checkbox-item">
            <input type="checkbox" /> Salak
          </div>
          <div className="checkbox-item">
            <input type="checkbox" /> Anggur
          </div>
        </div>
      </div>
      <button type="submit">Kirim</button>
    </div>
  );
}

export default App;
