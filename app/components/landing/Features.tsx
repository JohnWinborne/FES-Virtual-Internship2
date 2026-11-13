import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";

export default function Features() {
  return (
    <section>
      <div className="w-full py-10">
        <div className="mx-auto w-full max-w-[1070px] px-6">
          <div className="mb-8 text-center text-2xl font-bold text-[#032b41] md:text-[32px]">
            Understand books in few minutes
          </div>

          {/* Features */}
          <div className="mb-24 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex justify-center text-[#032b41]">
                <AiFillFileText className="h-12 w-12 md:h-[60px] md:w-[60px]" />
              </div>

              <div className="mb-4 text-xl font-medium text-[#032b41] md:text-2xl">
                Read or listen
              </div>

              <div className="text-sm font-light text-[#394547] md:text-lg">
                Save time by getting the core ideas from the best books.
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex justify-center text-[#032b41]">
                <AiFillBulb className="h-12 w-12 md:h-[60px] md:w-[60px]" />
              </div>

              <div className="mb-4 text-xl font-medium text-[#032b41] md:text-2xl">
                Find your next read
              </div>

              <div className="text-sm font-light text-[#394547] md:text-lg">
                Explore book lists and personalized recommendations.
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex justify-center text-[#032b41]">
                <AiFillAudio className="h-12 w-12 md:h-[60px] md:w-[60px]" />
              </div>

              <div className="mb-4 text-xl font-medium text-[#032b41] md:text-2xl">
                Briefcasts
              </div>

              <div className="text-sm font-light text-[#394547] md:text-lg">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>

          {/* Statistics - First Section */}
          <div className="mb-8 flex flex-col gap-8 md:mb-24 md:flex-row md:gap-20">
            <div className="flex w-full flex-col justify-center">
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Enhance your knowledge
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Achieve greater success
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Improve your health
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Develop better parenting skills
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Increase happiness
              </div>
              <div className="text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Be the best version of yourself!
              </div>
            </div>

            <div className="flex w-full flex-col justify-center gap-6 bg-[#f1f6f4] px-6 py-10">
              <div className="flex gap-4">
                <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                  93%
                </div>
                <div className="text-base font-light text-[#394547] md:text-xl">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                  96%
                </div>
                <div className="text-base font-light text-[#394547] md:text-xl">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                  90%
                </div>
                <div className="text-base font-light text-[#394547] md:text-xl">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>

          {/* Statistics - Second Section */}
          <div className="mb-8 flex flex-col gap-8 md:mb-24 md:flex-row md:gap-20">
            <div className="order-1 flex w-full flex-col justify-center gap-6 bg-[#f1f6f4] px-6 py-10 md:order-none">
              <div className="flex gap-4">
                <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                  91%
                </div>
                <div className="text-base font-light text-[#394547] md:text-xl">
                  of Summarist members <b>report feeling more productive</b>{" "}
                  after incorporating the service into their daily routine.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                  94%
                </div>
                <div className="text-base font-light text-[#394547] md:text-xl">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                  88%
                </div>
                <div className="text-base font-light text-[#394547] md:text-xl">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col justify-center md:items-end">
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Expand your learning
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Accomplish your goals
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Strengthen your vitality
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Become a better caregiver
              </div>
              <div className="mb-4 text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Improve your mood
              </div>
              <div className="text-2xl font-medium text-[#6b757b] md:text-[32px]">
                Maximize your abilities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
