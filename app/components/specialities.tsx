import React from 'react'

const Specialities = (data: any) => {
    console.log(data);
    return (
        <div className="flex flex-wrap -m-4">
            {data.category.categories.map((category: any) => (
                <div key={category.idCategory} className="lg:w-1/4 md:w-1/2 p-4 w-full mb-10">
                    <a className="block relative h-58 rounded overflow-hidden">
                        <img
                            alt={category.strCategory}
                            className="object-cover object-center w-full h-full block"
                            src={category.strCategoryThumb}
                        />
                    </a>
                    <div className="mt-10 text-center">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{category.strCategory}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Specialities;