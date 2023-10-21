import { Link, useLoaderData } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { authContext } from '../provider/AuthProvider';

const MyCart = () => {
  const { user } = useContext(authContext);
  const cartEmail = user.email;

  const loadProducts = useLoaderData();

  const selectedProduct = loadProducts?.filter(
    (cartProd) => cartProd.userEmail === cartEmail
  );

  const [products, setProducts] = useState(selectedProduct);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://prestige-car-hub-server.vercel.app/cartProduct/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Product has been deleted.', 'success');
              const remaining = products.filter((prod) => prod._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-700 pb-10">
      <Navbar></Navbar>
      <div className="lg:w-[1152px] w-[400px] mx-auto ">
        {products.length ? (
          <div>
            <h1 className="divider my-10 text-gray-700 lg:text-4xl text-2xl font-semibold">
              Your Cart Product
            </h1>
            <div className="overflow-x-auto min-h-screen ">
              <table className="table dark:text-white">
                {/* head */}
                <thead className=" bg-indigo-600 text-white text-base font-semibold">
                  <tr>
                    <th>SL</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((prod, index) => (
                    <tr key={prod._id}>
                      <th>{index + 1}</th>
                      <td>
                        <img className="rounded w-20" src={prod.photo} />
                      </td>
                      <td>{prod.name}</td>
                      <td>{prod.brand}</td>
                      <td>{prod.type}</td>
                      <td>$ {prod.price}</td>
                      <td className="  ">
                        <AiFillDelete
                          className="text-3xl  text-red-500 cursor-pointer mx-auto"
                          onClick={() => handleDelete(prod._id)}
                        ></AiFillDelete>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid content-center text-center h-[600px] ">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              You have not buy anything.
            </h1>
            <Link className="text-indigo-600 mt-6" to="/">
              First shopping something !!!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
