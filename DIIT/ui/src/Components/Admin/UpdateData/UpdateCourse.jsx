import React, { useState, useEffect } from 'react';
import { getAllNotice, deleteNotice, updateNotice } from '../../../api/adminApi/api';

export default function UpdateCourse() {
    const [showInput, setShowInput] = useState(false);
    const [id, setId] = useState('');
    const [notice, setNotice] = useState([]);
    const [title, setTitle] = useState('');
    const [nMessage, setNewMessage] = useState('');

    // Function to fetch notices
    const fetchNotice = async () => {
        try {
            const rspns = await getAllNotice();
            if (rspns.ackbool === 1) {
                setNotice(rspns.message);
            } else {
                console.error('Failed to fetch notices:', rspns.message);
            }
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    // Fetch notices on component mount
    useEffect(() => {
        fetchNotice();
    }, []);

    // Handle update notice
    const handleUpdate = async () => {
        try {
            const response = await updateNotice(id, { title, nMessage });
            if (response.ackbool === 1) {
                setNotice(notice.map(noticeItem =>
                    noticeItem._id === id ? { ...noticeItem, title, nMessage } : noticeItem
                ));
                setShowInput(false);
            } else {
                console.error('Failed to update notice:', response.message);
            }
        } catch (error) {
            console.error('Error updating notice:', error);
        }
    };

    // Handle delete notice and reload
    const handleDeleteAndReload = async (noticeId) => {
        try {
            const response = await deleteNotice(noticeId);
            if (response.ackbool === 1) {
                // Delete was successful, now reload notices
                fetchNotice();
            } else {
                console.error('Failed to delete notice:', response.message);
            }
        } catch (error) {
            console.error('Error deleting notice:', error);
        }
    };

    return (
        <>
            <table className='table table-sm table-bordered border-primary mx-0 px-0 table-sm small diplomaTable'>
                <thead className='my-row-color'>
                    <tr className="table-dark">
                        <th>Title</th>
                        <th colSpan={2}>Description</th>
                        <th>
                            Action
                            <button className="btn btn-sm  p-0 ms-2" onClick={fetchNotice}>
                                <i className="bi bi-arrow-clockwise text-white ms-2"></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className='my-row-color'>
                    {notice.map((noticeItem) => (
                        <tr key={noticeItem._id}>
                            <td className='fw-bold text-primary'>{noticeItem.title}</td>
                            <td>{noticeItem.nMessage}</td>
                            <td>
                                <button
                                    className="btn btn-primary btn-sm m-0 p-0 px-1"
                                    onClick={() => {
                                        setTitle(noticeItem.title);
                                        setNewMessage(noticeItem.nMessage);
                                        setId(noticeItem._id);
                                        setShowInput(true);
                                    }}
                                >
                                    <i className="bi bi-pencil m-0 p-0"></i>
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn text-danger btn-sm m-0 p-0 px-1"
                                    onClick={() => handleDeleteAndReload(noticeItem._id)}
                                >
                                    <i className="bi bi-trash3-fill m-0 p-0"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showInput && (
                <div className='py-2'>
                    <input
                        type="text"
                        className='form-control my-2'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='New Title'
                    />
                    <textarea
                        className='form-control my-2'
                        value={nMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder='New Description'
                    />
                    <button
                        className="btn btn-primary"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </div>
            )}
        </>
    );
}
