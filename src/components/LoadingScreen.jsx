import './components_css/LoadingScreen.css';

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="loading-container">
                <div className="spinner"></div>
                <h1>Loading</h1>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>Please wait while we load your content...</p>
            </div>
        </div>
    );
}

export default LoadingScreen;
