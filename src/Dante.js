import DanteHimself from './img/danteImages.js';


function Dante(){
    return(
        <div>
            <div class="text-center text-white">
                <div class="container rounded bg-info w-50">
                    <h1 class="display-1">DANTE BOY!</h1>
                </div>
                <div class="container rounded bg-dark w-25">
                    <h3 class="lead">He isn't the most obedient dog, but we love him!</h3>
                </div>
                <br/>
				{DanteHimself.map(item => {
                    return(
                    <div class="container">
					    <p><img src={item.src} height="500px"/></p>
                    </div>
                    )
                })}
                <br/>
                
                <br/>
			</div>
        </div>
    );
}

export default Dante;