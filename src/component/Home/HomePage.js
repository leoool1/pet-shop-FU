import videoHomePage from '../../assests/video-homepage.mp4'

const HomePage = (props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomePage}
                        type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className="title-h2">Siêu Thị Thú Cưng </div>
                <div className="title-h1">FU PET SHOP</div>
                <div className="title-btn"><button>Liên hệ ngay</button></div>
            </div>
        </div>
    )
};

export default HomePage;