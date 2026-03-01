import { Link } from "react-router-dom";

function TempleCard({ temple }) {
  return (

<div className="col-md-4 mb-4">

<div className="card shadow-lg h-100">

<img
src={temple.image}
className="card-img-top"
alt={temple.name}
style={{height:"220px",objectFit:"cover"}}
/>

<div className="card-body text-center">

<h5>{temple.name}</h5>

<p className="text-muted">{temple.location}</p>

<Link to={`/temple/${temple.id}`}>

<button className="btn btn-warning">
View Darshan Slots
</button>

</Link>

</div>

</div>

</div>

  );
}

export default TempleCard;