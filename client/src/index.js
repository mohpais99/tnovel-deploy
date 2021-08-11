import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Routes';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// boxicon
import 'boxicons/dist/boxicons';
import 'boxicons/css/boxicons.min.css';
// Swipper assets
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'assets/styles/style.css';
import 'assets/styles/font.css';
import 'react-toastify/dist/ReactToastify.css'

import { AuthProvider } from 'helpers/Context';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


ReactDOM.render(
  <AuthProvider>
    <Routes />
  </AuthProvider>,
  document.getElementById('root')
);
