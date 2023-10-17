import { useState, createElement } from 'react';
import avatar from './image/avatar.png';
import Accordion from './components/Accordion';
import ToggleButton from './components/ToggleButton';
import './App.css';

function App() {
  const [circle, setCircle] = useState(false);  //  state border
  const [picture, setPicture] = useState(false);  //  state gambar
  const [activeIndex, setActiveIndex] = useState(0);  //  state accordion

  const image = createElement('img', {
    src: picture ? avatar : '',                               //  src avatar hanya muncul ketika tombol ditekan
    className: `Header-logo ${circle ? 'lingkaran' : ''}`,    //  class 'lingkaran' hanya muncul ketika tombol ditekan
    alt: 'avatar',
  });

  const containerTombolPicture = createElement(
    'div',
    { className: 'Tombol-container' },
    [
      createElement(ToggleButton, { toggleFunction: setPicture }, 'Tampilkan Gambar'),
    ]
  );

  const bodyKiri = createElement(
    'div',
    { className: 'Body-kiri' },
    [image, containerTombolPicture, createElement('li', null, 'Pria'), createElement('li', null, 'Mahasiswa')]
  );


  const containerName = createElement(
    'div',
    null,
    [
      createElement('p', { className: 'Header-name' }, 'Johan Reinaldo Jianta'),
      createElement('hr', { className: 'Garis-name' }),
    ]
  );

  const angkatan = createElement(Accordion, {
    title: "Angkatan",
    isActive: activeIndex === 0,
    onShow: () => setActiveIndex(0)
  }, "Angkatan 2022");

  const jurusan = createElement(Accordion, {
    title: "Jurusan & Spesialisasi",
    isActive: activeIndex === 1,
    onShow: () => setActiveIndex(1)
  }, "Informatika - Full Stack Development");

  const jalurSukses = createElement(Accordion, {
    title: "Jalur Sukses",
    isActive: activeIndex === 2,
    onShow: () => setActiveIndex(2)
  }, "Corporate Entrepreneurship");

  const hobi = createElement(Accordion, {
    title: "Hobi",
    isActive: activeIndex === 3,
    onShow: () => setActiveIndex(3)
  }, "Tidur");

  const listInfo = createElement(
    'div',
    { className: 'List-info' },
    [angkatan, jurusan, jalurSukses, hobi]
  );

  const bodyKanan = createElement('div', { className: 'Body-kanan' }, [containerName, listInfo]);


  const bodyAtas = createElement('body', { className: 'App-body' }, [bodyKiri, bodyKanan]);


  const containerRiwayat = createElement(
    'div',
    { className: 'Bawah-child' },
    [
      createElement('p', null, 'Riwayat Organisasi:'),
      createElement('li', null, 'Student Union Informatika 2023'),
    ]
  );

  const containerTombolBorder = createElement(
    'div',
    { className: 'Bawah-child Tombol-container' },
    [
      createElement(ToggleButton, { toggleFunction: setCircle }, 'Ganti Border'),
    ]
  );

  const bodyBawah = createElement('div', { className: 'Body-bawah' }, [
    containerRiwayat,
    containerTombolBorder,
  ]);

  return createElement('div', { className: 'App' }, [bodyAtas, createElement('hr', null), bodyBawah]);
}

export default App;