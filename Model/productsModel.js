import {pool} from "../config/config.js"

const getAllProducts = async () => {
    let [data] = await pool.query(`
      SELECT p.product_id, p.name AS product_name, p.description, p.size, p.color, p.price, p.stock, p.image_url, c.category_name
      FROM Products p
      INNER JOIN Product_Categories c ON p.category_id = c.category_id
    `);
    return data;
  };

const getSingleProduct = async (product_id) => {
    let [data] = await pool.query(`
      SELECT p.product_id, p.name AS name, p.description, p.size, p.color, p.price, p.stock, p.image_url, c.category_name
      FROM Products p
      INNER JOIN Product_Categories c ON p.category_id = c.category_id
      WHERE p.product_id = ?`, [product_id]);
    return data;
  };

 const insertProduct = async (category_id, name, description, size, color, price, stock, image_url) => {
    await pool.query("INSERT INTO Products (category_id, name, description, size, color, price, stock, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
      [category_id, name, description, size, color, price, stock, image_url]);
    return "Product inserted successfully!";
  };
 const updateProduct = async (product_id, data) => {
    const { category_id, name, description, size, color, price, stock, image_url } = data;
    let updateFields = [];
    let updateValues = [];
  
    if (category_id) {
      updateFields.push("category_id = ?");
      updateValues.push(category_id);
    }
    if (name) {
      updateFields.push("name = ?");
      updateValues.push(name);
    }
    if (description) {
      updateFields.push("description = ?");
      updateValues.push(description);
    }
    if (size) {
      updateFields.push("size = ?");
      updateValues.push(size);
    }
    if (color) {
      updateFields.push("color = ?");
      updateValues.push(color);
    }
    if (price) {
      updateFields.push("price = ?");
      updateValues.push(price);
    }
    if (stock) {
      updateFields.push("stock = ?");
      updateValues.push(stock);
    }
    if (image_url) {
      updateFields.push("image_url = ?");
      updateValues.push(image_url);
    }
  
    updateValues.push(product_id);
  
    const query = `UPDATE Products SET ${updateFields.join(", ")} WHERE product_id = ?`;
    await pool.query(query, updateValues);
    return "Product updated successfully!";
};

const deleteProduct = async (product_id) => {
    await pool.query("DELETE FROM Products WHERE product_id = ?", [product_id]);
    return "Product successfully deleted";
};

export {getAllProducts, getSingleProduct, insertProduct, updateProduct, deleteProduct}
