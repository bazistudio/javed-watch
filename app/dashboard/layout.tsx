import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      
      {/* Sidebar */}
      <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-64px)] bg-slate-900 text-white p-6">
        <h2 className="text-lg font-bold mb-8 tracking-wider">
          ADMIN DASHBOARD
        </h2>

        <nav className="space-y-4 text-sm">
          <Link href="/admin" className="block hover:text-amber-400">
            Dashboard
          </Link>
          <Link href="/admin/products" className="block hover:text-amber-400">
            Products
          </Link>
          <Link href="/admin/add-product" className="block hover:text-amber-400">
            Add Product
          </Link>
          <Link href="/admin/orders" className="block hover:text-amber-400">
            Orders
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 mt-16 flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
