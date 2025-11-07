import { useState } from "react";
import { addReview } from "../../api/reviewAPI.js";
import { ArrowRightFromLine } from 'lucide-react';
import {toast} from "react-toastify";
import {useContextElement} from "../../context/Context.jsx";

const ReviewForm = ({ productId, onSuccess }) => {
    const {  currentUser } = useContextElement();

    const [rating, setRating] = useState(4);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addReview({
                product_id: productId,
                user_name: currentUser.name,
                rating,
                comment,
            });

            toast.success("Review added successfully!");
            onSuccess && onSuccess();
            setRating(0);
            setComment("");
        } catch (err) {
            console.error("Error adding review:", err);
            toast.error("Error adding review: ", err);
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <h3 className="inner-title">Add a Review</h3>

            <div className='d-flex gap-4 mb-1'>
                {/* Rating selection (example using buttons) */}
                <p>Rate this product</p>
                <div className="mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{
                                cursor: "pointer",
                                color: star <= rating ? "#FFC107" : "#E0E0E0",
                                fontSize: "32px",   // increase size here
                                marginRight: "4px"  // optional spacing
                            }}
                            onClick={() => setRating(star)}
                        >
                      ★
                    </span>
                    ))}
                </div>
            </div>


            <textarea
                placeholder="Write a Review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={5}
                className="form-control mb-4"
                required
            />

            <button type="submit" className="theme-btn text-uppercase fw-bold">
                Post A Comment
                <ArrowRightFromLine className='ms-4' />
            </button>
        </form>
    );
};

export default ReviewForm;
