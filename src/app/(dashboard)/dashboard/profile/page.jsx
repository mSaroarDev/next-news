import { myProfile } from "@/libs/user";
import ProfileCom from "./ProfileCom";
import { headers } from "next/headers";

const ProfilePage = async () => {
  // utils
  const headerList = headers();
  const currUserId = headerList.get("id")
  console.log("currUserId", currUserId);
  

  const existUserData = await myProfile(currUserId)
  return (
    <>
      <ProfileCom existUserData={existUserData} />
    </>
  );
};

export default ProfilePage;
