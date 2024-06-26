
import './App.css'
import Engagements from './components/Engagements'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {


  return (
    <> 
    
   <section  className='my-44 px-2 md:px-4 mx-2 sm:mx-10 md:mx-12 lg:mx-[450px] max-w-screen-2xl'>
    <Header />
    <Engagements />
    <Projects />
    
    </section>
    
    </>
  )
}

export default App
