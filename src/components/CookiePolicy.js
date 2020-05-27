import React, { useState } from 'react'

export default function CookiePolicy() {
    const [displayCookie, setDisplayCookie] = useState(true);

    const onClick = () => {
        setDisplayCookie(false)
    }
    return (
        <div className='cookie' style={{ display: displayCookie ? '' : 'none' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 offset-md-1'>
                        By accessing and using this website, you acknowledge
                        that you have read and understand our{' '}
                        <a href='/'>Cookie Policy</a>,{' '}
                        <a href='/'>Privacy Policy</a>, and our{' '}
                        <a href='/'>Terms of Service</a>.
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={onClick}>
                            Got it
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
