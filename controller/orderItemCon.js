import { getOrderItems, insertOrderItems, deleteOrderItems, updateOrderItems } from "../model/orderItemsDb.js";

const getOrderItemsCon = async (req, res) => {
    try{
        res.status(200).json({order_items: await getOrderItems()});
    }catch (err) {
        res.status(500).json ({error: err.message})
    }
};


const insertOrderItemsCon = async (req,res) => {
    try{
      let  {order_id, product_id, quantity, price} = req.body;
      console.log(req.body);
      const order_items = await insertOrderItems(order_id, product_id, quantity, price);
      res.status(200).json({order_items});
    }catch(err){
      res.status(500).json({error: err.message})
    }
  };


  const deleteOrderItemsCon = async (req,res) => {
    try{
      let {order_item_id} = req.params;
      console.log(req.params);
  
      const order_items = await deleteOrderItems (order_item_id);
      res.status(200).json({order_items})
    }catch(err){
      res.status(500).json({error: err.massage});
    }
  };


  const updateOrderItemsCon = async (req, res) => {
    try{
      let {order_item_id} = req.params;
      let {order_id, product_id, quantity, price} = req.body
      console.log(req.params)
  
      const order_items = await updateOrderItems (order_id, product_id, quantity, price, order_item_id);
      res.status(500).json({order_items});
    }catch(err){
      res.status(500).json({message: err.message});
    }
  }

export {getOrderItemsCon, insertOrderItemsCon, deleteOrderItemsCon, updateOrderItemsCon}