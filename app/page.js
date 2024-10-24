'use client'; // Indique que ce composant est côté client

import React, { useState, useEffect } from 'react';
import SearchBar from "./component/searchBar";
import EventCard from "./component/eventCard";


export default function Home() {

  const [events, setEvents] = useState([]); // État pour stocker les événements

  const [loading, setLoading] = useState(true); // État pour gérer le chargement

  /* Fonction pour récupérer les événements 
  par défaut qui sont > ou = à la date d'aujourd'hui */

  const fetchDefaultEvents = async () => {
    try {
      const dateNow = new Date().toISOString().slice(0, 10); //format Date Y-m-d

      const res = await fetch(  
        `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?where=date_start%20%3E%3D%20${dateNow}&order_by=date_end%20Asc&limit=21`,
        { next: { revalidate: 120 } } // Mise à jour du cache après 2 minutes
      ); // requète par défaut

      const data = await res.json(); // On convertit les données en JSON
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds wait
      setEvents(data.results); // Met à jour l'état si records existe
      setLoading(false); // Désactivation de l'état de chargement

    } catch ( error ) {

      console.error('Erreur lors de la récupération des événements par défaut:', error);
      setEvents([]); // Définit un tableau vide en cas d'erreur
      setLoading(false); // Désactivation de l'état de chargement

    }
  };

  // Fonction pour rechercher des événements
  const searchEvents = async (query) => {

    setLoading(true); // Active l'état de chargement pendant la recherche

    const res = await fetch(
      `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=${query}`
    ); // requète de recherche

    const data = await res.json(); // On convertit les données en JSON
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds wait
    setEvents(data.records); // Met à jour les événements après la recherche
    setLoading(false); // Désactivation du chargement
  
  };

  // Utilisation de useEffect pour récupérer les événements par défaut au chargement de la page
   useEffect(() => {
    fetchDefaultEvents(); // Récupère les événements par défaut lorsque la page est chargée
  }, []); // [] signifie que cet effet ne s'exécute qu'une seule fois, lors du premier rendu


  return (
    <React.Fragment>
      <SearchBar onSearch={searchEvents} />
      {loading ? (
        <p style={{color:'#ce8460'}}>Loading...</p> // Message affiché pendant le chargement
      ) : (
        <div className="wrapper">
          {events && events.length > 0 ? (
            events.map((event) => (
              <EventCard 
              key={event.id === undefined ? event.fields.id : event.id} 
              event={event.id === undefined ? event.fields : event} /> // Affiche chaque événement
            ))
          ) : (
            <p>Aucun événement trouvé</p> // Message affiché si aucun événement n'est trouvé
          )}
        </div>
      )}
      </React.Fragment>
  );
}
