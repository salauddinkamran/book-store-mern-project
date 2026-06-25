const Order = require("./order.model");

const createAOrder = async () => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    console.log("Error creating order", error);
    res.status(500).json({ message: "Faild to create order" });
  }
};
module.exports = {
  createAOrder,
};
