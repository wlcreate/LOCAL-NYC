import React from 'react';
import Header from './Header.jsx';
import HomeCarousel from './HomeCarousel.jsx';


class Home extends React.Component {
    render(){
        return(
            <div>
                <Header />
                {/* <img id="home-image" src={require('./Home_Image.png')}  alt="Home Image"/> */}
                <HomeCarousel />
            </div>
            
        )
    }
}

export default Home;