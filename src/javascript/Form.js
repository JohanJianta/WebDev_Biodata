import { useState } from "react";

export default function Profile({ onPageChange }) {
  const [currentForm, selectForm] = useState(1);

  const [namaTemp, setNamaTemp] = useState(localStorage.getItem("nama"));
  const [genderTemp, setGenderTemp] = useState(localStorage.getItem("gender"));
  const [angkatanTemp, setAngkatanTemp] = useState(
    localStorage.getItem("angkatan")
  );
  const [jurusanTemp, setJurusanTemp] = useState(
    localStorage.getItem("jurusan")
  );
  const [jalurSuksesTemp, setJalurSuksesTemp] = useState(
    localStorage.getItem("jalurSukses")
  );
  const [hobiTemp, setHobiTemp] = useState(localStorage.getItem("hobi"));
  const [riwayatTemp, setRiriwayatTemp] = useState(
    localStorage.getItem("riwayat")
  );

  function saveToLocalStorage() {
    localStorage.setItem("nama", namaTemp);
    localStorage.setItem("gender", genderTemp);
    localStorage.setItem("angkatan", angkatanTemp);
    localStorage.setItem("jurusan", jurusanTemp);
    localStorage.setItem("jalurSukses", jalurSuksesTemp);
    localStorage.setItem("hobi", hobiTemp);
    localStorage.setItem("riwayat", riwayatTemp);
  }

  return (
    <div className="Form">
      <div className="Form-selection">
        <p>Form</p>
        <div className="group-button">
          <button onClick={() => selectForm(1)}>1</button>
          <button onClick={() => selectForm(2)}>2</button>
        </div>
      </div>

      <form
        className={`Form-profile Flex-Tengah ${
          currentForm === 1 ? "" : "Hidden"
        }`}
      >
        <div className="Form-field">
          <label htmlFor="nama">Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={namaTemp}
            onChange={(e) => setNamaTemp(e.target.value)}
          />
        </div>
        <div className="Form-field">
          <label htmlFor="gender">Jenis Kelamin:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={genderTemp}
            onChange={(e) => setGenderTemp(e.target.value)}
          />
        </div>
        <div className="Form-field">
          <label htmlFor="angkatan">Angkatan:</label>
          <input
            type="number"
            id="angkatan"
            name="angkatan"
            value={angkatanTemp}
            onChange={(e) => setAngkatanTemp(e.target.value)}
          />
        </div>
        <div className="Form-field">
          <label htmlFor="jurusan">Jurusan:</label>
          <input
            type="text"
            id="jurusan"
            name="jurusan"
            value={jurusanTemp}
            onChange={(e) => setJurusanTemp(e.target.value)}
          />
        </div>
        <div className="Form-field">
          <label htmlFor="jalurSukses">Jalur Sukses:</label>
          <input
            type="text"
            id="jalurSukses"
            name="jalurSukses"
            value={jalurSuksesTemp}
            onChange={(e) => setJalurSuksesTemp(e.target.value)}
          />
        </div>
        <div className="Form-field">
          <label htmlFor="hobi">Hobi:</label>
          <input
            type="text"
            id="hobi"
            name="hobi"
            value={hobiTemp}
            onChange={(e) => setHobiTemp(e.target.value)}
          />
        </div>
        <input
          type="button"
          value="Lanjut"
          className="Form-button"
          onClick={() => selectForm(2)}
        />
      </form>

      <form className={`Form-riwayat ${currentForm === 2 ? "" : "Hidden"}`}>
        <label>Riwayat Organisasi:</label>
        <textarea
          rows="15"
          value={riwayatTemp}
          onChange={(e) => setRiriwayatTemp(e.target.value)}
        />
        <input
          type="button"
          value="Simpan"
          className="Form-button"
          id="Form-submit"
          onClick={() => {
            saveToLocalStorage();
            onPageChange("Profile");
          }}
        />
      </form>
    </div>
  );
}
