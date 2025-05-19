import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Samuel Adepoju
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/SamAdepoju"
              target="_blank"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
            </Link>

            <Link
              href="https://linkedin.com/in/samuel-adepoju-024415122/"
              target="_blank"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
