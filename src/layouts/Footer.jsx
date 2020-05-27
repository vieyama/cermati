import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className='footer mt-auto py-3'>
                <div className='container text-center'>
                    <span className='text-footer'>
                        &copy; {new Date().getFullYear()} Yovie Fesya Pratama. All rights reserved.
                    </span>
                </div>
            </footer>
        </div>
    )
}
