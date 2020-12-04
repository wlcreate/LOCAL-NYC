import React from 'react';

const SpotsSearch = (props) => {

    let handleChange = (evt) => {
        // logic for updating the search term in the SpotsContainer component's state
        props.changeSearchTerm(evt.target.value)
      }

    return(
        <>
        <form>
            <p id="search-name-label"><strong>Search by name</strong></p>
            <input id="search-name-input" type="text" value={props.searchTerm} onChange={handleChange}/>
        </form>
        </>
    )
}

export default SpotsSearch 