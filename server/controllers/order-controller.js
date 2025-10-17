import OrderModel from '../models/order-model.js';

export const BookServices = async (req, res) => {
    try {
        const { name, phone, email, description, category, date, time } = req.body;
        
        if (!name || !phone || !email || !description || !category || !date || !time) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ success: false, message: "Invalid phone number" });
        }

        if (isNaN(new Date(date).getTime())) {
            return res.status(400).json({ success: false, message: "Invalid date format" });
        }

        const newOrder = new OrderModel({ name, phone, email, description, category, date, time });
        await newOrder.save();

        return res.status(201).json({ success: true, message: "Service successfully booked", order: newOrder });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
