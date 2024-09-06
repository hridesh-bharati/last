import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { deletePhoto, getPhotos } from "../../../../../api/adminApi/api";

const ProgramPictures = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const rspns = await getPhotos('undefined');
      console.log(rspns);
      setImages(rspns.message);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const deleteImage = async (_id) => {
    try {
      setIsLoading(true);
      const rspns = await deletePhoto(_id);
      if (rspns.ackbool === 1) {  // Changed == to === for strict equality check
        toast.success('Deleted');
        setImages(prevImages => prevImages.filter(img => img._id !== _id));
      } else {
        toast.error('Failed to delete image');
      }
    } catch (error) {
      // console.error("Failed to delete image:", error);
      toast.error('An error occurred while deleting the image');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container text-center py-3 h2 fw-bolder text-uppercase" style={{ color: 'white', backgroundColor: '#012C5' }}>
        Delete <font color="red">Gallery Images</font>
      </div>

      <div className="container pb-5">
        <div className="row gallaryImg">
          {images.map((image, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3">
                <img src={image.url} className="card-img-top" alt={image.name} />
                <div className="card-body text-start p-0 m-0 px-1">
                 <div className="d-flex justify-content-between align-items-center">
                  <h6 className="card-title p-0 m-0">{image.name}</h6>
                  <button
                    className="btn btn-sm small text-danger "
                    onClick={() => deleteImage(image._id)}
                    disabled={isLoading}>

                    {isLoading ? 'Deleting...' : <i className="bi bi-trash3-fill"></i>}
                  </button>
                 </div>

                  <p className="card-text small text-primary fs-6 p-0 m-0">
                    <small>{image.category}</small>

                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramPictures;
