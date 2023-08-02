import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  //search functionality
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:3001/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }

    });

    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div><Navbar /></div>

      {/* Carousel */}
      <div><div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner">
          <div class="carousel-caption" style={{ zIndex: "10" }}>

            {/* Search  */}
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              {/* <button className="btn" style={{ backgroundColor: "#2C8F30" }} type="submit">Search</button> */}
            </div>

          </div>
          <div className="carousel-item active carousel-img">
            <img src="https://img.freepik.com/premium-photo/antiuqe-stainless-steel-food-carrier-tiffin-food-container-spoon-wood-table_39658-24.jpg?w=1060" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousel-img">
            <img src="https://img.freepik.com/free-photo/lunch-box-chicken-bulgur-microgreens-tomato-fruit-healthy-fitness-food-take-away-lunchbox-top-view_2829-19646.jpg?w=1060&t=st=1685458908~exp=1685459508~hmac=b55b0c7c642f1927cfd2e048b549c15343fe160d1ad462d55aa1d139333374af" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousel-img">
            <img src="https://img.freepik.com/free-photo/close-up-lunchboxes-with-delicious-food_23-2149098814.jpg?w=1060&t=st=1685459750~exp=1685460350~hmac=03cf1f30049ce9dd3f1cbd3dca43fe1f84eed5029501c1e89175b26a97bc6121" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div></div>

      <div className='container'>
            {
              foodCat !== []
                ? foodCat.map((data) => {
                  return (
                    <div className='row mb-3'>
                      <div key={data._id} className='fs-3 m-3'>
                        {data.CategoryName}
                      </div>
                      <hr />
                      {
                        foodItem !== [] ? foodItem.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())).map((filterItems) => {
                          return (
                            <div key={(filterItems._id)} className="col-12 col-md-6 col-lg-3" >
                              <Card foodItem={filterItems}
                                options={filterItems.options[0]}
                              />
                            </div>
                          )
                        }) : <div>No data found</div>
                      }
                    </div>
                  )
                })
                : ""
            }
          </div>


      <div><Footer /></div>
    </div>
  )
}
