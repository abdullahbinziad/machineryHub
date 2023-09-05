import React from 'react';
import AddCategory from '../../components/dashboard/AddCategory';
import AddSubCategory from '../../components/dashboard/AddSubCategory';
import CategoryShowcase from '../../components/dashboard/CategoryShowcase';

const Category = () => {
    return (
        <div className='flex justify-between gap-10'>
            <div className=' flex-1 mx-auto space-y-4 '>

            <AddCategory></AddCategory>
            <AddSubCategory></AddSubCategory>
            </div>
            <div className='flex-1 mx-auto '>
<CategoryShowcase></CategoryShowcase>

            </div>
        </div>
    );
};

export default Category;