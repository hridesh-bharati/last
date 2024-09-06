import React from 'react';
import { Link } from 'react-router-dom';

// SearchBox component
const SearchBox = ({ searchQuery, setSearchQuery }) => (
    <div className="p-2">
        <div className="input-group border border-secondary">
            <span className="input-group-text border-0">
                <i className="bi bi-search"></i>
            </span>
            <input
                className="form-control px-2"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={({ target: { value } }) => setSearchQuery(value)}
                style={{ border: 'none', outline: 'none', paddingLeft: '10px' }}
            />
        </div>
    </div>
);

// CourseNav component
const CourseNav = ({ data, searchQuery, setSearchQuery }) => (
    <div className="container-fluid row text-center px-0 mx-0 my-3 py-2 border bg-white border-secondary-subtle myshadow" id="mainDiplomaContainer">
        <h1 className="fw-bolder py-1">
            {data} <font color="red"> Course </font>
        </h1>
        <div className="col-md-12 mx-0 px-0 d-flex justify-content-between">
            <small className="d-flex px-2">
                <Link to="/" className="nav-link">
                    <i className="fa fa-home"></i> /
                </Link>&nbsp; {data} Courses
            </small>
            <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
    </div>
);

export default CourseNav;
