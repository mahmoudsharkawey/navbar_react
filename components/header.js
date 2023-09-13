import Link from "next/link";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoFacebook, BiLogoWhatsapp, BiAlignLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <header>
     
      <div className="logo">
        <Link id="logo" href="/">
          MG
        </Link>
      </div>
     
      <div className="social-media">
        <Link href="/" target={"_blank"}>
          <VscGithubInverted size={30} />
        </Link>
        <Link href="/" target={"_blank"}>
          <BsLinkedin size={30} />
        </Link>
        <Link href="/" target={"_blank"}>
          <BiLogoWhatsapp size={35} />
        </Link>
        <Link href="/" target={"_blank"}>
          <BiLogoFacebook size={35} />
        </Link>
      </div>

      <div id="container" className="hide">
        <div id="header-items">
          <div
            className="close"
            onClick={() => {
              document.querySelector("#container").classList.add("hide");
            }}
          >
            <AiOutlineClose size={50} />
          </div>
          <div className="header-item">
            <Link href="/">Home</Link>
          </div>
          <div className="header-item">
            <Link href="/about">About me </Link>
          </div>
          <div className="header-item">
            <Link href="/services">Services</Link>
          </div>
          <div className="header-item">
            <Link href="/projects">Ptojects</Link>
          </div>
        </div>
      </div>

      <div
        className="toggle"
        id="toggle"
        onClick={() => {
          document.querySelector("#container").classList.remove("hide");
        }}
      >
        <BiAlignLeft size={50} />
      </div>
    </header>
  );
};

export default Header;
