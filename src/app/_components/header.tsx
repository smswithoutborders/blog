import Link from "next/link";
import { FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <div className="flex md:flex-col lg:flex-row justify-between">
        <img src="/assets/blog/logo.png" alt="Your Logo" className="h-10 " />

        <div className="flex md:justify-center">
          <a
            href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size="25px"
              className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"
            />
          </a>
          <a
            href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              size="25px"
              className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"
            />
          </a>
          <a
            href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size="25px"
              className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
