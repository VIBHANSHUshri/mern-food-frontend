import { useGetRestaurant } from "@/api/RestaurantApi";
import Menuitem from "@/components/Menuitem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { Card } from "@/components/ui/card";
import { MenuItem as MenuItemType } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id:string;
  name:string;
  price : number;
  quantity : number;
};




const DetailPage = () => {
  const {restaurantId} = useParams();
  const {restaurant , isLoading} = useGetRestaurant(restaurantId);

  const [cartItems , setCartItems] = useState<CartItem[]>([]);
   
  const addToCart = (menuitem : MenuItemType) =>{
    setCartItems((prevCartItems) =>{
        //1
        const existingCartItem = prevCartItems.find((cartItem) => cartItem._id === menuitem._id);
        let updateCartItems;
        if(existingCartItem)
        {
          updateCartItems = prevCartItems.map((cartItem) => cartItem._id === menuitem._id ? {...cartItem , quantity : cartItem.quantity + 1} : cartItem); 
        }
        else{
          updateCartItems = [...prevCartItems,{
            _id : menuitem._id,
            name : menuitem.name,
            price : menuitem.price,
            quantity : 1,
          }]
        }

        return updateCartItems;
    }) 
  }
  const removeFromCart = (cartItem : CartItem) => {
   setCartItems((prevCartItems) =>{
    const updateCartItems = prevCartItems.filter((item) => cartItem._id !== item._id);

    return updateCartItems;
   } )
  }

  if(isLoading || !restaurant)
  {
    return "Loading...";
  }
  

  return(
    <div className="flex flex-col gap-10">
        <AspectRatio ratio={16 / 5}>
        <img src = {restaurant.imageUrl} className="rounded-md object-cover h-full w-full"/>
        </AspectRatio>

     <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
         <div className="flex flex-col gap-4">
            <RestaurantInfo restaurant= {restaurant}/>
            <span className="text-2xl font-bold tracking-tight">Menu</span>
            {restaurant.menuItems.map((menuItem) =>(
                <Menuitem menuItem = {menuItem} addToCart = {() =>addToCart(menuItem)}/>
            ))}
         </div>

         <div>
          <Card>
            <OrderSummary restaurant = {restaurant}  cartItems = {cartItems}
             removeFromCart = {removeFromCart}/>
          </Card>
         </div>
     </div>
    </div>
    
  )

}

export default DetailPage;