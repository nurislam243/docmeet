import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner';
import { ToastContainer } from 'react-toastify';




const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div className='plus-jakarta-sans @container'>
            <Navbar />
            <main className='min-h-[78vh] primary-bg'>
                { isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Outlet />
                    </Suspense>
                )}
            </main>
            <ToastContainer />         
            <Footer />
        </div>
    );
};

export default Root;
