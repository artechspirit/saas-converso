import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import NavItems from "./NavItems";
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = await auth();

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>

      {userId && (
        <div className="flex items-center gap-8">
          <NavItems />
          <SignedOut>
            <SignInButton>
              <button className="btn-signin">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
