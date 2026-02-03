export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row group/design-root">
      {/* Left Section - Content */}
      <section className="flex flex-col flex-1 lg:w-1/2 justify-center w-full bg-white dark:bg-[#101922] px-5 sm:px-10 py-16 sm:py-24 lg:py-12 border-b lg:border-b-0 lg:border-r border-[#EAEAEA] dark:border-gray-800 relative z-20">
        <div className="flex flex-col max-w-[600px] w-full items-start text-left gap-8 mx-auto lg:mx-0">
          {/* Logo */}
          <div className="flex flex-col items-start gap-4 mb-2">
            <div className="flex items-center gap-4 select-none">
              <div className="relative w-14 h-14 flex-shrink-0">
                <svg className="w-full h-full drop-shadow-sm" fill="none" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 24C12 14.0589 20.0589 6 30 6C39.9411 6 48 14.0589 48 24V26H40V24C40 18.4772 35.5228 14 30 14C24.4772 14 20 18.4772 20 24V26H12V24Z" fill="#E07A5F"></path>
                  <rect fill="#137fec" height="34" rx="6" width="12" x="24" y="20"></rect>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline leading-none gap-[1px]">
                  <span className="text-[#101922] dark:text-white text-3xl font-bold tracking-tight">Tunis</span>
                  <span className="text-primary text-3xl font-normal tracking-wide">Link</span>
                </div>
                <span className="text-[#101922] dark:text-slate-300 text-lg font-medium tracking-wide mt-1" dir="rtl" style={{ fontFamily: "'Noto Sans', sans-serif" }}>تونس لينك</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-6 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider w-fit">
              <span className="material-symbols-outlined text-sm">stars</span>
              <span>Project Sharing for Tunisian SMEs</span>
            </div>

            {/* Heading */}
            <h1 className="text-[#111418] dark:text-white text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
              The Future of <br className="hidden sm:block" />
              <span className="text-primary relative inline-block">
                Tunisian Business
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 6.99997C25.7501 9.76102 159.357 12.1643 198.006 2.08353" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                </svg>
              </span>{" "}
              Networking
            </h1>

            {/* Feature Steps with Curved Connectors */}
            <div className="flex items-start justify-between w-full max-w-[580px] py-10 px-0 relative select-none">
              {/* Connector Arrows */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
                {/* Arrow 1 */}
                <svg className="absolute w-[20%] h-12 left-[12%] top-[0px] text-gray-300 dark:text-gray-600" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0,35 Q50,-10 95,30" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" />
                  <path d="M92,25 L97,32 L88,33" fill="currentColor" />
                </svg>
                {/* Arrow 2 */}
                <svg className="absolute w-[20%] h-12 left-[32%] top-[0px] text-gray-300 dark:text-gray-600" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0,35 Q50,-10 95,30" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" />
                  <path d="M92,25 L97,32 L88,33" fill="currentColor" />
                </svg>
                {/* Arrow 3 */}
                <svg className="absolute w-[20%] h-12 left-[52%] top-[0px] text-gray-300 dark:text-gray-600" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0,35 Q50,-10 95,30" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" />
                  <path d="M92,25 L97,32 L88,33" fill="currentColor" />
                </svg>
                {/* Arrow 4 */}
                <svg className="absolute w-[20%] h-12 left-[72%] top-[0px] text-gray-300 dark:text-gray-600" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0,35 Q50,-10 95,30" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" />
                  <path d="M92,25 L97,32 L88,33" fill="currentColor" />
                </svg>
              </div>

              <div className="group flex flex-col items-center gap-3 relative z-10 w-1/5 cursor-pointer">
                <div className="size-12 rounded-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center text-gray-400 group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-[22px]">edit_note</span>
                </div>
                <div className="flex flex-col items-center text-center gap-0.5 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-white group-hover:text-primary">Join</span>
                  <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">Waitlist</span>
                </div>
              </div>

              <div className="group flex flex-col items-center gap-3 relative z-10 w-1/5 cursor-pointer">
                <div className="size-12 rounded-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center text-gray-400 group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div className="flex flex-col items-center text-center gap-0.5 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-white group-hover:text-primary">Profile</span>
                  <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">Verify</span>
                </div>
              </div>

              <div className="group flex flex-col items-center gap-3 relative z-10 w-1/5 cursor-pointer">
                <div className="size-12 rounded-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center text-gray-400 group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-[22px]">handshake</span>
                </div>
                <div className="flex flex-col items-center text-center gap-0.5 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-white group-hover:text-primary">Match</span>
                  <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">AI Partner</span>
                </div>
              </div>

              <div className="group flex flex-col items-center gap-3 relative z-10 w-1/5 cursor-pointer">
                <div className="size-12 rounded-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center text-gray-400 group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-[22px]">folder_shared</span>
                </div>
                <div className="flex flex-col items-center text-center gap-0.5 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-white group-hover:text-primary">Collaborate</span>
                  <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">Sharing</span>
                </div>
              </div>

              <div className="group flex flex-col items-center gap-3 relative z-10 w-1/5 cursor-pointer">
                <div className="size-12 rounded-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center text-gray-400 group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-[22px]">trending_up</span>
                </div>
                <div className="flex flex-col items-center text-center gap-0.5 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-white group-hover:text-primary">Grow</span>
                  <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">Scale Up</span>
                </div>
              </div>
            </div>

            {/* Email Form */}
            <div className="w-full relative group max-w-[520px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <label className="relative flex flex-col sm:flex-row w-full bg-white dark:bg-[#1a2632] p-2 rounded-[2rem] shadow-xl shadow-primary/5 border border-[#dbe0e6] dark:border-gray-700">
                <div className="flex flex-1 items-center px-4 h-12 sm:h-14">
                  <span className="material-symbols-outlined text-[#617589] text-[22px]">mail</span>
                  <input
                    className="flex-1 w-full bg-transparent border-none outline-none focus:ring-0 px-3 text-[#111418] dark:text-white placeholder:text-[#9aa6b2] text-base"
                    placeholder="Enter your business email..."
                    type="email"
                  />
                </div>
                <button className="mt-2 sm:mt-0 w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white h-12 sm:h-14 px-8 rounded-full font-bold text-sm tracking-wide transition-all duration-200 transform active:scale-95 shadow-lg shadow-primary/20">
                  <span>Get Early Access</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </label>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-gray-400 text-sm">person</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-gray-300 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-gray-500 text-sm">person</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-gray-400 text-sm">person</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-primary text-white flex items-center justify-center text-[10px] font-bold">
                  +500
                </div>
              </div>
              <p className="text-[#617589] dark:text-slate-500 text-sm font-medium">
                Join 500+ Tunisian company owners waiting for launch.
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 opacity-80 pt-6 border-t border-gray-100 dark:border-gray-800">
              <div className="flex gap-4">
                <a className="text-[#617589] hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">public</span>
                </a>
                <a className="text-[#617589] hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">alternate_email</span>
                </a>
              </div>
              <p className="text-[#9aa6b2] text-xs font-normal flex items-center gap-1">
                Made with <span className="material-symbols-outlined text-secondary text-[14px]">favorite</span> in Tunisia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Section - Illustration */}
      <section className="relative flex flex-col flex-1 lg:w-1/2 items-center justify-center w-full bg-background-sand-dark dark:bg-[#15202b] overflow-hidden min-h-[500px] lg:min-h-auto p-10">
        <div className="absolute inset-0 bg-moucharabiya opacity-[0.12] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-overlay" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-background-sand-dark via-transparent to-transparent opacity-60"></div>
        <div className="relative z-10 w-full max-w-[340px] lg:max-w-[420px] mx-auto flex flex-col items-center justify-center">
          <svg className="w-full h-auto drop-shadow-2xl" fill="none" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 560 V240 C40 151.634 111.634 80 200 80 C288.366 80 360 151.634 360 240 V560" opacity="0.3" stroke="#137fec" strokeDasharray="4 4" strokeWidth="1.5"></path>
            <path d="M70 560 V250 C70 178.203 128.203 120 200 120 C271.797 120 330 178.203 330 250 V560" stroke="#137fec" strokeLinecap="round" strokeWidth="4"></path>
            <path d="M90 560 V260 C90 199.249 139.249 150 200 150 C260.751 150 310 199.249 310 260 V560" stroke="#137fec" strokeWidth="2"></path>
            <line stroke="#137fec" strokeWidth="1.5" x1="200" x2="200" y1="150" y2="560"></line>
            <circle cx="130" cy="220" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="165" cy="210" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="130" cy="290" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="165" cy="290" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="130" cy="360" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="165" cy="360" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="130" cy="430" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="165" cy="430" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="130" cy="500" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="165" cy="500" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="235" cy="210" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="270" cy="220" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="235" cy="290" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="270" cy="290" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="235" cy="360" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="270" cy="360" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="235" cy="430" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="270" cy="430" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="235" cy="500" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <circle cx="270" cy="500" fill="#E07A5F" opacity="0.8" r="3"></circle>
            <path d="M240 560 V420 C240 397.909 257.909 380 280 380 C302.091 380 320 397.909 320 420 V560" fill="white" fillOpacity="0.2" stroke="#137fec" strokeWidth="1.5"></path>
            <circle cx="255" cy="425" fill="#137fec" r="4"></circle>
            <path d="M200 60 V80" stroke="#E07A5F" strokeLinecap="round" strokeWidth="2"></path>
            <circle cx="200" cy="50" fill="#E07A5F" r="4"></circle>
            <path d="M20 560 L380 560" opacity="0.2" stroke="#137fec" strokeWidth="1"></path>
          </svg>
          <div className="mt-8 text-center flex flex-col gap-1">
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Innovation Roots</p>
            <p className="text-[#617589] dark:text-slate-400 text-sm italic">Inspired by Sidi Bou Said architecture</p>
          </div>
        </div>
      </section>
    </div>
  );
}
