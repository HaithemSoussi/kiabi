import EventCard from '@/app/component/eventCard';


export default async function postPage({ params }) {
    const id = (await params).postId
    const response = await fetch(
    `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?where=id%3D${id}&limit=1`
    , { 
        next: {
            revalidate: 120 // mettre en cache pendant 2 mininute
        }
    }) // requète de recherche
    const event =  await response.json()// On convertit les données en JSON

    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 seconds wait
     
    return (
        <div> <EventCard key={id} event={event.results[0]} /></div>
    );
}