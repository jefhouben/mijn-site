export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">MedStudy AI</div>
        <nav className="flex gap-6 text-sm">
          <a href="#features" className="hover:opacity-70">
            Features
          </a>
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}