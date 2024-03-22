import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const header = () => {
  return(
    <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link 
              to = "/"
              className = "text-3xl font-bold tracking-tight text-orange-500">
                EATOO
            </Link>
            <div className="md:hidden lg:hidden">
              <MobileNav/>
            </div>
            <div className="hidden md:block lg:block">
              <MainNav/>
            </div>
        </div>
    </div>  
  )
}

export default header;