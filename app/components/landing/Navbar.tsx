import navPhoto from "../../assets/pricing-top.png";

export default function Nav({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <nav className="h-20">
      <div className="mx-auto flex h-full w-full max-w-[1070px] items-center justify-between px-6">
        <figure className="max-w-[200px]">
          <img className="h-full w-full" src={navPhoto.src} alt="logo" />
        </figure>

        <ul className="flex gap-6">
          <li onClick={onLoginClick} className="cursor-pointer text-[#032b41] transition-colors duration-100 hover:text-[#2bd97c]">
            Login
          </li>

          <li className="hidden cursor-not-allowed text-[#032b41] min-[576px]:block">
            About
          </li>

          <li className="hidden cursor-not-allowed text-[#032b41] min-[576px]:block">
            Contact
          </li>

          <li className="hidden cursor-not-allowed text-[#032b41] min-[576px]:block">
            Help
          </li>
        </ul>
      </div>
    </nav>
  );
}
