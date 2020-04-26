import React from 'react';

const BookDetails = (data) => {
    console.log(data.data)
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{data.data.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data.data.genre}</h6>
                <p className="card-text">
                    Author : {data.data.author.name} <br />
                    Age : {data.data.author.age}
                </p>                
            </div>
        </div>
    );
}

export default BookDetails;