import { useState } from "react";
import google from "../../assets/google.png";
import { FaUser } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function LoginModal({
  onSignUpClick,
  onClose,
}: {
  onSignUpClick: () => void;
  onClose: () => void;
}) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.code === "auth/invalid-email") {
        setEmailError("Firebase: Error (auth/invalid-email).");
      } else if (error.code === "auth/user-not-found") {
        setEmailError("Firebase: Error (auth/user-not-found).");
      } else if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        setPasswordError("Firebase: Error (auth/wrong-password).");
      }
    }
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="relative w-full max-w-[400px] rounded bg-white">
        <button
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-2 text-3xl text-black"
        >
          ×
        </button>
        <div className="p-8">
          <div className="my-4 text-center text-xl font-bold text-[#032b41]">
            Log in to Summarist
          </div>
          {emailError && (
            <p className="mb-8 ml-7 text-sm text-red-500"> {emailError}</p>
          )}
          {passwordError && (
            <p className="mb-8 ml-7 text-sm text-red-500"> {passwordError}</p>
          )}
          <div className="transition-colors duration-200 hover:bg-[#354d91] cursor-pointer relative mb-3.75 flex h-10 items-center rounded bg-[#425da8] text-white">
            <FaUser className=" absolute text-xl text-white ml-2" />

            <div className="flex-1 text-center">Login as a Guest</div>
          </div>

          <div className="mb-3.75 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm font-semibold text-gray-600">or</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="transition-colors duration-200 hover:bg-[#3367d6] cursor-pointer relative mb-3.75 flex h-10 items-center rounded bg-[#4285f4] text-white">
            <img
              src={google.src}
              alt="google"
              className="absolute ml-1 h-8 w-8 p-1 rounded bg-white"
            />

            <div className="flex-1 text-center">Login with Google</div>
          </div>

          <div className="mb-3.75 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm font-semibold text-gray-600">or</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="mb-3.75">
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-full rounded border-2 border-[#b8c9d3] bg-[#e8f1ff] px-3 text-sm outline-none"
            />
          </div>

          <div className="mb-3.75">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 w-full rounded border-2 border-[#b8c9d3] bg-[#e8f1ff] px-3 text-sm outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            className="mb-3.75 flex h-10 w-full transition-colors duration-200 hover:bg-[#20ba68] cursor-pointer mb-3.75 flex h-10 items-center justify-center rounded bg-[#2bd97c] text-[#032b41]"
          >
            Login
          </button>

          <div className="text-center text-sm text-[#4285f4]">
            Forgot your password?
          </div>
        </div>
        <button
          onClick={onSignUpClick}
          className=" cursor-pointer transition-colors duration-200 hover:bg-[#dfe9e5] w-full flex h-10 items-center justify-center bg-[#f1f6f4] text-sm text-[#4285f4]"
        >
          Don't have an account?
        </button>
      </div>
    </section>
  );
}
