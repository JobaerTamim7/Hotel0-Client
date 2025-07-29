import { useNavigate } from "react-router";

export default function RoomCard({ id, image, title, description, status }) {
   const navigate = useNavigate();
  
    return (
    <div className="card bg-base-100 w-96 shadow-[0px_0px_4px] shadow-white" onClick={() => navigate(`/rooms/${id}`)}>
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{status}</div>
        </div>
      </div>
    </div>
  );
}
