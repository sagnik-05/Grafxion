"use client"
import { UserButton, SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Home = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  if (!isLoaded) {
    return null; // Or you can return a loading spinner
  }

  if (!isSignedIn) {
    router.push("/sign-in");
    return null;
  }

  return (
    <div>
      <p>Home</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
};

export default Home;