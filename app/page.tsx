import Footer from './components/footer'
import Link from 'next/link'
import { CategoriesResponse } from './interfaces/categories';
import Specialities from './components/specialities';

async function getData(): Promise<CategoriesResponse> {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<CategoriesResponse>;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <br></br>
            <p className="mb-8 leading-relaxed">In a world where dietary trends rapidly evolve, the rise of readymade gluten-free products stands out as a particularly fascinating phenomenon. Initially catering to a niche market of individuals with celiac disease or gluten sensitivity, these products have transcended their original purpose. </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore menu</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/macaroni-noodles-with-meat-tomato-sauce-served-plate-table_1220-6904.jpg" />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <h1 className="text-3xl mb-10 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">Our Specialities</h1>
          <Specialities category={data} />
        </div>
      </section>
      <br></br>
      <Footer />
    </>

  )
}
