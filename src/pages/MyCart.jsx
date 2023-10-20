import { useLoaderData } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { useState } from 'react';

const MyCart = () => {
  const loadProducts = useLoaderData();
  const [products, setProducts] = useState(loadProducts);

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
              const remaining = loadProducts.filter((prod) => prod._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="lg:w-[1152px] w-[400px] mx-auto">
      <Navbar></Navbar>
      <div className="overflow-x-auto ">
        <h1 className="divider my-10 text-gray-700 text-4xl font-semibold">
          Your Cart Product
        </h1>
        <table className="table ">
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
  );
};

export default MyCart;
