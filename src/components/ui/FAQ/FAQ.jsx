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
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                                    
                            {
                                faqData.map(singleFaq => {
                                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                                        
                                            <div>
                                                <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                                                <p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                                            </div>
                                        </div>
                                
                                })
                            }

                        </div>
                    </section>
            }
        </div>
    );
};

export default FAQ;