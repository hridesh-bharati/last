import React from "react";

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
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ border: 'none', outline: 'none', paddingLeft: '10px' }}
                
            />
        </div>
    </div>
);

export default SearchBox;
