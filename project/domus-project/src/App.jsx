import DomusHomeCard from './DomusHomeCard.jsx'
import './App.css'

function App() {
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
            <section>
                <DomusHomeCard>
                    
                </DomusHomeCard>
            </section>
            
        </section>
    )
}

export default App