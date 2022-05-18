import React from 'react'

const MovieList = ({id, name, rating, overview, imageURL, deleteHandler}) => {
    return (
            <div className="col-lg-4 ">
                <div className="card mb-4 shadow-lg bg-body" />
                    <img src={imageURL} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{overview}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={()=>deleteHandler(id)} type='button' className="btn btn-md btn-outline-danger">Delete</button>
                            <h2><span className={rating >= 8 ? "badge bg-success" : rating >= 6 ? "badge bg-warning" : "badge bg-danger"}>{rating}</span></h2>
                        </div>   
                    </div>
                </div>
      
    )
}

export default MovieList