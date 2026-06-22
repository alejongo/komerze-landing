import React from "react";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-[101] transform transition-transform duration-300 ease-in-out">
            <div className="p-6 bg-white h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    Komerze
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="space-y-4">
                <a
                  href="#caracteristicas"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Características
                </a>
                <a
                  href="#beneficios"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Beneficios
                </a>
                <a
                  href="#demo"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Demo
                </a>
                <a
                  href="#contacto"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Solicitar Demo
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
