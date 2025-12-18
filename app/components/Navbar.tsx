export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="text-xl font-bold">WatchStore</h1>
        <div className="flex gap-4">
          <a href="/">Home</a>
          <a href="/store">Store</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
