
export default function Shoes(){
    return  <div className="container mt-4">
    <div className="row">
      <div className="col-md-4">
          <Cards src="https://trex.com.pk/uploads/trex/tLC0IgGTRYQ4P0wdOo2d97gdH6S0iPucavRTMFru.jpg"
          title="Best Shoes" text="The best shoes in the world here. come and buy this in easy way and cheap price." />
      </div>

      <div className="col-md-4">
        <Cards src="https://trex.com.pk/uploads/trex/XQHisAqTrbVoYJxaw7jO1Vv0GW6ih1KzmE9xFUo6.jpg"
          title="Shoes" text="The best shoes in the world here. come and buy this in easy way and cheap price." />
      </div>

      <div className="col-md-4">
        <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4Ql5eq_9TF7dD9h-Yv7K5E1wOXKzxOeUqyt4mHBw6sgc8amkEFy6FgkmbAmWoyYkd98&usqp=CAU"
          title="Shoes" text="The best shoes in the world here. come and buy this in easy way and cheap price." />
      </div>
    </div>
  </div>
}

function Cards({src, title, text}){
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