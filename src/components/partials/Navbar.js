import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className='container'>
                    <div className="random-link">
                        <a href="/">
                            <p>random</p>
                            <span className="material-icons">
                                autorenew
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;