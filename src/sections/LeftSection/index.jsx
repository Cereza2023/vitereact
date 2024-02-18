import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navber";

const LeftSection = () =>{
    return(
      <div className="px-5">
        <div className='sticky top-14 grid grid-rows-[35%_45%_20%] lg:h-[87vh]'>
          <Header/>
          <Navbar/>
          <Contact/>
        </div>
      </div>
    )
}
export default LeftSection;