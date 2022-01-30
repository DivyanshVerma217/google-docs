import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();

  return (
    <div className=" sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className=" md:inline-flex h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="inline-flex ml-2 mr-2 text-gray-700 text-2xl">Docs</h1>
      <div className=" flex w-5 md:w-auto ml-2   flex-grow items-center pl-2 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="darkgray" />
        <input
        
          type="text"
          placeholder="Search"
          className=" flex-grow text-base bg-transparent outline-none"
        />
      </div>

      <Icon name="apps" size="3xl" color="gray"/>

      <img
        
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-5"
        src={session?.user?.image}
        alt="image"
      />
      <Button
        onClick={signOut}
        color="gray"
        buttonType="outline"
        rounded={true}
        ripple="dark"
        className=" md:inline-flex h-14 w-14 border-0"
      >
        <Icon name="logout" size="3xl"  />
      </Button>
    </div>
  );
}

export default Header;
