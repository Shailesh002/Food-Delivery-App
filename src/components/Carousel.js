import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner">
                    <div class="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn" style={{backgroundColor:"#2C8F30"}} type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active carousel-img">
                        <img src="https://img.freepik.com/premium-photo/antiuqe-stainless-steel-food-carrier-tiffin-food-container-spoon-wood-table_39658-24.jpg?w=1060" style={{filter: "brightness(30%)"}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carousel-img">
                        <img src="https://img.freepik.com/free-photo/lunch-box-chicken-bulgur-microgreens-tomato-fruit-healthy-fitness-food-take-away-lunchbox-top-view_2829-19646.jpg?w=1060&t=st=1685458908~exp=1685459508~hmac=b55b0c7c642f1927cfd2e048b549c15343fe160d1ad462d55aa1d139333374af" style={{filter: "brightness(30%)"}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carousel-img">
                        <img src="https://img.freepik.com/free-photo/close-up-lunchboxes-with-delicious-food_23-2149098814.jpg?w=1060&t=st=1685459750~exp=1685460350~hmac=03cf1f30049ce9dd3f1cbd3dca43fe1f84eed5029501c1e89175b26a97bc6121" style={{filter: "brightness(30%)"}} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
