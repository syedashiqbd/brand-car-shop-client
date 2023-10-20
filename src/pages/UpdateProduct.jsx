import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, price, description, rating, photo } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const product = { name, brand, type, price, description, rating, photo };
    console.log(product);

    fetch(`https://prestige-car-hub-server.vercel.app/product/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Product updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:w-[1152px] w-[400px] mx-auto">
        <div className=" lg:py-16 lg:px-28 py-6 px-10 text-center ">
          <h1 className="divider my-10 text-gray-700 text-4xl font-semibold">
            Update Product
          </h1>
          <form onSubmit={handleUpdateProduct}>
            {/* product and brand name */}
            <div className="lg:grid lg:gap-6 ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter product name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <select
                  name="brand"
                  defaultValue={brand}
                  className="select select-bordered"
                  required
                >
                  <option value="">Select a brand</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="BMW">BMW</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Lamborghini">Lamborghini</option>
                  <option value="Porsche">Porsche</option>
                </select>
              </div>
              {/* product type and price */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Product Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Enter product type"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter product price"
                  className="input input-bordered"
                />
              </div>
              {/* description and rating */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Enter product description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control   ">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Enter product rating"
                  className="input input-bordered"
                />
              </div>
              {/* photo */}
              <div className="form-control  w-full col-span-2">
                <label className="label">
                  <span className="label-text">Product Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter product photo URL"
                  className="input input-bordered"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Update Product"
              className="btn w-full  mt-8"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
