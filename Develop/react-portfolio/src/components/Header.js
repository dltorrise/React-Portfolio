import React from 'react';
import Navigation from './Navigation';


export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1>Danielle Torrise Portfolio</h1>
<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}