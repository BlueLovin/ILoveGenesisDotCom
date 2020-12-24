import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function RaccoonImage() {
  return (
    <div class="text-center w-50 container">
        <Carousel infiniteLoop useKeyboardArrows autoPlay dynamicHeight > 
            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon1.jpg").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon2.webp").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon3.webp").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon4.webp").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon5.jpg").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon6.webp").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon7.jpg").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon8.png").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon9.webp").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon10.webp").default}
                />
            </div>

            <div>
                <img
                    
                    src={require("./img/mapaches/raccoon11.webp").default}
                />
            </div>
        </Carousel>

        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  );
}

export default RaccoonImage;
