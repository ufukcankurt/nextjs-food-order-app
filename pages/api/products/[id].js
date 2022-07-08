import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product"

export default async function handler(req, res) {

    const { method, query: { id } } = req;

    dbConnect();

    // GET ALL PIZZA
    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // CREATE PIZZA
    if (method === "PUT") {
        try {
            const product = await Product.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    // DELETE PIZZA
    if (method === "DELETE") {
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json("The Product has been deleted!");
        } catch (error) {
            res.status(500).json(error)
        }
    }

}
