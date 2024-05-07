import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-dark text-light position-fixed vh-100 sidebar">
            <div className="p-4">
                <ul className="list-unstyled ">
                    <li className="mb-3"><Link to="/" className="text-light text-decoration-none"><i data-feather="home"></i> Inicio</Link></li>
                    <li className="mb-3"><Link to="/perfil" className="text-light text-decoration-none"><i data-feather="user"></i> Perfil</Link></li>
                    <li className="mb-3"><Link to="/progreso" className="text-light text-decoration-none"><i data-feather="star"></i> Progreso</Link></li>
                    <li className="mb-3"><Link to="/desafio" className="text-light text-decoration-none"><i data-feather="award"></i> Desafío</Link></li>
                    <li className="mb-3"><Link to="/ayuda" className="text-light text-decoration-none"><i data-feather="help-circle"></i> Ayuda</Link></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
