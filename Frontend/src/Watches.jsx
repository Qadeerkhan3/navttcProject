
import { useNavigate } from "react-router-dom";
export default function Watches() {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <Cards src="https://delawrence.pk/cdn/shop/files/IMG_8594.jpg?v=1703146886" title="Omega Watch"
          text="this is the brand of Omega's watch." />
        </div>

        <div className="col-md-4">
        <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFOFB7tAo0FmAwLkkjq7cepB4ym-gS4pHRYDNdZCFz3z8Dn9PzszVKgepB2KhyMYEf6A&usqp=CAU"
         title="Rolex Watch"
          text="this the brand of rolex's watch." />
        </div>

        <div className="col-md-4">
        <Cards src="https://m.media-amazon.com/images/I/71-Gi5+E2US.AC_UY900.jpg" title="Casio Watch"
          text="this is the brand of casio's watch." />
        </div>
      </div>
      <button style={{backgroundColor:'black', color:'white', margin:'1rem', padding:'1rem', border:'none', borderRadius:'.5rem', fontSize:'1rem', cursor:'pointer'}} onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

function Cards({src, title, text}){
return <div className="card">
<img src={src}
  className="card-img-top"alt="watch"/>
<div className="card-body">
  <h5 className="card-title">{title}</h5>
  <p className="card-text">{text}</p>
  <a href="#" className="btn btn-primary"> Order Now</a>
</div>
</div>
}
