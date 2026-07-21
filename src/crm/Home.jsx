export default function Home(){
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left Menu */}
                <div className="col-md-3 bg-dark text-white vh-100 p-3">
                    <h5>
                        Megha Gas Pulse
                    </h5>            
                    <ul className="nav flex-column mt-4">
                        <li className="nav-item mb-3">
                            Dashboard
                        </li>
                        <li className="nav-item mb-3">
                            Users
                        </li>
                        <li className="nav-item mb-3">
                            Reports
                        </li>
                        <li className="nav-item mb-3">
                            Settings
                        </li>
                    </ul>
                </div>
                {/* Content */}
                <div className="col-md-9 p-4">    
                    <h2>
                        Welcome to the Application
                    </h2>    
                    <p className="text-muted">
                        You have successfully logged in.
                    </p>
                </div>
            </div>
        </div>
    )
}