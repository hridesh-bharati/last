import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getPhotos, pushPhoto } from "../../../../../api/adminApi/api";

const ProgramPictures = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetchImages();
    }, []);
    const clrImageForm = ()=>{
        setName('');
        setImage('');
        setCategory('');
        setUrl('');
    }
    const fetchImages = async () => {
        try {
            const rspns = await getPhotos(undefined);
            rspns.ackbool==1 && setImages(rspns.message);
        } catch (error) {
            throw error;
        }
    };
    const uploadPhoto = async () => {
        if (!image) {
            toast.error("Please select an image.");
            return;
        }
        try {
            setIsLoading(true);
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "hridesh99!");
            data.append("cloud_name", "draowpiml");
            const response = await fetch('https://api.cloudinary.com/v1_1/draowpiml/image/upload', {
                method: 'POST',
                body: data
            });
            if (!response.ok) {
                throw new Error("Failed to upload image.");
            }
            const responseData = await response.json();
            setUrl(responseData.url);
            toast.success("Image uploaded successfully.");
            fetchImages();
        } catch (error) {
            toast.error("Error uploading image: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const uploadToServer = async () => {
        if (!name || !category || !url) {
            toast.error("Please fill in all fields.");
            return;
        }
        try {
            setIsLoading(true);
            const rspns = await pushPhoto(name, category, url);
            if (rspns.ackbool == 1) {
                toast.success(rspns.message);
                clrImageForm();
                fetchImages();
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="row m-auto text-center pb-5">
            <div className="container text-center border-bottom border-secondary py-3 h2 fw-bolder text-uppercase" style={{ color: 'white', backgroundColor: '#012C5' }}>
                Upload <font color="red">Gallery Images</font>
            </div>
            <div className="container col-md-5 my-lg-5">
                <div className="mb-3 input-group">
                    <input type="file" name='file' className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                    <button type='button' className='btn btn-warning' onClick={uploadPhoto} disabled={isLoading}>
                        <i className="bi bi-upload"></i> Upload
                    </button>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Photo Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={uploadToServer} disabled={isLoading}>
                        {isLoading ? "Uploading..." : "Push"}
                    </button>
                </div>
            </div>                                                                                  
        </div>
    );
};
export default ProgramPictures;
                                                                    