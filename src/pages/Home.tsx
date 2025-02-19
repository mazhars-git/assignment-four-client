import FeaturedProducts from "./Home/FeaturedProducts";
import Header from "./Home/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
