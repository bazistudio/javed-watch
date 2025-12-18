export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto p-4 text-center text-sm">
        © {new Date().getFullYear()} WatchStore. All rights reserved.
      </div>
    </footer>
  );
}
