import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class HomeCarousel extends React.Component {
   render() {
        return (
         <Carousel id="home-carousel">
         <div>
             <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="image 1" />
             {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
             <img src="https://images.unsplash.com/photo-1587162147120-430be9b33be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="image 2"/>
             {/* <p className="legend">Legend 2</p> */}
         </div>
         <div>
             <img src="https://images.unsplash.com/photo-1572984128466-7190c176569b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="image 3"/>
             {/* <p className="legend">Legend 3</p> */}
         </div>
        </Carousel>
      );
   }
};

export default HomeCarousel