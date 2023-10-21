import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const ProductDetails = () => {
  const { user } = useContext(authContext);
  const userEmail = user.email;

  const allProducts = useLoaderData();
  const { id } = useParams();

  const product = allProducts.find((prod) => prod._id == id);

  const name = product.name;
  const brand = product.brand;
  const type = product.type;
  const price = product.price;
  const description = product.description;
  const rating = product.rating;
  const photo = product.photo;

  const cartProduct = {
    name,
    brand,
    type,
    price,
    description,
    rating,
    photo,
    userEmail,
  };

  const handleAddToCart = () => {
    console.log(cartProduct);
    fetch('https://prestige-car-hub-server.vercel.app/cartProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product added to Cart Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="bg-white dark:bg-gray-700 pb-10">
      <Navbar></Navbar>
      <div className="lg:w-[1152px] w-[400px] mx-auto">
        {/* product details page */}
        <h1 className="divider my-10 text-gray-700 lg:text-4xl text-2xl font-semibold dark:text-white">
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
              <div className="lg:flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">${product.price}</p>
                  <p className="font-medium dark:text-white ">{product.name}</p>
                  <div className="flex gap-1">
                    <BsStarFill className="text-amber-400"></BsStarFill>
                    <BsStarFill className="text-amber-400"></BsStarFill>
                    <BsStarFill className="text-amber-400"></BsStarFill>
                    <BsStarFill className="text-amber-400"></BsStarFill>
                    <BsStarHalf className="text-amber-400"></BsStarHalf>
                  </div>
                </div>
                <div className="text-end lg:mt-0 mt-10">
                  <span className="whitespace-nowrap text-yellow-600  text-lg font-bold">
                    {product.brand}
                  </span>
                  <p className="text-gray-500 mt-2">{product.type}</p>
                </div>
              </div>
              <p className="mt-5 dark:text-gray-300">{product.description}</p>
              <div className="flex gap-4">
                <form className="mt-4 lg:w-1/4 w-full mx-auto">
                  <button
                    onClick={handleAddToCart}
                    className="block w-full rounded text-gray-950 bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
