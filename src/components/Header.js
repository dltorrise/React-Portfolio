import React from 'react';
import Navigation from './Navigation';


export default function Header({ currentPage, handlePageChange }) {
  return (
    <div style={{backgroundColor: "#2874A6"}} className="text-white">
      <h1 className="text-center display-1">Danielle Torrise Portfolio</h1>
<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}