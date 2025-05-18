import { useContext } from "react";
import TripContext from "../context/TripContext";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  console.log("homepage");

  const { ArrayTrip } = useContext(TripContext);

  console.log(ArrayTrip);

  return (
    <>
      <div className="container my-5">
        <h1 className="mb-4">Viaggi in programma:</h1>
        {ArrayTrip && ArrayTrip.length > 0 ? (
          ArrayTrip.map((e) => (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={e.image}
                    className="img-fluid rounded-start h-100 object-fit-cover"
                    alt={e.destination}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{e.destination}</h3>
                    <p className="card-text">Accompagnatore: {e.operator}</p>
                    <div>
                      <p className="mb-0">
                        <strong>Partenza:</strong> 10/06/2025
                      </p>
                      <p className="mb-0">
                        <strong>Ritorno:</strong> 17/06/2025
                      </p>
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-3">
                      <Link
                        to={`/trip/${e.id}`}
                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                      >
                        <i className="bi bi-info-circle"></i>
                        <span>Dettagli Viaggio</span>
                      </Link>

                      <Link
                        to={`/user/${e.id}`}
                        className="btn btn-outline-secondary d-flex align-items-center gap-2"
                      >
                        <i className="bi bi-people-fill"></i>
                        <span>Dettagli dei Partecipanti</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>Nessun Viaggio disponibile</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
