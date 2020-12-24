import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import familyImages from './img/familyImages.js';

function Family(){
    return(
        <div class="container w-50 p-3">
            <Carousel infiniteLoop useKeyboardArrows autoPlay dynamicHeight > 
                {familyImages.map(item => {
                    return(
                    <div >
					    <img src={item}/>
                    </div>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default Family;