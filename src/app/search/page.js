"use client"
import Card from "@/components/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Search(){
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const searchData = async() => {
            const response = await axios.get(`http://localhost:3000/api/search?search=${search}`)
            const data = await response.data
            setArticles(data)
        }
        searchData()
    }, [search])

    return (
        <>  
            <Header>
                <Navbar />
                <section className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <form className="relative mt-3 w-full px-10">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-12 -mt-5 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="button"></button>
                    </form>
                
                </section>
            </Header>
            <main>
                {articles.length == 0 ? 
                    <h1 className="text-center text-4xl font-bold mt-20">Article non trouvé !!!</h1>
                        : 
                    <section className="px-5 py-10 flex flex-wrap justify-center gap-5">
                        {articles.map(article => (
                            <Card 
                                key={article.id}
                                id={article.id}
                                title={article.title.slice(0, 40)} 
                            />
                        ))}
                    </section>}
            </main>
        </>
        
    )
}