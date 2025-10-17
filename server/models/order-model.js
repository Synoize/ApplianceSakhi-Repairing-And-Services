import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    category: {
        type: String,
        enum: ["A.C. Repair Service", "Refrigerator Repair", "Washing Machine Repair", "Microwave Repair", "Water Purifier Repair", "Geyser Repair"],
        required: true
    },
    date: { type: Date, required: true },
    time: { type: String, default: "00:00" },
    payment: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ["pending", "confirmed", "dispatch", "completed", "cancelled"],
        default: "pending"
    },
})

const OrderModel = mongoose.models.order || mongoose.model('order', orderSchema)

export default OrderModel