import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Navbar from './Navbar';
import BrandCard from '../components/BrandCard';

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>

      {/* Brand name area */}
      <div className="lg:w-[1152px] w-[400px] mx-auto my-10">
        <h1 className="divider my-16 text-gray-700 text-4xl font-semibold">
          CHOOSE YOUR BRAND
        </h1>
        <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
          {brands?.map((brand) => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
