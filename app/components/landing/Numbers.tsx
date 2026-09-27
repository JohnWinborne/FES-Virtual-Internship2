import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

export default function Reviews() {
  return (
    <section>
      <div className="w-full py-10">
        <div className="mx-auto w-full max-w-[1070px] px-6">
          <div className="mb-8 text-center text-2xl font-bold text-[#032b41] md:text-[32px]">
            Start growing with Summarist now
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
            <div className="flex flex-col items-center rounded-xl bg-[#d7e9ff] p-6 pb-10 text-center">
              <div className="flex h-[60px] items-center gap-1">
                <BiCrown className="h-12 w-12 text-[#0365f2]" />
              </div>

              <div className="mb-4 text-[32px] font-semibold text-[#032b41] md:text-[40px]">
                3 Million
              </div>

              <div className="font-light text-[#394547] md:text-base">
                Downloads on all platforms
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#d7e9ff] p-6 pb-10 text-center">
              <div className="flex h-[60px] items-center gap-1">
                <BsStarFill className="h-5 w-5 text-[#0365f2]" />
                <BsStarFill className="h-5 w-5 text-[#0365f2]" />
                <BsStarFill className="h-5 w-5 text-[#0365f2]" />
                <BsStarFill className="h-5 w-5 text-[#0365f2]" />
                <BsStarHalf className="h-5 w-5 text-[#0365f2]" />
              </div>

              <div className="mb-4 text-[32px] font-semibold text-[#032b41] md:text-[40px]">
                4.5 Stars
              </div>

              <div className="font-light text-[#394547] md:text-base">
                Average ratings on iOS and Google Play
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#d7e9ff] p-6 pb-10 text-center">
              <div className="flex h-[60px] items-center gap-1">
                <RiLeafLine className="h-12 w-12 text-[#0365f2]" />
              </div>

              <div className="mb-4 text-[32px] font-semibold text-[#032b41] md:text-[40px]">
                97%
              </div>

              <div className="font-light text-[#394547] md:text-base">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
