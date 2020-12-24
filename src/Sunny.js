function Sunny(){
    return(
        <div>
            

            <div class="container text-center">
                <div class="card mb-3 bg-dark text-white" styles="max-width: 540px; width:100%">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={require('./img/sunny/squash.jpg').default} class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title h3">
                                    It's Always Sunny In Philadelphia
                                </h5>
                                <p class="card-text">
                                    My friend Jarrett showed me this show. I loved it from
                                    the very first episode I saw. I naturally told that girl 
                                    that I was talking to to watch it. 
                                </p>
                                <p class="card-text">
                                    It is, by far, our favorite show. We have seen every single
                                    episode! 
                                </p>
                                <p class="card-text">
                                    (Even though she always forgets the episodes)
                                </p>
                                <h2 class="text-center">
                                    Below is a playlist of just a few of our favorite moments!
                                </h2>
                                <div class="videoWrapper"> 
                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLNxyyFoAUKHgrfd9Bc-Tuku832vVDoQdo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen" allowFullScreen ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sunny;