import './App.css'
import Banner from './components/Banner/Banner'
import Gallery from './components/Gallery/Gallery'
import Navbar from './components/Navbar/Navbar'
import Supplier from './components/Supplier/Supplier'
import Services from './components/Services/Services'
import Company from './components/Company/Company'
import PartnersLogo from './components/PartnersLogo/PartnersLogo'
import Cards from './components/Cards/Cards'
import Offer from './components/Offer/Offer'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Location from './components/Location/Location'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Supplier></Supplier>
      <Gallery></Gallery>
      <Services></Services>
      <Company></Company>
      <PartnersLogo></PartnersLogo>
      <Cards></Cards>
      <Location></Location>
      <Offer></Offer>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App
