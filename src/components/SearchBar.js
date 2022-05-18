import React, { useState } from 'react'

const SearchBar = ({handleSearch}) => {
    const [searchText, setSearchText] = useState()
    return (

        <form class='mt-2' onSubmit={(e)=> e.preventDefault()}>
            <div class='form-row mb-5'>
                <div class='col-12'>
                    <input onChange={(e)=> {
                        setSearchText(e.target.value)}} 
                        onKeyUp={()=>handleSearch(searchText)} class="form-control" type="search" placeholder="Search a movie" value={searchText}/>
                </div>

            </div>
        </form>
    )
}

export default SearchBar