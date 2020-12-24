import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function MartiwImages(){
    return(
        <div class="container w-50 p-1">
            <Carousel infiniteLoop useKeyboardArrows autoPlay dynamicHeight > 
                <div>
                    <img
                        src={require("./img/martiw/1.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/2.JPG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/3.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/4.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/5.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/6.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/7.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/8.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/9.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/10.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/11.JPEG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/12.JPG").default}
                    />
                </div>

                <div>
                    <img
                        
                        src={require("./img/martiw/13.JPEG").default}
                    />
                </div>

            </Carousel>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        </div>
    );
}

export default MartiwImages;