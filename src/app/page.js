"use client"
import { useState, useEffect } from "react";


import axios from "axios";
import Link from "next/link";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";

const getArticles = async (page, limit) => {
  const response = await axios.get(`http://localhost:3000/api/articles?page=${page}&limit=${limit}`);
  const data = await response.data;
  return data;
};

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 6; // Nombre d'articles par page

  useEffect(() => {
    const fetchArticles = async () => {
      const { articles, total } = await getArticles(page, limit);
      setArticles(articles);
      setTotal(total);
    };
    fetchArticles();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Header>
        <Navbar />
        <Jumbotron />
      </Header>
      <main className="w-full h-full py-5">
        <h1 className="text-3xl font-bold text-center">Articles</h1>
        <section className="px-5 py-10 flex flex-wrap justify-center gap-5">
          {articles.map(article => (
            <Card key={article.id} id={article.id} title={article.title.slice(0, 50)} subContent={article.content.slice(0, 100)} />
             
          ))}
        </section>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}

              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
