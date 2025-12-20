async function getOrders() {
  const res = await fetch('http://localhost:3000/api/orders', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Payment</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order: any) => (
              <tr key={order._id} className="border-t">
                <td className="p-4">
                  <div className="font-medium">{order.customerName}</div>
                  <div className="text-xs text-slate-500">{order.email}</div>
                </td>
                <td className="p-4 font-semibold">
                  Rs {order.totalAmount}
                </td>
                <td className="p-4">{order.paymentMethod}</td>
                <td className="p-4">
                  <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-700">
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-xs text-slate-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
