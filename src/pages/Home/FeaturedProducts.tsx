import { NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <div className="py-5">
      <h1 className="text-5xl font-bold text-orange-900 text-center my-3 uppercase">
        Features
      </h1>
      <div className="flex grid-cols-3 py-5 items-center justify-center space-x-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-title justify-between">
              <h2>Shoes!</h2>
              <h2>
                Price: <span className="text-red-500">$16</span>
              </h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">View Details</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-title justify-between">
              <h2>Shoes!</h2>
              <h2>
                Price: <span className="text-red-500">$16</span>
              </h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">View Details</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-title justify-between">
              <h2>Shoes!</h2>
              <h2>
                Price: <span className="text-red-500">$16</span>
              </h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <NavLink to="/allProducts">
          <button className="btn btn-warning rounded-full">View All</button>
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedProducts;
