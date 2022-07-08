import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product"

export default async function handler(req, res) {

    const { method, query: { id }, cookies } = req;

    const token = cookies.token;

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
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json("Not Authenticated!")
        }
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
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json("Not Authenticated!")
        }
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json("The Product has been deleted!");
        } catch (error) {
            res.status(500).json(error)
        }
    }

}
