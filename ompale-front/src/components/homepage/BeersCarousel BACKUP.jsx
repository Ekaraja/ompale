export default function BeersCarousel() {

    let left = 0

    function move() 
    {
        let beer = document.querySelector(".single-beer-img")
        console.log(beer)


        left = left + 10

        beer.style.left = `${left}px`
        console.log('left: ', left);
    }


    return ( 
    <section className="beer-carousel-frame"  onClick={move} >
         <img className="single-beer-img"src="https://produits.bienmanger.com/37094-0w470h470_Brewdog_Punk_Ipa_Biere_Ecossaise.jpg" alt="" />
      
        <div className="single-beer-frame">Beer A</div>
        <div className="beer-hider"></div>
        <div className="single-beer-frame">
             </div>
        <div className="beer-hider"></div>
        <div className="single-beer-frame">Beer C</div>
        <div className="beer-hider"></div>
        <div className="single-beer-frame">Beer D</div>
    </section> 
    );
}

