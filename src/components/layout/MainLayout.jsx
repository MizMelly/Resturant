import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  const [navHeight, setNavHeight] = useState(80); // fallback
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    // Optional: listen to resize
    const handleResize = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden select-none cursor-default flex flex-col">
      <Navbar ref={navRef} />  {/* ← forward ref if needed */}

      <main 
        className="grow"
        style={{ paddingTop: `${navHeight}px` }}  // ← dynamic!
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}