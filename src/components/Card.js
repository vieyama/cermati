import React from 'react'
function Card(props) {
    const cardData = props.dataHighlights
    return cardData.map((data, idx) => (
        <div className='col-lg-4 col-md-6 col-sm-6' key={idx}>
            <div>
                <div className='card mb-4' style={{ height:'230px' }}>
                    <div className='card-body'>
                        <span className='d-flex'>
                            <h5 className='card-title mr-auto'>{data.title}</h5>
                            {data.icon}
                        </span>
                        <p className='card-text'>{data.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default Card
