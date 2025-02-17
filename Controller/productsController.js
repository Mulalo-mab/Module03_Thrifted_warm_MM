import{
    getAllProducts,
    getSingleProduct,
    insertProduct,
    updateProduct,
    deleteProduct
} from "../Model/productsModel.js"

const getAllProductsCon = async (req, res) => {
    res.json({
      All_Products: await getAllProducts(),
    });
}

const getSingleProductCon = async (req, res) => {
    res.json({
      single_product: await getSingleProduct(req.params.product_id),
    });
}

const insertProductCon = async (req, res) => {
    const { category_id, name, description, size, color, price, stock, image_url } = req.body;
    res.json({
      new_product: await insertProduct(category_id, name, description, size, color, price, stock, image_url),
    });
}

const updateProductCon = async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.params.product_id, req.body);
    res.status(200).json({ message: updatedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteProductCon =  async (req, res) => {
    res.json({
      deleted_product: await deleteProduct(req.params.product_id),
    });
}

export {getAllProductsCon, getSingleProductCon, insertProductCon, updateProductCon, deleteProductCon}