import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async'

function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <Helmet>
                <title>404 - chatapp</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <Link to="/" className="text-md font-semibold bg-yellow-400 text-blue-900 px-4 py-2  rounded-lg hover:bg-yellow-500">Go back to Home</Link>
            </div>
        </div>
    )
}

export default NotFoundPage