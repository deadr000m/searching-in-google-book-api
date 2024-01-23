import React from 'react';
import { BookOutlined } from '@ant-design/icons';

function Header() {
  return (
    <header className="app-head">
      <BookOutlined style={{ fontSize: '25px' }} />
      <h1>Book Cards</h1>
    </header>
  );
}

export default Header;
