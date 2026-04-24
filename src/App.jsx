import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import urimRunning from "./assets/urim_running.png";
import urimSwimming from "./assets/urim_swimming.jpg";

function App() {
  return (
    <div className="min-h-dvh w-dvw flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black p-6">
      {/* GLASS CONTAINER */}
      <div
        className="
        w-full max-w-md
        backdrop-blur-2xl
        bg-white/5
        border border-white/10
        rounded-3xl
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        p-8
        flex flex-col items-center
        text-white
      "
      >
        {/* PROFILE */}
        <img
          src={urimSwimming}
          className="w-24 h-24 rounded-full mb-4 border border-white/20 shadow-lg"
          alt="profile"
        />

        <h1 className="text-2xl font-semibold tracking-tight">
          Urim Sulejmani
        </h1>

        <p className="text-white/60 text-sm mb-6">
          Hybrid-Athlete & Triathlete
        </p>

        {/* SOCIALS */}
        <div className="flex gap-6 text-2xl mb-6">
          <a
            href="https://instagram.com/urimsu"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@urimsu"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://tiktok.com/@urim.su"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaTiktok />
          </a>
        </div>

        {/* BUTTONS */}
        <div className="w-full flex flex-col gap-3 mb-6">
          <a
            href="https://www.strava.com/athletes/156351060"
            target="_blank"
            className="
              w-full text-center py-3 rounded-xl
              bg-white/10
              hover:bg-white/20
              backdrop-blur-md
              border border-white/10
              transition
            "
          >
            Strava
          </a>

          <a
            href="https://vitastrong.de/?coupon=urimsu"
            target="_blank"
            className="
              w-full text-center py-3 rounded-xl
              bg-gradient-to-r from-pink-500/80 to-red-500/80
              hover:opacity-90
              transition
            "
          >
            Supplements Code: urimsu
          </a>
        </div>

        {/* IMAGE CARD */}
        <div
          className="
          w-full
          rounded-2xl
          overflow-hidden
          border border-white/10
          bg-white/5
          backdrop-blur-xl
        "
        >
          <img
            src={urimRunning}
            className="w-full h-40 object-cover opacity-90"
          />
          <div className="p-4 text-sm text-white/80">Running with Passion</div>
        </div>

        {/* FOOTER */}
        <footer className="mt-6 text-xs text-white/40 hover:text-white transition">
          <a href="https://su-tech.org" target="_blank">
            Made by ©Su-Tech
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
