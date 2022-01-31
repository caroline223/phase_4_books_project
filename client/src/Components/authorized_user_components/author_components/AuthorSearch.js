import React from 'react'

const AuthorSearch = (props) => {

    return(
        <div className = "ui search searchBar">
        <div className="ui icon input">
            <input onChange={props.searchAuthors} placeholder="Last Name" className="prompt" />
            <i className="search icon" />
        </div>
    </div>
    )
}

export default AuthorSearch;