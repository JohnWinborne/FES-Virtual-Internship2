import google from "../../assets/google.png";
// import { useState } from "react";

export default function SignUpModal({ onLoginClick, onClose }: { onLoginClick: () => void, onClose: () => void }) {
  // const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="relative w-full max-w-[400px] overflow-hidden rounded bg-white shadow-lg">
        {" "}
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-3xl text-black"
        >
          ×
        </button>
        <div className="px-8 pt-12 text-center text-xl font-semibold text-[#032b41]">
          Sign up to Summarist
        </div>
        <div className=" transition-colors duration-200 hover:bg-[#3367d6]  relative mx-8 mt-6 flex h-10 items-center rounded bg-[#4285f4] text-white transition-colors duration-200 hover:bg-[#3678e5] cursor-pointer">
          <img
            src={google.src}
            alt="google"
            className="absolute left-1 h-8 w-8 rounded bg-white p-1"
          />

          <div className="w-full text-center">Sign up with Google</div>
        </div>
        <div className="mx-8 my-5 flex items-center gap-6">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-sm font-semibold text-gray-600">or</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>
        <div className="mx-8 mb-4">
          <input
            type="text"
            placeholder="Email Address"
            className="h-10 w-full rounded border-2 border-[#b8c8d3] bg-[#e7f0fc] px-3 text-sm text-[#032b41] outline-none"
          />
        </div>
        <div className="mx-8 mb-4">
          <input
            type="text"
            placeholder="Password"
            className="h-10 w-full rounded border-2 border-[#b8c8d3] bg-[#e7f0fc] px-3 text-sm text-[#032b41] outline-none"
          />
        </div>
        <div className="cursor-pointer transition-colors duration-200 hover:bg-[#20ba68] mx-8 mb-6 flex h-10 items-center justify-center rounded bg-[#2bd97c] text-[#032b41]">
          Sign up
        </div>
        <div onClick={onLoginClick} className=" transition-colors duration-200 hover:bg-[#dfe9e5] flex h-10 items-center justify-center bg-[#f1f6f4] text-sm text-[#4285f4]">
          Already have an account?
        </div>
      </div>
    </section>
  );
}
