import errorImg from '../../assets/error-img.png';
import { Link, useNavigation } from 'react-router';
import LoadingSpinner from '../../components/ui/LoadingSpinner/LoadingSpinner';
import Navbar from '../../components/Header/Navbar';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    const navigation = useNavigation();
     
    return (
        <div className='plus-jakarta-sans @container'>
            <Helmet>
                <title>Page Not Found | DocMeet</title>
            </Helmet>          
            
            <Navbar></Navbar>
            
            {
                (navigation.state === 'loading') ? <LoadingSpinner></LoadingSpinner> : 
                <div className="primary-bg">
                    <div className="flex bg-white justify-center items-center">
                        <div className="mt-[3vh] md:mt-[5vh] lg:mt-[9vh] px-2 xl:mt-[11vh] 2xl:mt-[15vh]">
                            <div className="flex justify-center">
                                <img className='w-[300px]' src={errorImg} alt="" />
                            </div>
                            <div className="text-center space-y-5 mt-8">
                                <h1 className='text-red-600 font-bold text-4xl'>404- Page Not Found</h1>
                                <p className='dark-1 text-xl font font-semibold'>Oops! The page you're looking for doesn't exist</p>
                                <button className='primary-button'><Link to='/'>Back To Homepage</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default ErrorPage;