'use client'; // Indique que ce composant est côté client

import { useState } from "react"; // On utilise useState pour gérer l'état local

export default function SearchBar({ onSearch }) {

    const [query, setQuery] = useState(''); // Stockage de la requête de recherche

    const handleSearch = async (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div style={{display:"flex", justifyContent:"center", margin:"10px", alignItems:"center"}}>
        <form onSubmit={handleSearch} className="w-500 form-control form-group form-row align-items-center mb-1">
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Mise à jour de la requête de recherche
            placeholder="Rechercher des événements..."
            className=" p-2 "
            style={{width:"80%"}}
            />
            <button type="submit" className="btn btn-dark">
            Rechercher
            </button>
        </form>
      </div>
    );
}