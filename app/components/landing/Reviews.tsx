import { BsStarFill } from "react-icons/bs";

export default function Reviews({ onLoginClick }: {onLoginClick: () => void}) {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1070px] px-6">
        <div className="w-full py-10">
          <div className="mb-8 text-center text-2xl font-bold text-[#032b41] md:text-[32px]">
            What our members say
          </div>

          <div className="mx-auto mb-8 max-w-[600px]">
            <div className="mb-8 rounded bg-[#fff3d7] p-4 font-light">
              <div className="mb-2 flex gap-2 text-[#032b41]">
                <div>Hanna M.</div>
                <div className="flex">
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                </div>
              </div>

              <div className="text-[#394547] leading-[1.4] tracking-[0.3px] md:text-base">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>

            <div className="mb-8 rounded bg-[#fff3d7] p-4 font-light">
              <div className="mb-2 flex gap-2 text-[#032b41]">
                <div>David B.</div>
                <div className="flex">
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />{" "}
                </div>
              </div>

              <div className="text-[#394547] leading-[1.4] tracking-[0.3px] md:text-base">
                I love this app! It provides{" "}
                <b>concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>

            <div className="mb-8 rounded bg-[#fff3d7] p-4 font-light">
              <div className="mb-2 flex gap-2 text-[#032b41]">
                <div>Nathan S.</div>
                <div className="flex">
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />{" "}
                </div>
              </div>

              <div className="text-[#394547] leading-[1.4] tracking-[0.3px] md:text-base">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.{" "}
                <b>The summaries are well-written and informative.</b>{" "}
                Definitely worth downloading.
              </div>
            </div>

            <div className="mb-8 rounded bg-[#fff3d7] p-4 font-light last:mb-0">
              <div className="mb-2 flex gap-2 text-[#032b41]">
                <div>Ryan R.</div>
                <div className="flex">
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />
                  <BsStarFill className="h-4 w-4 fill-[#0564f1]" />{" "}
                </div>
              </div>

              <div className="text-[#394547] leading-[1.4] tracking-[0.3px] md:text-base">
                If you're a busy person who{" "}
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button onClick={onLoginClick} className="flex h-10 w-full max-w-[300px] min-w-[180px] items-center justify-center rounded bg-[#2bd97c] text-base text-[#032b41] transition-colors duration-200 hover:bg-[#20ba68]">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
