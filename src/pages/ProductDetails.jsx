import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ProductDetails = () => {
  const allProducts = useLoaderData();
  const { id } = useParams();

  const product = allProducts.find((prod) => prod._id == id);
  console.log(product);
  return (
    <div className="lg:w-[1152px] w-[400px] mx-auto">
      <Navbar></Navbar>

      {/* product details page */}
      <h1 className="divider my-10 text-gray-700 text-4xl font-semibold">
        Product Details
      </h1>

      <div>
        <Link className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt="Home"
            src={product.photo}
            className="h-[500px] w-full rounded-md object-cover"
          />

          <div className="mt-2">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">${product.price}</p>
                <p className="font-medium ">{product.name}</p>
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
                  {product.brand}
                </span>

                <p className="text-gray-500 mt-2">{product.type}</p>
              </div>
            </div>
            <p className="mt-5">{product.description}</p>

            <div className="flex gap-4">
              <form className="mt-4 lg:w-1/4 w-full mx-auto">
                <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
