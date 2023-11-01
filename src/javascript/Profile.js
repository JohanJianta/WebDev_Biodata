import avatar from "../image/avatar.png";

export default function Profile() {
  // list warna gender
  const genderColors = {
    pria: "#3282B8", // biru
    "laki-laki": "#3282B8", // biru
    perempuan: "#F875AA", // pink
    wanita: "#F875AA", // pink
  };

  // objek gender
  const gender = {
    value: localStorage.getItem("gender"),
    // ambil warna berdasarkan gender, apabila tidak adaa yang sesuai kembalikan warna hijau
    color:
      genderColors[localStorage.getItem("gender").toLowerCase()] || "#86A789",
  };

  // objek nama
  const nama = {
    value: localStorage.getItem("nama"),
    color: gender.color,
  };

  return (
    <div className="Profile Flex-Tengah">
      <div className="Profile-utama Flex-Tengah">
        <img src={avatar} alt="avatar" className="Profile-logo" />

        <div className="Profile-info">
          <p>
            <b>Nama: </b>
            <span style={{ color: nama.color }}>{nama.value}</span>
          </p>
          <p>
            <b>Jenis Kelamin: </b>
            <span style={{ color: gender.color }}>{gender.value}</span>
          </p>
          <p>
            <b>Angkatan:</b> {localStorage.getItem("angkatan")}
          </p>
          <p>
            <b>Jurusan:</b> {localStorage.getItem("jurusan")}
          </p>
          <p>
            <b>Jalur Sukses:</b> {localStorage.getItem("jalurSukses")}
          </p>
          <p>
            <b>Hobi:</b> {localStorage.getItem("hobi")}
          </p>
        </div>
      </div>

      <div className="Profile-riwayat">
        <p>
          <b>Riwayat Organisasi:</b>
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: localStorage.getItem("riwayat").replace(/\n/g, "<br>"),
          }}
        ></p>
      </div>
    </div>
  );
}
