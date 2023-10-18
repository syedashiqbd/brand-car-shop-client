import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const BrandPage = () => {
  const { brandName } = useParams();
  const loadingBrand = useLoaderData();

  const brands = loadingBrand.filter((brand) => brand.brand === brandName);

  return (
    <div className="lg:w-[1152px] w-[400px] mx-auto">
      <Navbar></Navbar>
      {/* Slider */}
      <div className="carousel w-full h-[500px] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          {brands?.map((brand) => (
            <img
              key={brand._id}
              src={brand.photo}
              className="w-full h-[500px] object-cover "
            />
          ))}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* {brands?.map((brand) => (
            <img
              key={brand._id}
              src={brand.photo}
              className="w-full h-[500px] object-cover "
            />
          ))} */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* {brands?.map((brand) => (
            <img
              key={brand._id}
              src={brand.photo}
              className="w-full h-[500px] object-cover "
            />
          ))} */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          {/* {brands?.map((brand) => (
            <img
              key={brand._id}
              src={brand.photo}
              className="w-full h-[500px] object-cover "
            />
          ))} */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* product card */}
      <h1 className="divider my-10 text-gray-700 text-4xl font-semibold">
        Our Luxuries Collection for You
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {brands?.map((brand) => (
          <div key={brand._id}>
            <Link className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
              <img
                alt="Home"
                src={brand.photo}
                className="h-56 w-full rounded-md object-cover"
              />

              <div className="mt-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">${brand.price}</p>
                    <p className="font-medium ">{brand.name}</p>
                    <div className="flex gap-1">
                      <BsStarFill className="text-amber-400"></BsStarFill>
                      <BsStarFill className="text-amber-400"></BsStarFill>
                      <BsStarFill className="text-amber-400"></BsStarFill>
                      <BsStarFill className="text-amber-400"></BsStarFill>
                      <BsStarHalf className="text-amber-400"></BsStarHalf>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="whitespace-nowrap text-yellow-600  text-lg font-bold">
                      {brand.brand}
                    </span>

                    <p className="text-gray-500 mt-2">{brand.type}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <form className="mt-4 w-full">
                    <Link to={`/productDetails/${brand._id}`}>
                      <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                        Details
                      </button>
                    </Link>
                  </form>
                  <form className="mt-4 w-full">
                    <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
