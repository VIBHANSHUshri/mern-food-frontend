import Landingimage from "../assets/landing.png";
import landing from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import {  useNavigate } from "react-router-dom";
const HomePage = () => {
     const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues : SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    }
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16  ">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a Takeway Today
            </h1>
          <span className="text-xl">Food is just a click away!</span>
          <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit}/>

        </div>

        <div className="grid md:grid-cols-2 gap-5">
            <img src={Landingimage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order TakeWay Even Faster !
                </span>
                <span>
                    Download the MernEats App for Faster Ordering and Personalised Recommendation
                </span>
            <button><img src= {landing}/></button>
            </div>
            
        </div>
    </div>

  )
}

export default HomePage;