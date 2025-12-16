import { Construction } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full space-y-12 text-center animate-in fade-in duration-1000">

          <div className="space-y-8">
            <img
              src="/zerido.com_(2).png"
              alt="Zerido Logo"
              className="h-32 mx-auto object-contain animate-in fade-in duration-700 delay-200"
            />

            <div className="space-y-4 animate-in fade-in duration-700 delay-300">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Zerido Marketplace is Coming Soon
              </h1>

              <p className="text-xl text-neutral-400">
                A global vehicle marketplace for cars, motorcycles, trucks and more.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 space-y-4
                        animate-in fade-in duration-700 delay-500
                        hover:border-neutral-700 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 text-amber-500">
              <Construction className="w-5 h-5" />
              <span className="font-semibold">Platform under construction</span>
            </div>

            <p className="text-neutral-400 text-base leading-relaxed">
              We are building a worldwide showroom connecting buyers and sellers.
            </p>

            <p className="text-neutral-500 text-sm font-medium pt-2">
              Launching soon.
            </p>
          </div>

        </div>
      </main>

      <footer className="py-8 px-4 text-center space-y-4 border-t border-neutral-900">
        <div className="space-y-2">
          <p className="text-neutral-500 text-sm">
            Zerido is an independent online vehicle marketplace.
          </p>
          <p className="text-neutral-600 text-sm">
            We do not intermediate negotiations or payments between users.
          </p>
        </div>

        <p className="text-neutral-600 text-sm">
          &copy; Zerido.com &mdash; All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
