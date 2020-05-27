import React, { useState } from 'react'

export default function GetLatestUpdate() {
    const [display, setDisplay] = useState(true)

    const onClick = () => {
        setDisplay(false)
    }
    return (
        <div className='get-latest' style={{ display: display ? '' : 'none' }}>
            <div className='card'>
                <div className='colse ml-auto'>
                    {' '}
                    <button onClick={onClick} className='btn-close'>
                        {' '}
                        x{' '}
                    </button>{' '}
                </div>
                <div className='card-title'>
                    Get latest updates in web technologies
                </div>
                <div className='card-text'>
                    I write articles related to web technologies, such as design
                    trends, development tools, UI/UX case studies and reviews,
                    and more. Sign up to my newsletter to get them all.
                </div>
                <br />
                <div>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='form-control'
                    />
                    <button className='btn-count'>Count me in!</button>
                </div>
            </div>
        </div>
    )
}
