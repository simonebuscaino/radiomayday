import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src="/logo_scritta_bianca.png" alt="Radio Mayday Logo" className="h-12 w-auto" />
              </div>
              Un segnale d’emergenza. Una chiamata collettiva. Un progetto culturale.
              <br /><br />
              Redazioni attive: Striano e Casalnuovo (NA)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-neutral-800 pb-2 inline-block">Contatti</h3>
            <div className="space-y-4 text-sm text-neutral-400">
              <p className="flex items-center gap-2">
                <span className="font-bold text-neutral-300">Email:</span>{" "}
                <a href="mailto:troppfunradio@gmail.com" className="hover:text-primary-500 transition-colors">
                  troppfunradio@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-neutral-300">PEC:</span>{" "}
                <a href="mailto:troppfunradio@pec.it" className="hover:text-primary-500 transition-colors">
                  troppfunradio@pec.it
                </a>
              </p>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-neutral-800 pb-2 inline-block">Legal</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Associazione iscritta al registro unico nazionale del terzo settore.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here if needed, or already in navbar */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-neutral-500">
              Made with ❤️ for Radio Mayday
            </p>
            <p className="text-xs text-neutral-500">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/simonebuscaino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-500 transition-colors font-medium"
              >
                Simone Buscaino
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-secondary-300 text-center mt-6">
          © {new Date().getFullYear()} Radio Mayday. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

export default Footer;