import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "../assets/css/theme.css";
import "../assets/css/navbar.css";
import "../assets/css/style.css";

export default function MainLayout({ children, pageTitle = "Dashboard" }) {
    return (
        <div className="wrapper position-relative">
            {/* Header */}
            <Header/>
            {/* Navigation */}
            <Navigation />
            <div className="content-page ps-0">
                <div className="content">
                    {/* Page Header / Breadcrumb */}
                    <div className="d-flex justify-content-between p-3 bg-secondary-subtle">
                        <h3 className="mb-0 fs-5 fw-bold">
                            {pageTitle}
                        </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    Home
                                </li>
                                <li className="breadcrumb-item active">
                                    {pageTitle}
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Content */}
                    <div className="container-fluid text-dark">
                        <div className="content pt-2">
                            {children}
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}