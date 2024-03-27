import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const {user,logout} = useAuth0();

  return(

    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center font-bold hover:text-orange-500 gap-2">
          <CircleUserRound className="text-orange-500"/>
          {
            user?.name
          }
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
        <Link to = "/manage-restaurant" className="font-bold hover:text-orange-500">
            ManageRestaurant
          </Link>
          </DropdownMenuItem>
            <DropdownMenuItem>
            <Link to = "/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
            <Button className="flex flex-1 font-bold bg-orange-500" onClick={() => logout()}>Log Out</Button>
            </DropdownMenuItem>
          
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;