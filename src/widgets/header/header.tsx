import { authSlice, authStore } from "@/store";
import { BurgerMenu, Logo } from "assets/icons";
import { ProfileAvatar } from "components";
import { Link } from "react-router-dom";

const Header = () => {
  const handleLogout = () => {
    authStore.dispatch(authSlice.actions.setIsAuthentificated(false));
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-6">
        <nav className="hidden sm:flex items-center gap-x-6">
          <Link to="">
            <span className="b2">Gallery</span>
          </Link>
          <Link to="">
            <span className="b2">About</span>
          </Link>
          <Link to="">
            <span className="b2">Store</span>
          </Link>
        </nav>
        <button onClick={handleLogout}>
          <ProfileAvatar />
        </button>
        <label htmlFor="makeMagic">
          <button className="b2 px-5 py-2 bg-black active:bg-black-press hover:bg-black-hover transition-colors rounded-full text-white hidden sm:block">
            Make magic
          </button>
        </label>
        <button className="sm:hidden">
          <BurgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
