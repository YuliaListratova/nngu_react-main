import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.page_header}>
      <ul className={style.header_menu}>
        <li>Главная</li>
        <li>О нас</li>
        <li>Галерея</li>
        <li>Новости</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default Header;
