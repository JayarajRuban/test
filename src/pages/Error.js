import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <h1 className="error-title">The page you are looking for doesn't exist</h1>
            <button className="errorpage-btn"><Link to="/">Home</Link></button>
        </div>
    )
}

export default ErrorPage
