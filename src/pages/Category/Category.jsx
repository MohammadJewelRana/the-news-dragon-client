import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';
import News from '../News/News/News';

const Category = () => {
    const {id}=useParams();

    const categoriesNews=useLoaderData();
    // console.log(categoriesNews);


    return (
        <div>
           
           {
                categoriesNews.map(news=><NewsCard
                key={news._id}
                news={news}
                >

                </NewsCard>)
            } 


  
        </div>
    );
};

export default Category;