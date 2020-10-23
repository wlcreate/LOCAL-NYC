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
                <div id="about-us">
                    <h2>About Us</h2>
                    <h3>Wanna know where the locals go?</h3>
                    <p>So do we! The creators of this app currently live in NYC and are always ready to explore their home. But as many know, NYC is a HUGE city that is constantly changing. Like other locals, we don't want to go to the tourist spots; in fact we actively avoid those areas as much as possible (looking at you Times Square). That being said, in a city so big, how do we find new spots? How do we learn about other local spots to give our business to?</p>
                    <p>No need to fear, just like Spiderman, The LOCAL NYC is here to fight for us little guys!</p>
                    <p>To use the LOCAL NYC:</p>
                    <ol>
                        <li>Log in (or register if you don't have an account)</li>
                        <li>After you log in you will be brought to your profile page where you can edit your profile and see all of your recommendations</li>
                        <li>To start checking out other spots, click "Neighborhoods" on the navigation bar where you can see different neighborhoods in NYC separated by borough</li>
                        <li>Once you click on a neighborhood you can see all the spots other locals have added</li>
                            <ul>
                                <li>Search for a specific spot by name by typing into the search bar</li>
                                <li>Filter spots by a specific category</li>
                                <li>Don't see a spot listed? Click "Add a Spot"!</li>
                            </ul>
                        <li>Once you click on a Spot you can see information about a Spot and what locals recommend at the Spot</li>
                            <ul>
                                <li>You can "Add a Recommendation" and fill out what you recommend what you like about this spot</li>
                                <li>You can also delete your recommendation if you made a mistake!</li>
                            </ul>
                        <li>Once you are finished you can log out!</li>
                    </ol>
                </div>
            </div>
            
        )
    }
}

export default Home;