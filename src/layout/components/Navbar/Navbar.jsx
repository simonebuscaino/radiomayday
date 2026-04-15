import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  // Handle scroll to shrink navbar
  const handleScroll = () => {
    setIsShrunk(window.pageYOffset > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/chi-siamo", label: "Chi siamo" },
    { to: "/programmi", label: "Programmi" },
    { to: "/palinsesto", label: "Palinsesto" },
    { to: "/staff", label: "Staff" },
    { to: "/gallery", label: "Gallery" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/troppfunradioofficial", icon: FaFacebook, label: "Facebook" },
    { href: "https://www.instagram.com/troppfunradio", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.tiktok.com/@troppfunradio", icon: FaTiktok, label: "TikTok" },
    { href: "https://www.twitch.tv/troppfunradiotv", icon: FaTwitch, label: "Twitch" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${isShrunk ? "py-2 glass-navbar shadow-md" : "py-6 bg-white/50 backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo_scritta_nera.png"
              alt="Radio Mayday"
              className={`transition-all duration-300 object-contain ${isShrunk ? "h-12" : "h-16"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-neutral-700 hover:text-primary-500 font-semibold transition-all duration-300 text-sm tracking-wide uppercase relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Social Links + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Social Icons - Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;