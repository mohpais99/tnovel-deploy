import React from 'react';
import eqlz from 'assets/images/icon/equalizer.svg'
function Banner() {
    return (
        <div className="page--banner">
            <div className="banner">
                <div className="h4 mb-1 font-rhd-bold">Selamat Datang di Translation Novel</div>
                <p>TNovel adalah platform untuk membaca novel online berbahasa indonesia di mana saja dan kapan saja. Kamu bisa menemukan berbagai cerita menarik dengan berbagai genre. Ayo mulai baca sekarang!</p>
            </div>
            <ul className="secondary--menu">
                <li><a href="">Daftar Novel</a></li>
                <li className="active"><a href="">Novel Terbaru</a></li>
                <li><a href="">Rate Tertinggi</a></li>
                <li><a href="">Novel Popular</a></li>
                <button className="ml-auto">
                    <i className="bx bx-filter"></i>
                    Filter
                </button>
            </ul>
        </div>
    )
}

export default Banner
