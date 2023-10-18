import Navbar from './Navbar';

const AddProduct = () => {
  const handleAddProduct = (e) => {
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
  };

  return (
    <div className="lg:w-[1152px] w-[400px] mx-auto">
      <Navbar></Navbar>
      <div className=" lg:py-16 lg:px-28 py-6 px-10 text-center ">
        <form onSubmit={handleAddProduct}>
          {/* product and brand name */}
          <div className="lg:grid lg:gap-6 ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <select name="brand" className="select select-bordered" required>
                <option value="">Select a brand</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="BMW">BMW</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Audi">Tesla</option>
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
                placeholder="Enter product photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Add product"
            className="btn w-full  mt-8"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
