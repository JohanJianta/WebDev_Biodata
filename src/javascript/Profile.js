import avatar from "../image/avatar.png";

export default function Profile() {
  return (
    <div className="Profile Flex-Tengah">
      <div className="Profile-utama Flex-Tengah">
        <img src={avatar} alt="avatar" className="Profile-logo" />

        <div className="Profile-info">
          <p>
            <b>Nama:</b> {localStorage.getItem("nama")}
          </p>
          <p>
            <b>Jenis Kelamin:</b> {localStorage.getItem("gender")}
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
