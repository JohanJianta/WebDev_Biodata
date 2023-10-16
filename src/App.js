import { useState, createElement } from 'react';
import avatar from './image/avatar.png';
import './App.css';

function App() {
  const [circle, setCircle] = useState(false);

  // const createElement = (type, props, children) =>
  //   React.createElement(type, props, children);     //  set object createElement untuk mempermudah nesting

  const image = createElement('img', {
    src: avatar,
    className: `Header-logo ${circle ? 'lingkaran' : ''}`,    //  class 'lingkaran' hanya muncul ketika tombol ditekan
    alt: 'avatar',
  });

  const bodyKiri = createElement(
    'div',
    { className: 'Body-kiri' },
    [image, createElement('li', null, 'Pria'), createElement('li', null, 'Mahasiswa')]
  );

  const containerName = createElement(
    'div',
    null,
    [
      createElement('p', { className: 'Header-name' }, 'Johan Reinaldo Jianta'),
      createElement('hr', { className: 'Garis-name' }),
    ]
  );

  const listInfo = createElement(
    'div',
    { className: 'List-info' },
    [
      createElement('li', null, 'Angkatan 2022'),
      createElement('li', null, 'Informatika - Full Stack Development'),
      createElement('li', null, 'Jalur Sukses: Corporate Entrepreneurship'),
      createElement('li', null, 'Hobi: Tidur'),
    ]
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

  const containerTombol = createElement(
    'div',
    { className: 'Bawah-child Tombol-container' },
    [
      createElement('button', { onClick: () => setCircle(prev => !prev) }, 'Ganti Border'),
    ]
  );

  const bodyBawah = createElement('div', { className: 'Body-bawah' }, [
    createElement('hr', null),
    containerRiwayat,
    containerTombol,
  ]);

  return createElement('div', { className: 'App' }, [bodyAtas, bodyBawah]);
}

export default App;