export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Total Products</p>
          <h2 className="text-2xl font-bold">6</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Orders</p>
          <h2 className="text-2xl font-bold">12</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Revenue</p>
          <h2 className="text-2xl font-bold">$24,500</h2>
        </div>
      </div>
    </div>
  );
}
