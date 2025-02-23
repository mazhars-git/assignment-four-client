import { Plus } from "lucide-react";

const ManageProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center shadow-md px-2">
        <h1 className="text-2xl font-semibold">Manage Products</h1>
        <button className="btn btn-info text-white mb-2">
          Add Product <Plus />
        </button>
      </div>
      <div className="pt-8">
        <h1 className="text-4xl text-blue-400">This is Manage Products page</h1>
      </div>
    </div>
  );
};

export default ManageProducts;
