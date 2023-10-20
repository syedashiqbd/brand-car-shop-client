import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Navbar from './Navbar';
import BrandCard from '../components/BrandCard';

const Home = () => {
  const brands = useLoaderData();

  return (
    <div className="bg-white dark:bg-gray-700">
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="lg:w-[1152px] w-[400px] mx-auto mt-10 pb-10 ">
        {/* State */}
        <div className="flex justify-center">
          <div className=" lg:flex gap-10 ">
            <div className="stat max-w-xs">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Sales</div>
              <div className="stat-value text-primary">25.6B</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat max-w-xs">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Brand Contact </div>
              <div className="stat-value text-secondary">39</div>
              <div className="stat-desc">6% each year</div>
            </div>
            <div className="stat max-w-xs">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://www.jetpunk.com/img/user-photo-library/73/73f1b0cc24-450.png" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Customer Satisfaction</div>
              <div className="stat-desc text-secondary">31 unit in Quae</div>
            </div>
          </div>
        </div>

        {/* Brand name area */}
        <h1 className="divider my-16  text-4xl font-bold text-gray-900 dark:text-gray-400">
          CHOOSE YOUR BRAND
        </h1>
        <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
          {brands?.map((brand) => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
        <section>
          <div className=" py-8 sm:py-12  lg:py-16 ">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl text-gray-800 dark:text-gray-400">
                  Let us help you
                </h2>

                <p className="mt-4 text-gray-900 dark:text-gray-500">
                  Tesla, Inc. is an American multinational automotive and clean
                  energy company headquartered in Austin, Texas, which designs
                  and manufactures electric vehicles, stationary battery energy
                  storage devices from home to grid-scale, solar panels and
                  solar shingles, and related products and services
                </p>

                <Link className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                  Pick Yours Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
