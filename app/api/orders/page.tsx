// app/admin/orders/page.tsx
import React from 'react';

const OrdersPage = async () => {
  const res = await fetch('http://localhost:3000/api/orders', { cache: 'no-store' });
  const orders = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: any) => (
            <tr key={order._id}>
              <td className="border p-2">{order.customerName}</td>
              <td className="border p-2">{order.customerEmail}</td>
              <td className="border p-2">${order.totalPrice}</td>
              <td className="border p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
