import DomusHomeCard from './DomusHomeCard.jsx'
import './App.css'
import home2 from './assets/images/home2/home2.0.jpeg'
import home2_1 from './assets/images/home2/home2.1.jpeg'
import home3 from './assets/images/home3/home3.0.jpeg'
import home4 from './assets/images/home4/home4.0.jpeg'

function App() {
    const home1 = 'https://as1.ftcdn.net/v2/jpg/04/20/73/92/1000_F_420739259_YQkU0yMNGS8BZmssFDkEpHrgJAU0kxY9.jpg'
    const imagesHome2 = [home2, home2_1]
    const formatPrice = (price) => `USD ${price}` 


    return(
        <section>
            <header className='domus-top'>
                <h1 className='domus-title'>
                    DOMUS
                </h1>
            </header>
            <section>
                <h1 className='domus-presentation'>
                    Find your next home here!
                </h1>
            </section>
            <section className='home-Section'>

                <DomusHomeCard
                image={home2}
                price='1.000.000'
                formatPrice={formatPrice}
                numberBedrooms={4}
                numberBathrooms={4}
                location={'Jardines de Carrasco'}
                slide={imagesHome2}
                >
                </DomusHomeCard>


            </section>
            
        </section>
    )
}

export default App