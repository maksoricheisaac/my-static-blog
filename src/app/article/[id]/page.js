"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';

import img1 from '../../../assets/images/img1.jpeg'
import img2 from '../../../assets/images/img2.jpeg'
import img3 from '../../../assets/images/img3.jpeg'
import img4 from '../../../assets/images/img4.jpeg'
import img5 from '../../../assets/images/img5.jpeg'
import img6 from '../../../assets/images/img6.jpeg'
import img7 from '../../../assets/images/img7.jpeg'
import img8 from '../../../assets/images/img8.jpeg'
import img9 from '../../../assets/images/img9.jpeg'
import img10 from '../../../assets/images/img10.jpeg'
import img11 from '../../../assets/images/img11.jpeg'
import img12 from '../../../assets/images/img12.jpeg'
import img13 from '../../../assets/images/img13.jpeg'
import img14 from '../../../assets/images/img14.jpeg'
import img15 from '../../../assets/images/img15.jpeg'
import img16 from '../../../assets/images/img16.jpeg'
import img17 from '../../../assets/images/img17.jpeg'
import img18 from '../../../assets/images/img18.jpeg'
import img19 from '../../../assets/images/img19.jpeg'
import img20 from '../../../assets/images/img20.jpeg'
import Image from 'next/image';

const imgs = [
  {
      id: 1,
      img: img1
  },
  {
      id: 2,
      img: img2
  },
  {
      id: 3,
      img: img3
  },
  {
      id: 4,
      img: img4
  },
  {
      id: 5,
      img: img5
  },
  {
      id: 6,
      img: img6
  },
  {
      id: 7,
      img: img7
  },
  {
      id: 8,
      img: img8
  },
  {
      id: 9,
      img: img9
  },
  {
      id: 10,
      img: img10
  },
  {
      id: 11,
      img: img11
  },
  {
      id: 12,
      img: img12
  },
  {
      id: 13,
      img: img13
  },
  {
      id: 14,
      img: img14
  },
  {
      id: 15,
      img: img15
  },
  {
      id: 16,
      img: img16
  },
  {
      id: 17,
      img: img17
  },
  {
      id: 18,
      img: img19
  },
  {
      id: 19,
      img: img19
  },
  {
      id: 20,
      img: img20
  }

]

const getImg = (id) => {
  const img = imgs.find(item => item.id == id)
  return img.img
}

const getArticle = async (id) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${id}`);
  return response.data;
};

export default function OneArticle({ params }) {
  const [article, setArticle] = useState(null);
  const [newComment, setNewComment] = useState({ author: '', text: '' });
  const img = getImg(params.id)

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await getArticle(params.id);
      setArticle(data);
    };

    fetchArticle();
  }, [params.id]);

  const handleAddComment = async () => {
    if (!newComment.author || !newComment.text) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.id}`, newComment);
    const addedComment = response.data;
    setArticle(prev => ({
      ...prev,
      comments: [...prev.comments, addedComment]
    }));
    setNewComment({ author: '', text: '' });
  };
  console.log(article);

  if(!article) return (<><Header> <Navbar /> </Header> <main className='flex items-center justify-center w-full h-full'> <Loading /> </main> </>)

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main className="flex flex-col gap-1 lg:px-32 px-10">
        <div className="w-full h-80">
          <Image src={img}  className="w-full h-full object-cover rounded-lg" alt={`Image de l'article N°${article.id}`} width={500} height={500} />
        </div>
        <h1 className="text-3xl font-bold text-center my-5">{article.title}</h1>
        <div className="my-2">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">
            {article.comments.length > 1 ? `${article.comments.length} Commentaires` : `${article.comments.length} Commentaire`}
          </h3>
        </div>

        {article.comments.map(comment => (
          <div key={comment.id} className="my-2">
            <p className="italic text-zinc-700">{comment.author}</p>
            <div>
              <ReactMarkdown>{comment.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        <h3 className="text-2xl font-bold">Voulez-vous laisser un commentaire ?</h3>
        <form className="flex items-center justify-center w-full">
          <div className="my-5 w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Nom</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
              </span>
              <input 
                type="text" 
                id="website-admin" 
                class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="elonmusk"
                value={newComment.author}
                onChange={(e) => setNewComment({ ...newComment, author: e.target.value })} 
              />
            </div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre message</label>
            <textarea 
              id="message" 
              rows="4" 
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Votre commentaire"
              value={newComment.text}
              onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            ></textarea>
            <button 
              onClick={handleAddComment}
              type="button" 
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 me-2 mb-2"
              >Ajouter un commentaire</button>
          </div>
        </form>
        
      </main>
    </>
    
  );
}

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:3000/api/articles");
  const articles = response.data;

  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
}


