import React from 'react';
import './Home.css';
import Product from './Product.js'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ImportantDevices, SportsTennis } from '@material-ui/icons';

function Home() {
    return (
        <div className="home">

        <div className="user__location">
            <LocationOnIcon />
            <p>Deliver to Shubham - Jaipur 302029</p>
        </div>

        <div className="categories">
            <div className="category__option">
                <PhoneIphoneIcon />
                <p>Mobiles</p>
            </div>
            <div className="category__option">
                <EmojiFoodBeverageIcon />
                <p>Pantry</p>
            </div>
            <div className="category__option">
                <GitHubIcon />
                <p>Pets</p>
            </div>
            <div className="category__option">
                <ImportantDevices />
                <p>Electronics</p>
            </div>
            <div className="category__option">
                <SportsTennis />
                <p>Sports</p>
            </div>
            <div className="category__option">
                <PhoneIphoneIcon />
                <p>Mobiles</p>
            </div>
        </div>

        <img 
         className="home__image"
         src="https://i.pinimg.com/originals/a2/34/c2/a234c2f4f5b82db1b5a4acc7d0575480.jpg"
         alt=""
        />

        {/* Product id, title, price, rating, image */}

        <div className="home__row home__row1">
            <Product 
                id="84254515"
                title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (Blue)"
                price={5499}
                rating={4}
                image="https://images-eu.ssl-images-amazon.com/images/I/41hWQ0MpV6L._AC_US327_FMwebp_QL65_.jpg"
            />

            <Product 
                id="123456"
                title="Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch"
                price={58000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71%2BkGr%2B5LrL._SL1500_.jpg"
            />
        </div>

        <div className="home__row">
            <Product 
                id="78414551"
                title="Nivia Trainer Football"
                price={499}
                rating={4}
                image="https://m.media-amazon.com/images/I/61BH-Yrm4DL._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product 
                id="7855515"
                title="GOQii Smart Vital Fitness SpO2"
                price={3000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51UUJpcldDL._SL1000_.jpg"
            />
          
        </div>

        <div className="home__row">
            <Product 
                id="45698469"
                title="Royal Interiors Matte Finish Metal Sofa/Bed with Hydraulic Storage (Queen Size, Black and Light Brown)"
                price={19000}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41JWTuVi0AL.jpg"
            />
            <Product 
            id="7851662"
            title="Hero Blast 20T Single Speed Kids' Bike"
            price={7000}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Cfb2ybSCL._SX679_.jpg"
        />
        </div>
        
        
            
        </div>
    )
}

export default Home;
