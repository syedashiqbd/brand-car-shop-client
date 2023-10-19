/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  // console.log(brand);
  const { image_url, brand_name,  } = brand;
 
  return (
    <Link to={`/brand/${brand_name}`}>
      <img
        alt="Signage"
        src={image_url}
        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="font-medium">{brand_name}</strong>

        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

        {/* <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p> */}
      </div>
    </Link>
  );
};

export default BrandCard;
