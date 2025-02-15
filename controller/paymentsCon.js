import { getPayments, insertPayment, deletePayment,updatePayment } from "../model/paymentsDb.js";

const getPaymentsCon = async (req, res) => {
  try {
    res.status(200).json({ payments: await getPayments() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const insertPaymentCon = async (req, res) => {
    try {
      let { order_id, amount, method, status } = req.body;
      console.log(req.body);
      
      const payments = await insertPayment(order_id, amount, method, status);
      res.status(200).json({ payments });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const deletePaymentCon = async (req, res) => {
    try {
      let { payment_id } = req.params;
      console.log(req.params);
  
      const payments = await deletePayment(payment_id);
      res.status(200).json({ payments });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const updatePaymentCon = async (req, res) => {
    try {
      let { payment_id } = req.params;
      let { order_id, amount, method, status } = req.body;
      console.log(req.params);
  
      const payments = await updatePayment(order_id, amount, method, status, payment_id);
      res.status(200).json({ payments });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

export { getPaymentsCon, insertPaymentCon, deletePaymentCon, updatePaymentCon };
