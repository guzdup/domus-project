import './DomusHomeCard.css'

function DomusHomeCard({price, formatPrice, image, numberBedrooms, numberBathrooms, location}) {


    return(
        <div className="domus-homeCard">
            <img className='domus-homeCard-picture' src= {image} alt='houseImg'/>
            
            <strong className='domus-homeCard-price'>
                {formatPrice(price)}
            </strong>
            <div className='domus-homeCard-info'>
                <span className='domus-homeCard-bedrooms'>
                    <img className='domus-homeCard-bedroomIcon' src="https://img.icons8.com/ios-glyphs/30/bed.png" alt="bed"/>
                        {numberBedrooms}
                </span>
                <span className='domus-homeCard-bathrooms'>
                    <img className='domus-homeCard-bathroomIcon' src='https://img.icons8.com/ios-filled/50/shower-and-tub.png' alt="shower-and-tub"/>
                        {numberBathrooms}
                </span>
            </div>
            <span className='domus-homeCard-location'>
                    <img className='domus-homeCard-locationIcon' src="https://img.icons8.com/ios-filled/50/marker.png" alt="marker"/>
                        {location}
                </span>
            
        </div>
    )
}

export default DomusHomeCard