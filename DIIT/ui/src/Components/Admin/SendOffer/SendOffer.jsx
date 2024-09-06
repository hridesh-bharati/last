import React, { useState, useEffect } from 'react';
import { pushNotice } from '../../../api/adminApi/api';
import { toast } from 'react-toastify';
const SendOffer = () => {
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rspns = await pushNotice(caption, message);
      if (rspns.ackbool == 1) {
        toast.success(rspns.message);
        setCaption('');
        setMessage('');
        setError('');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="text-center">
        <h1 className="fw-bolder text-gray-900 mb-4 text-primary">Notice form</h1>
      </div>
      <div className="offersTitle">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Caption of message....*"
            value={caption}
            onChange={(e) => setCaption(e.target.value)} />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Type notice message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
      </div>
      <div className="text-center my-2">
        <button type="submit" className="small btn btn-primary">Push</button>
      </div>
    </form>
  );
};

export default SendOffer;
