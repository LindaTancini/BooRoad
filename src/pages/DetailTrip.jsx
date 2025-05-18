import { useParams } from "react-router-dom";
import { useContext } from "react";
import TripContext from "../context/TripContext";

function TripDetails() {
  const { id } = useParams();
  const { ArrayTrip } = useContext(TripContext);

  return (
    <div className="container my-5">
      {ArrayTrip.map((viaggio) =>
        viaggio.id.toString() === id ? (
          <div key={viaggio.id} className="card shadow">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={`/public/${viaggio.image}`}
                  alt={viaggio.destination}
                  className="img-fluid rounded-start h-100 object-fit-cover"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title">{viaggio.destination}</h2>
                  <p className="card-text">
                    <strong>Operatore:</strong> {viaggio.operator}
                  </p>
                  <p className="card-text">
                    <strong>Stato:</strong> {viaggio.status}
                  </p>
                  <p className="card-text">
                    <strong>Partenza:</strong> {viaggio.start_date}
                  </p>
                  <p className="card-text">
                    <strong>Ritorno:</strong> {viaggio.end_date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
export default TripDetails;
