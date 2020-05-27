import React from 'react'
import { Cookie } from '../components'

export default function Header() {
    return (
        <React.Fragment>
            <Cookie />
            <div className='header'>
                <nav
                    className='navbar navbar-expand-lg navbar-light py-3'
                    id='mainNav'
                >
                    <div className='container-fluid'>
                        <img src='/logo.png' className='logo' alt='' />
                    </div>
                </nav>
                <div className='container h-75'>
                    <div className='row h-100 align-items-center justify-content-center text-center'>
                        <div className='col-lg-10 align-self-end'>
                            <h1 className='text-uppercase text-white font-weight-bold'>
                                Hello! I’m Yovie Fesya Pratama.
                            </h1>
                            <h5 className='text-uppercase text-white font-weight-bold'>
                                Consult, Design, and Develop Websites
                            </h5>
                        </div>
                        <div className='col-lg-8 align-self-baseline'>
                            <p className='text-white font-weight-light mb-4'>
                                Have something great in mind? Feel free to
                                contact me. <br /> I'll help you to make it
                                happen.
                            </p>
                            <button className='btn btn-header js-scroll-trigger'>
                                Let's Make Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
