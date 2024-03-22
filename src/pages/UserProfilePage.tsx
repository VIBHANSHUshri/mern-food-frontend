import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilepage = () => {

     const {currentUser,isLoading : isGetLoading} = useGetMyUser();
     const {updateUser,isLoading : isUpdateLoading} = useUpdateMyUser();

     if(isGetLoading)
     {
          return <span>Loading...</span>
     }

     if(!currentUser)
     {
          return <span>Unable to load user Profile</span>
     }

     return <UserProfileForm currentUser = {currentUser} onSave={updateUser} isLoading = {isUpdateLoading}/>;
     
}

export default UserProfilepage;