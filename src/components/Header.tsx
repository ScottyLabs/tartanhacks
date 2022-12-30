import Logo from "../../public/svg/logo.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-black text-beige pt-6 pb-4 hidden md:block">
      <div className="flex flex-row justify-between text-xl max-w-6xl m-auto">
        <div>
          <Logo className="leading-4 h-6 mr-4" />
        </div>
        <div className="space-x-8 text-lg">
          <a>About</a>
          <a>Speakers</a>
          <a>Prizes</a>
          <a>FAQ</a>
          <a>Sponsors</a>
        </div>
      </div>
    </header>
  );
}