import React from 'react';
import { Rating } from 'primereact/rating';
import { productsData } from '../data';
import { IndianRupee } from 'lucide-react';

const Products = () => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg flex flex-col gap-5 p-10">
        {productsData.map((product, index) => {
            return (
                    <div className='flex justify-start items-start flex-wrap gap-3'>
                        <img className='w-24 shadow-md' src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg font-semibold'>{product.name}</p>
                            <Rating value={product.rating} readOnly cancel={false} />
                            <div className='flex justify-start items-center gap-1'>
                                <IndianRupee className='text-gray-500' size={20} />
                                <p className='text-xl text-gray-500 font-semibold'>{product.price}</p>
                            </div>
                        </div>
                    </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products
