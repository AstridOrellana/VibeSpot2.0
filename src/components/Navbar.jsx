import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleLinkClick = () => {
        setNav(false); // Cierra el menú al hacer clic en un enlace
    };

    return (
        <div className='bg-[#9E07E6] text-white'>
            {/* Contenedor del Navbar */}
            <div className='max-w-[1240px] mx-auto flex justify-between items-center h-24 px-4'>
                {/* Logo */}
                <h1 className='text-3xl font-bold text-black'>VibeSpot</h1>

                {/* Navbar links para pantallas grandes */}
                <ul className='hidden md:flex'>
                    <li className="p-4">
                        <Link className='nav-link active' to="/playlists" onClick={handleLinkClick}>
                            Playlists
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className='nav-link active' to="/artists" onClick={handleLinkClick}>
                            Artistas
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className='nav-link active' to="/registro" onClick={handleLinkClick}>
                            Registrarse
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className='nav-link active' to="/login" onClick={handleLinkClick}>
                            Log in
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link className='nav-link active' to="/privacidad" onClick={handleLinkClick}>
                            Privacidad
                        </Link>
                    </li>
                </ul>

                {/* Icono del menú desplegable (para pantallas pequeñas) */}
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>
            </div>

            {/* Menú desplegable para pantallas pequeñas */}
            <div className={!nav ? 'fixed left-[-100%] top-0 w-[60%] h-full bg-[#9E07E6] border-r border-white-900 ease-in-out duration-500' : 'fixed left-0 top-0 w-[60%] h-full bg-[#9E07E6] border-r border-white-900 ease-in-out duration-500'}>
                {/* Logo en el menú móvil */}
                <h1 className='w-full text-3xl font-bold text-[#00c892] m-4'>VibeSpot</h1>

                {/* Enlaces en el menú móvil */}
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-white-600'>
                        <Link className='nav-link active' to="/home" onClick={handleLinkClick}>
                            Home
                        </Link>
                    </li>
                    <li className='p-4 border-b border-white-600'>
                        <Link className='nav-link active' to="/registro" onClick={handleLinkClick}>
                            Registrarse
                        </Link>
                    </li>
                    <li className='p-4 border-b border-white-600'>
                        <Link className='nav-link active' to="/login" onClick={handleLinkClick}>
                            Login
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link className='nav-link active' to="/privacidad" onClick={handleLinkClick}>
                            Privacidad
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

