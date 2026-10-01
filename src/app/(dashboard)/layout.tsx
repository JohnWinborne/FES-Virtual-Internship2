import summarist from "../assets/pricing-top.png";
import {
  FiHome,
  FiBookmark,
  FiEdit3,
  FiSearch,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";

export default function ForYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-[200px] bg-[#f7faf9] md:block">
        {/* Logo */}
        <div className="flex h-[80px] items-center px-5">
          <img
            src={summarist.src}
            alt="Summarist"
            className="h-[40px] w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <a
            href="/for-you"
            className="relative flex h-[64px] items-center gap-3 px-5 text-[16px] text-[#032b41]"
          >
            <span className="absolute left-0 top-0 h-full w-[5px] bg-[#2bd97c]" />
            <FiHome size={22} />
            <span>For you</span>
          </a>

          <a
            href="/library"
            className="flex h-[64px] items-center gap-3 px-5 text-[16px] text-[#032b41] hover:bg-[#eeeeee]"
          >
            <FiBookmark size={22} />
            <span>My Library</span>
          </a>

          <button
            disabled
            className="flex h-[64px] w-full cursor-not-allowed items-center gap-3 px-5 text-left text-[16px] text-[#032b41]"
          >
            <FiEdit3 size={22} />
            <span>Highlights</span>
          </button>

          <button
            disabled
            className="flex h-[64px] w-full cursor-not-allowed items-center gap-3 px-5 text-left text-[16px] text-[#032b41]"
          >
            <FiSearch size={22} />
            <span>Search</span>
          </button>

          <a
            href="/settings"
            className="mt-6 flex h-[64px] items-center gap-3 px-5 text-[16px] text-[#032b41] hover:bg-[#eeeeee]"
          >
            <FiSettings size={22} />
            <span>Settings</span>
          </a>

          <button
            disabled
            className="flex h-[64px] w-full cursor-not-allowed items-center gap-3 px-5 text-left text-[16px] text-[#032b41]"
          >
            <FiHelpCircle size={22} />
            <span>Help & Support</span>
          </button>

          <button className="flex h-[64px] w-full items-center gap-3 px-5 text-left text-[16px] text-[#032b41] hover:bg-[#eeeeee]">
            <FiLogOut size={22} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
