import React, { useState, useEffect } from 'react';

import ProductsCard from './ProductsCard';

const ProductsGalaryDefault = ({mydata,categoryName }) => {
  const itemsPerPage = 9; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
// Default state is an empty array

 




  // Calculate total pages and indices for pagination
  const totalPages = Math.ceil(mydata.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice data for the current page
  const visibleProducts = Array.isArray(mydata) ? mydata.slice(startIndex, endIndex) : [];


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className=' mt-5  mx-auto py-20 '>
      <div className='flex justify-start gap-3 -mt-24 py-8'>
        <h1 className='text-gray-700 text-xl'> {categoryName}</h1>
        <h1 className='text-gray-700 text-xl'> || {mydata.length} Products Available </h1>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        {visibleProducts.map((product, index) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>

     { mydata.length >9 ? <div className="mt-8 flex justify-center items-center space-x-4">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-md ${
      currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Previous
  </button>

  {/* Page numbers */}
  <div className="flex space-x-2">
    {[...Array(totalPages).keys()].map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page + 1)}
        className={`px-3 py-2 rounded-full ${
          currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
        }`}
      >
        {page + 1}
      </button>
    ))}
  </div>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 rounded-md ${
      currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Next
  </button>
</div> : ""}
    </div>
  );
};

export default ProductsGalaryDefault;
