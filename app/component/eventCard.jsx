import Link from "next/link";

export default function eventCard({ event }){

    const { id, title, cover_url, address_name, date_start } = event // Extraction des informations nécessaires de l'événement
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <>
        <div className="slider-item-content ">
            <div className="post-thumb mb-4" style={{margin:"0px 5px"}}>
                <Link href={`/posts/${id}`}>
                <img
                  className="w-full"
                  src={cover_url}
                  alt={title}
                />
                </Link>
            </div>

            <div className="slider-post-content">
            <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">
                {address_name}
                </span>
                <h3 className="post-title mt-1">
                    <Link href={`/posts/${id}`}>{title}</Link>
                </h3>
                <span className=" text-muted  text-capitalize"> 
                    {new Date(date_start).toLocaleDateString('fr-FR', options)}
                </span>
            </div>
        </div>
        </>
    );
}