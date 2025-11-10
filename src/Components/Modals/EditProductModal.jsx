import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllCategories } from "../../api/categoryAPI.js";
import { updateProduct } from "../../api/productAPI.js";
import LoadingDots from "../Custom/loadingDots.jsx";
import { useContextElement } from "../../context/Context.jsx";
import {getImageUrl} from "../../utils/util.js";
import { ArrowBigRightDash } from 'lucide-react';

function EditProductModal({ product, setShowEditProduct }) {
    const { currentUser, setProducts } = useContextElement();
    const [formData, setFormData] = useState({
        categoryId: "",
        categoryName: "",
        name: "",
        subtitle: "",
        description: "",
        price: "",
        stock: "",
    });

    const [img, setImg] = useState(null);
    const [existingImg, setExistingImg] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch categories and existing product
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {

                const resp = await getAllCategories();

                setCategories(resp.data);

                setFormData({
                    categoryId: product.category_id,
                    categoryName: product.category_name,
                    name: product.name,
                    subtitle: product.subtitle || "",
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                });

                setExistingImg(product.img);
            } catch (err) {
                console.error(err);
                toast.error("Failed to load product details.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();

        const { categoryId, name, description, price, stock } = formData;

        if (!categoryId) return toast.error("Select a Category");
        if (!name.trim()) return toast.error("Product name is required");
        if (!description.trim()) return toast.error("Description is required");
        if (!price) return toast.error("Price is required");
        if (!stock) return toast.error("Stock is required");

        try {
            setLoading(true);
            const data = new FormData();

            data.append("category_id", formData.categoryId);
            data.append("category_name", formData.categoryName);
            data.append("supplier_id", currentUser.id);
            data.append("name", formData.name);
            data.append("subtitle", formData.subtitle);
            data.append("description", formData.description);
            data.append("price", formData.price);
            data.append("stock", formData.stock);

            if (img) data.append("img", img);

            const res = await updateProduct(product.id, data);

            console.log('img')
            console.log(URL.createObjectURL(img))

            if (res.success) {
                toast.success("Product updated successfully!");
                setShowEditProduct(false);

                // Update local products state immediately
                setProducts((prevProducts) =>
                    prevProducts.map((p) =>
                        p.id === product.id
                            ? { ...p, ...formData, img: img ? URL.createObjectURL(img) : p.img } // update only changed fields
                            : p
                    )
                );
            } else {
                toast.error(res.message || "Failed to update product");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error updating product.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingDots />;

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setShowEditProduct(false)}
        >
            <div
                className="modal-dialog modal-dialog-centered modal-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h2 className="mb-0 text-uppercase">Edit Product</h2>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowEditProduct(false)}
                        ></button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleUpdateProduct}>
                            <div className="mb-3">
                                <label className="form-label">Select Category</label>
                                <select
                                    name="categoryId"
                                    className="form-select"
                                    value={formData.categoryId}
                                    onChange={(e) => {
                                        const selected = categories.find(
                                            (cat) => cat.id === parseInt(e.target.value)
                                        );
                                        setFormData((prev) => ({
                                            ...prev,
                                            categoryId: selected?.id || "",
                                            categoryName: selected?.name || "",
                                        }));
                                    }}
                                >
                                    <option value="">-- Select Category --</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control text-uppercase"
                                        name="name"
                                        placeholder="Product Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subtitle"
                                        placeholder="Subtitle (Optional)"
                                        value={formData.subtitle}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    name="description"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="form-control"
                                        name="price"
                                        placeholder="Price (AED)"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="stock"
                                        placeholder="Stock Quantity"
                                        value={formData.stock}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Change Product Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={(e) => setImg(e.target.files[0])}
                                />
                                <div className="d-flex gap-3 mt-2 align-items-center">
                                    {existingImg && (
                                        <img
                                            src={getImageUrl(existingImg)}
                                            alt="Current"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                borderRadius: "8px",
                                                border: "1px solid #ccc",
                                                objectFit: "cover",
                                            }}
                                        />
                                    )}
                                    {img && (
                                       <div className='d-flex gap-3 align-items-center'>
                                           <ArrowBigRightDash  />
                                           <img
                                               src={URL.createObjectURL(img)}
                                               alt="Preview"
                                               style={{
                                                   width: "100px",
                                                   height: "100px",
                                                   borderRadius: "8px",
                                                   border: "1px solid #ccc",
                                                   objectFit: "cover",
                                               }}
                                           />
                                       </div>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2 mt-4">
                                <button
                                    type="button"
                                    className="btn btn-black w-100"
                                    onClick={() => setShowEditProduct(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-danger btn-red w-100"
                                    disabled={loading}
                                >
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProductModal;
