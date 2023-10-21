/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  // console.log(brand);
  const { image_url, brand_name } = brand;

  return (
    <Link to={`/brand/${brand_name}`}>
      <img
        src={image_url}
        className="h-56 w-full border rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72 transition-all duration-500 hover:bg-[#FACC15] dark:hover:bg-purple-100 "
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="text-2xl font-medium text-rose-900 dark:text-gray-400">
          {brand_name}
        </strong>

        <span className="hidden sm:block sm:h-px sm:w-16 sm:bg-yellow-500"></span>
      </div>
    </Link>
  );
};

export default BrandCard;
