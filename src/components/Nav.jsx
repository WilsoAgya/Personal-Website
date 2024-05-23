import "/scss/Nav.scss";
import React from "react";

function Nav() {
    return (
        <nav class="navbar navbar-expand-md">
            <div class="container-xl">
                <h2 class="text-secondary fw-light mx-lg-3">WA</h2>
                <button type="button"
                        class="navbar-toggler" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                        >
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link active text-secondary">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-secondary">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-secondary">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-secondary">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            

        </nav>
    );
}
export default Nav;