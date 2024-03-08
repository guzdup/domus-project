import DomusHomeCard from './DomusHomeCard.jsx'
import './App.css'

function App() {

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
            <section className='App'>
                <DomusHomeCard
                image='https://as1.ftcdn.net/v2/jpg/04/20/73/92/1000_F_420739259_YQkU0yMNGS8BZmssFDkEpHrgJAU0kxY9.jpg'
                price='200.000'
                formatPrice={formatPrice}
                numberBedrooms={4}
                numberBathrooms={3}
                location={'Carrasco sur'}
                >
                </DomusHomeCard>
                <DomusHomeCard
                image='https://as1.ftcdn.net/v2/jpg/04/20/73/92/1000_F_420739259_YQkU0yMNGS8BZmssFDkEpHrgJAU0kxY9.jpg'
                price='200.000'
                formatPrice={formatPrice}
                numberBedrooms={4}
                numberBathrooms={3}
                location={'Carrasco sur'}
                >
                </DomusHomeCard>
            </section>
            
        </section>
    )
}

export default App