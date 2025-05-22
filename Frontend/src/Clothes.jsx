export default function Clothes(){
    return (
        <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <Card src="https://www.makfashion.com/cdn/shop/files/3N8A4659-ok_a3e94c96-4581-4a10-896d-b56ef2afcf05.webp?v=1699891912&width=533" title="khadi"
          text="this is the brand of khadi's clothes" />
        </div>

        <div className="col-md-4">
          <Card src="https://www.reiss.com/cms/resource/blob/976838/78c7ee422947a53d786b8deb107425fe/nybg-1-data.jpg" title="J."
          text="this is the brand of J.'s clothes" />
        </div>

        <div className="col-md-4">
          <Card src="https://roschic.com/cdn/shop/files/b29759dd835fdac9a5e9106e938e0d4f_4e2fd3cf-72b1-422c-b553-8fa049ccd51e_600x.jpg?v=1715079293" title="Saphire"
          text="this is the brand of Saphire's clothes" />
        </div>
      </div>
    </div>
        );
       
}

function Card({src, title, text}){
  return <div className="card">
  <img src={src}
    className="card-img-top"alt={"watch"}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href="#" className="btn btn-primary"> Order Now</a>
  </div>
</div>
}