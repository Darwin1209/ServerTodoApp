import React from 'react';
import './Search.css';

class Search extends React.Component {
    
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState ({ term });
        this.props.onSearchChange(term);
    }

    render () {
 
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="поиск"
                    value={this.state.term}
                    onChange={this.onSearchChange}/>
        );
    }
};

export default Search;
