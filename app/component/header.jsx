import Image from "next/image";

export default function Header() {
    return (
        <>
        <header className="header-top bg-grey justify-content-center">
        <div className="container">
          <div className="row align-items-center justify-content-center"> {/* Centering the row */}
            <div className="col-lg-12 col-md-12 text-center d-flex d-lg-flex align-items-center p-2">
              <div className="col-lg-1">
              <a className="navbar-brand" href="/">
                <Image
                  className="img-fluid"
                  src="/Paris_logo.svg"
                  alt="Logo of Paris - click to return to homepage"
                  width={80}
                  height={38}
                  priority
                />
              </a>
                </div>
              <div className=" col-lg-10 ms-2 text-center" 
              style ={{ fontWeight:"bold", color:"rgb(7, 31, 50)", fontSize: "2rem"}}
              >Que Faire à Paris ? - Evènements et activités</div>
            </div>
          </div>
        </div>
      </header>
      </>
    )
}