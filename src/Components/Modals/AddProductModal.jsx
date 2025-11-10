import {useEffect, useState} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../../api/productAPI.js";
import {getAllCategories} from "../../api/categoryAPI.js";
import LoadingDots from "../Custom/loadingDots.jsx";
import {useContextElement} from "../../context/Context.jsx"; // ← you'll create this API call

function AddProductModal({ setShowAddProduct }) {
    const { currentUser } = useContextElement();
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

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const resp = await getAllCategories();
                setCategories(resp.data)
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading || categories.length === 0) {
        return <LoadingDots />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const { categoryId, categoryName, name, subtitle, description, price, stock } = formData;

        if (!categoryId || !categoryName.trim()) return toast.error("Select a Category");
        if (!name.trim()) return toast.error("Product name is required");
        if (!subtitle.trim()) return toast.error("Subtitle is required");
        if (!description.trim()) return toast.error("Description is required");
        if (!price.trim()) return toast.error("Price is required");
        if (!stock.trim()) return toast.error("Stock is required");
        // ...other validations

        try {
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

            const res = await addProduct(data);

            if (res.success) {
                toast.success("Product added successfully!");
                setShowAddProduct(false);
            } else {
                toast.error(res.message || "Failed to add product");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error adding product.");
        }

        setLoading(false);
    };

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
            role="dialog"
            onClick={() => setShowAddProduct(false)}
        >
            <div
                className="modal-dialog modal-dialog-centered modal-lg"
                role="document"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h2 className="mb-0 text-uppercase">Add Product</h2>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowAddProduct(false)}
                        ></button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleAddProduct}>
                            {/* CATEGORY DROPDOWN */}
                            <div className="mb-3">
                                <label className="form-label">Select Category</label>
                                <select
                                    name="categoryId"
                                    className="form-select"
                                    value={formData.categoryId}
                                    onChange={(e) => {
                                        const selected = categories.find(
                                            cat => cat.id === parseInt(e.target.value)
                                        );
                                        setSelectedCategory(selected || {});
                                        setFormData(prev => ({
                                            ...prev,
                                            categoryId: selected?.id || "",
                                            categoryName: selected?.name || "",
                                            name: "",
                                        }));
                                    }}
                                >
                                    <option value="">-- Select Category --</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="row mb-3">
                                {/* SUBCATEGORY DROPDOWN */}
                                {selectedCategory?.subcategories?.length > 0 && (
                                    <div className="mb-3">
                                        <label className="form-label">Select Subcategory</label>
                                        <select
                                            name="subcategory"
                                            className="form-select"
                                            value={formData.name || ""}
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                    ...prev,
                                                    name: e.target.value
                                                }))
                                            }
                                        >
                                            <option value="">-- Select Subcategory --</option>
                                            {selectedCategory.subcategories.map((sub, i) => (
                                                <option key={i} value={sub}>
                                                    {sub}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subtitle"
                                        placeholder="Subtitle | e.g: Farm-fresh chicken"
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
                                <label className="form-label">Upload Product Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={(e) => setImg(e.target.files[0])}
                                />
                                {img && (
                                    <img
                                        src={URL.createObjectURL(img)}
                                        alt="Preview"
                                        style={{
                                            width: "120px",
                                            height: "120px",
                                            objectFit: "cover",
                                            marginTop: "10px",
                                            borderRadius: "8px",
                                            border: "1px solid #ccc",
                                        }}
                                    />
                                )}
                            </div>

                            { loading ?
                                <LoadingDots />
                                :
                                <div className="d-flex justify-content-end gap-2 mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-black w-100"
                                        onClick={() => setShowAddProduct(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-red w-100"
                                        disabled={loading}
                                    >
                                        Add Product
                                    </button>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;
