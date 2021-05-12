import React from 'react'
// import './footer.css'
export const Footer = () => {
    let footerStyle={
        top: "90vh",
        position: "relative",
        width: "100%",
        border:"5px solid green"

        
    }
    return (
        <div>
            <footer className="bg-dark text-light py-3" style=
            {footerStyle}>
                <p className="text-center1">
                Copyright &copy; MyTO-DoList.com
                </p>
            </footer>
        </div>
    )
}
