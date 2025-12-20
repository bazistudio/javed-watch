import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    customerName: String,
    email: String,
    phone: String,
    products: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalAmount: Number,
    paymentMethod: {
      type: String,
      enum: ['Cash', 'EasyPaisa', 'JazzCash'],
      default: 'Cash',
    },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Shipped'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model('Order', OrderSchema);
