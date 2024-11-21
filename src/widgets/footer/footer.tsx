import { FooterLogo } from "assets/icons";

const Footer = () => {
  return (
    <footer className="flex items-center gap-8 py-9 px-6 border-t border-light-blue mt-auto">
      <FooterLogo />
      <div className="text-black cursor-pointer active:text-black-press hover:text-black-hover transition-colors b1 hidden sm:block">
        Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
