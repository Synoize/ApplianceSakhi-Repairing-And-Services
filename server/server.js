import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/db.js';
import orderRouter from './routes/order-route.js';
import contactRouter from './routes/contact-route.js';
import OrderModel from './models/order-model.js';

// app config
const app = express();
const PORT = process.env.PORT || 4000
const corsOptions = {
    origin: [
        "http://localhost:5174",
        "http://localhost:5173",
        "https://appliancesakhi.in"
    ],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

// middlewares
app.use(express.json())
app.use(cors(corsOptions))

//api endpoints
app.use('/api/service', orderRouter)
app.use('/api/contact', contactRouter)

// API to get dashboard data: /api/dashboard
app.get('/api/dashboard', async (req, res) => {
  try {
    const orders = await OrderModel.find({});

    const totalOrders = orders.length;

    const dashData = {
      totalOrders,
    };

    res.json({ success: true, dashData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});


app.get('/', (req, res) => {
    res.send('API IS WORKING...')
})

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is listen on PORT : ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();
