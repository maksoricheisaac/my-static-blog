import Image from 'next/image';
import Link from 'next/link';
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/img4.jpeg'
import img5 from '../assets/images/img5.jpeg'
import img6 from '../assets/images/img6.jpeg'
import img7 from '../assets/images/img7.jpeg'
import img8 from '../assets/images/img8.jpeg'
import img9 from '../assets/images/img9.jpeg'
import img10 from '../assets/images/img10.jpeg'
import img11 from '../assets/images/img11.jpeg'
import img12 from '../assets/images/img12.jpeg'
import img13 from '../assets/images/img13.jpeg'
import img14 from '../assets/images/img14.jpeg'
import img15 from '../assets/images/img15.jpeg'
import img16 from '../assets/images/img16.jpeg'
import img17 from '../assets/images/img17.jpeg'
import img18 from '../assets/images/img18.jpeg'
import img19 from '../assets/images/img19.jpeg'
import img20 from '../assets/images/img20.jpeg'

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
        img: img18
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

const Card = ({ id, title, subContent }) => {
    const img = getImg(id)
    console.log(img);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='w-full h-56'>
            <Image className="rounded-t-lg w-full h-full object-cover" src={img} alt={`Image de l'article N°${id}`} width={100} height={100}  />
        </div>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}...</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {subContent}... </p>
            <Link href={`/article/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Lire la suite...
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>

  );
};

export default Card;
