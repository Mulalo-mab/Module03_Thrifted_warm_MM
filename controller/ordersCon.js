import {deleteOrder, getAllOrders, insertOrder, updateOrder, getOrderById} from "../model/ordersDb.js"

const getOrdersCon = async (req, res) => {
  try {
    // const products = await Product.getAllProducts();
    res.status(200).json({orders: await getAllOrders()});
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};


const getOrderByIdCon = async (req, res) => {
  try {
    const { order_id } = req.params;  // Assuming order_id comes from URL params
    const order = await getOrderById(order_id);
    
    if (order.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
};

const insertOrderCon = async (req,res) => {
  try{
    let  {user_id, total_price,status} = req.body;
    console.log(req.body);
    const orders = await insertOrder(user_id, total_price,status);
    res.status(200).json({orders});
  }catch(err){
    res.status(500).json({error: err.message})
  }
};



const deleteOrderCon = async (req,res) => {
  try{
    let {order_id} = req.params;
    console.log(req.params);

    const orders = await deleteOrder (order_id);
    res.status(200).json({orders})
  }catch(err){
    res.status(500).json({error: err.massage});
  }
}

const updateOrderCon = async (req, res) => {
  try{
    let {order_id} = req.params;
    let {user_id, total_price, status} = req.body
    console.log(req.params)

    const orders = await updateOrder (user_id, total_price, status, order_id);
    res.status(500).json({orders});
  }catch(err){
    res.status(500).json({message: err.message});
  }
}


export{getOrdersCon, insertOrderCon, deleteOrderCon, updateOrderCon, getOrderByIdCon}
