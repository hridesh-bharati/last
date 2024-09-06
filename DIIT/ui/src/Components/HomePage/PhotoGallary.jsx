import React, { useState, useEffect } from 'react';
import { getPhotos } from '../../api/adminApi/api';

const ProgramPictures = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getPhotos()
        setImages(response.message || []);
      } catch (error) {
        setError('Failed to load images');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="container-fluid text-center py-3 MT3 h2 fw-bolder text-uppercase">
        Image Gallery
      </div>
      <div className="container-fluid pb-5">
        {images.length === 0 ? (
          <p>No images available.</p>
        ) : (
          <div className="row gallaryImg">
            {images.map((image, index) => (
              <div className="col-md-3" key={index}>
                <div className="card  mb-3 p-1 myshadow" id='photoCard'>
                  <img src={image.url} className="card-img-top" alt={image.name || 'Image'} />
                  <div className="card-body text-start p-0 m-0 px-1">
                    <h6 className="card-title p-0 m-0">{image.name || 'No title'}</h6>
                    <p className="card-text small text-primary fs-6 p-0 m-0">
                      <small>{image.category || 'No category'}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramPictures;
