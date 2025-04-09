import "./Homepage.css"

function Homepage() {
  return (
    <>
        <div className="homepage-container">
            <header className="header">
                <div className="logo">
                <span className="logo-dot"></span>
                <span className="logo-text">Taxify</span>
                </div>
                <nav className="nav">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Features</a>
                <a href="#" className="nav-link">Contacts</a>
                </nav>
            </header>
            <main className="main">
            <h1 className="headline">Enhance your financial control <br /> with <span className="highlight">Taxify</span></h1>
            {/* <span className="arrow">→</span> */}
            <div className="phone">
                <div className="phone-notch">
                    <div className="phone-flash"></div>
                </div>
            </div>
            <div className="card history-card">
                <div className="card-header">
                    <span className="card-dot"></span>
                    <span className="card-title">History</span>
                </div>
                <div className="history-options">
                    <p>Daily</p>
                    <p>Weekly</p>
                    <p>Monthly</p>
                </div>
                <div className="history-radios">
                    <div className="white-circle"></div>
                    <div className="white-circle"></div>
                </div>
            </div>
                <div className="card income-card">
                <div className="card-header">
                    <span className="card-dot"></span>
                    <span className="card-title">Income</span>
                </div>
                <div className="card-content">
                    <p>XXXXXXX</p>
                    <button className="manage-button">Manage</button>
                </div>
            </div>
        </main>
        </div>
    </>
  )
}

export default Homepage