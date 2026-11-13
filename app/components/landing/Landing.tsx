import landing from "../../assets/login.png";

export default function Landing({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <section>
      <div className="w-full py-10">
        <div className="mx-auto w-full max-w-[1070px] px-6">
          <div className="flex">
            <div className="w-full max-md:mx-auto max-md:flex max-md:max-w-[540px] max-md:flex-col max-md:items-center max-md:text-center">
              <div className="mb-6 text-[24px] font-bold text-[#032b41] md:text-[40px]">
                Gain more knowledge <br className="max-md:hidden" />
                in less time
              </div>

              <div className="mb-6 text-xl font-light leading-[1.5] text-[#394547]">
                Great summaries for busy people,{" "}
                <br className="max-md:hidden" />
                individuals who barely have time to read,{" "}
                <br className="max-md:hidden" />
                and even people who don’t like to read.
              </div>

              <button onClick={onLoginClick} className="flex h-10 w-full max-w-[300px] min-w-[180px] items-center justify-center rounded bg-[#2bd97c] text-base text-[#032b41] transition-colors duration-200 hover:bg-[#20ba68]">
                Login
              </button>
            </div>

            <figure className="flex w-full justify-end max-md:hidden">
              <img
                className="h-full w-full max-w-[400px]"
                src={landing.src}
                alt="landing"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
