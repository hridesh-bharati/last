import React, { useState } from 'react';
import SendQuestions from './questionPaper/SendQuestions';

const Sendmcq = () => {


    return (
        <div className="row justify-content-center">
            <div className="col-md-12 pb-5">
                <SendQuestions />
            </div>
        </div>
    );
};

export default Sendmcq;
