
import { useState } from "react";
import axios from "axios";

const CLOUD_NAME = "dnjr5uuxs"; 
const UPLOAD_PRESET = "ecom_upload";


export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [formData, setFormData] = useState({
        product: "",
        price: "",
        description: "",
        imageUrl: "",
        category: "",
    });


  const handleSubmit = async (e) =>{
     e.preventDefault();

     const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', UPLOAD_PRESET);
      try { 
    const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    formData
  );

  console.log('upload image successfully',response.data.secure_url);
  
  setImageUrl(response.data.secure_url)
  const uploadImageUrl = response.data.secure_url;

  const submitData = {
    ...formData,
    imageUrl: uploadImageUrl,
  }

   const response2 = await axios.post("http://localhost:5000/api/product",{
        submitData
    })

    const result = await response2.data;
    console.log(result.message);
  } catch (error) {
    console.log("error storing image", error);
  }
}

  return (<div>
    <h1>Image Upload</h1>

    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4">
           <div class="mb-3">
    <label class="form-label">Product Name</label>
    <input type="text" class="form-control" value={formData.product} onChange={(e)=>setFormData({...formData, product:e.target.value})}  />
  </div>
        </div>
         <div className="col-md-4">
           <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" class="form-control" value={formData.description} onChange={(e)=>setFormData({...formData, description:e.target.value})} />
  </div>
        </div>
         <div className="col-md-4">
           <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="text" class="form-control" value={formData.price} onChange={(e)=>setFormData({...formData, price:e.target.value})} />
  </div>
        </div>
         <div className="col-md-4">
           <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Image Upload</label>
<input type="file" onChange={(e) => setImage(e.target.files[0])} />  </div>
        </div>
         <div className="col-md-4">
           <div class="mb-3">
            <select class="form-select" value={formData.category} onChange={(e)=>setFormData({...formData, category:e.target.value})} aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="Women clothes">Women Clothes</option>
  <option value="Mens clothes">Men clothes</option>
  <option value="jewelery">Jewelery</option>
</select>
    </div>
        </div>
      </div>
      
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>


    {imageUrl && (
      <div>
        <h2>Uploaded Image:</h2>
        <img src={imageUrl} alt="Uploaded" style={{ width: "200px", height: "200px" }} />
      </div>
    )}
  </div>);

};
    


 