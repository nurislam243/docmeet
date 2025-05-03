import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const FAQ = () => {
    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('/faq.json') 
        .then(response => response.json())
        .then(json => {
          setFaqData(json);  
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);

    return (
        <div className="">
            {
                loading ? <LoadingSpinner></LoadingSpinner> :
                    <section className="dark:bg-gray-100 dark:text-gray-800">
                        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                                    
                            {
                                faqData.map(singleFaq => {
                                        return (
                                            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                                            
                                                <div>
                                                    <h3 className="font-semibold text-lg"><span className='font-extrabold mr-2 dark-1'>Q:</span>{singleFaq.question}</h3>
                                                    <p className="mt-1 dark:text-gray-600"><span className='font-extrabold mr-2 dark-2'>A:</span>{singleFaq.answer}</p>
                                                </div>
                                            </div>
                                        )
                                            
                                
                                })
                            }

                        </div>
                    </section>
            }
        </div>
    );
};

export default FAQ;