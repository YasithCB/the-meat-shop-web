import { Link } from "react-router-dom";

const FoodItemCard = ({img,title,content,price}) => {
    return (
        <div className="single-menu-items p-2">
        <div className="details">
            <div className="menu-item-thumb item-thumb">
                <img src={img} alt="thumb" className='item-thumb-img'/>
            </div>
            <div className="menu-content">
                <Link to="/menu">
                    <h3>{title}</h3>
                </Link>
                <p className='pe-5'>{content}</p>
            </div>
        </div>
        <h6>{price}</h6>
    </div>
    );
};

export default FoodItemCard;