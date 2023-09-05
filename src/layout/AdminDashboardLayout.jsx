import React from 'react';

import { Outlet } from 'react-router-dom';
import { AdminDashboardSidebar } from '../dashboard/adminDashboard/AdminDashboardSidebar';

const AdminDashboardLayout = () => {
    return (
        <div className='bg-gray-100'>
            <div className='flex justify-between gap-4 '>
<div className=' w-full max-w-[22rem]'>
<AdminDashboardSidebar></AdminDashboardSidebar>
</div>
<div className=' container w-5/6 mx-auto px-10 py-10 '>
<Outlet></Outlet>
</div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;