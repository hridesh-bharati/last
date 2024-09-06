import React, { useState } from 'react';
import QueryForm from '../QueryFrom';

const ToastModel = ({ enquiryForm }) => {

  return (
    <div>
      <div className="modal fade m-0 p-0 myMOdal" id="helpMdl">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body bg-white text-white card">
              <QueryForm />
            </div>
          </div>
        </div>
      </div>
      <p className="m-0 p-0 px-2">
        <a href="#" data-bs-toggle="modal" data-bs-target="#helpMdl" onClick={enquiryForm}>Get Help</a>
      </p>
    </div>
  );
}

export default ToastModel;
