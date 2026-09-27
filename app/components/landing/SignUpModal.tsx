import google from "../../assets/google.png";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function SignUpModal({
  onLoginClick,
  onClose,
}: {
  onLoginClick: () => void;
  onClose: () => void;
}) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    setEmailError("");
    setPasswordError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.code === "auth/weak-password") {
        setPasswordError("Firebase: Error (auth/internal-error).");
      } else if (error.code === "auth/invalid-email") {
        setEmailError("Firebase: Error (auth/invalid-email).");
      } else if (error.code === "auth/email-already-in-use") {
        setEmailError("Firebase: Error (auth/email-already-in-use).");
      }
    }
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="relative w-full max-w-[400px] overflow-hidden rounded bg-white shadow-lg">
        <button
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-2 text-3xl text-black"
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
        {emailError && (
          <p className="mb-8 ml-7 text-sm text-red-500">{emailError}</p>
        )}
        {passwordError && (
          <p className="mb-8 ml-7  text-sm text-red-500">{passwordError}</p>
        )}
        <div className="mx-8 mb-4">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 w-full rounded border-2 border-[#b8c8d3] bg-[#e7f0fc] px-3 text-sm text-[#032b41] outline-none"
          />
        </div>
        <div className="mx-8 mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 w-full rounded border-2 border-[#b8c8d3] bg-[#e7f0fc] px-3 text-sm text-[#032b41] outline-none"
          />
        </div>
        <button
          onClick={handleSignUp}
          className="mx-8 mb-5 flex h-10 w-[calc(100%-4rem)] cursor-pointer items-center justify-center rounded bg-[#2bd97c] text-[#032b41] transition-colors duration-200 hover:bg-[#20ba68]"
        >
          Sign up
        </button>
        <div
          onClick={onLoginClick}
          className="cursor-pointer transition-colors duration-200 hover:bg-[#dfe9e5] flex h-10 items-center justify-center bg-[#f1f6f4] text-sm text-[#4285f4]"
        >
          Already have an account?
        </div>
      </div>
    </section>
  );
}
