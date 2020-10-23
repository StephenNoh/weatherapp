import React from 'react'

const Search = ({ onKeyPress, onChange, value }) => {
    return (
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Give Rocky a city:"
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
          />
        </div>
    )
}

export default Search