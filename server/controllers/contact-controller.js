import ConatctModel from "../models/conatct-model.js";


// Contact Message API: POST /api/contact/message
export const contactMessage = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newMessage = new ConatctModel({
      name,
      phone,
      email,
      message,
    });

    await newMessage.save();

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};
