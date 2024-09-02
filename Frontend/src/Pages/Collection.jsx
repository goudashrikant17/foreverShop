import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";
import Title from "../Components/Title";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const showFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  useEffect(() => {
    setAllProduct(products);
  }, []);

  // useEffect(() => {
  //   console.log(category);
  //   console.log(subCategory);
  // }, [category,subCategory]);

  const sortProduct = () => {
    let filterProductCopy = allProduct.slice();

    switch (sortType) {
      case "low-high":
        setAllProduct(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setAllProduct(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setAllProduct(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <div className=" border-t sm:flex gap-5 ">
        {/* for border */}

        <div className=" min-w-60 space-y-3 mt-5">
          <h1 className={` cursor-pointer`} onClick={showFilter}>
            FILTER
          </h1>

          {/* -------------------------------- */}

          <div
            className={` ${
              isOpenFilter ? "block" : "hidden"
            } sm:block space-y-4 `}
          >
            <div className=" text-lg border border-gray-400 px-4 py-2 ">
              <h1 className=" text-black">CATEGORIES</h1>
              <div className=" flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  value={"Men"}
                  onChange={toggleCategory}
                />
                <p>Men</p>
              </div>
              <div className=" flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  value={"Women"}
                  onChange={toggleCategory}
                />
                <p>Women</p>
              </div>
              <div className=" flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                <p>Kids</p>
              </div>
            </div>

            <div className=" text-lg border border-gray-400 px-4 py-2">
              <h1 className=" text-black">TYPES</h1>
              <div className=" flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                <p>Topwear</p>
              </div>
              <div className=" flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                <p>Bottomwear</p>
              </div>
              <div className=" flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                <p>Winterwear</p>
              </div>
            </div>
          </div>
          {/* -------------------------------- */}
        </div>

        {/* right side */}
        <div className=" text-base sm:text-2xl mt-5 ">
          <div className=" sm:flex justify-between text-base md:text-xl ">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <div className=" mb-4 sm:mb-0">
              <select onChange={(e) => setSortType(e.target.value)}>
                <option value="relative">Sort by: Relativent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-2 gap-y-8 ">
            {allProduct.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import ProductItem from "../Components/ProductItem";
// import Title from "../Components/Title";

// const Collection = () => {
//   const { products } = useContext(ShopContext);

//   const [isOpenFilter, setIsOpenFilter] = useState(false);
//   const [allProduct, setAllProduct] = useState([]);

//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);

//   const showFilter = () => {
//     setIsOpenFilter(!isOpenFilter);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [selectedCategories, selectedTypes, products]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((item) => item !== category)
//         : [...prev, category]
//     );
//   };

//   const handleTypeChange = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type)
//         ? prev.filter((item) => item !== type)
//         : [...prev, type]
//     );
//   };

//   const applyFilters = () => {
//     let filteredProducts = products;

//     if (selectedCategories.length > 0) {
//       filteredProducts = filteredProducts.filter((product) =>
//         selectedCategories.includes(product.category)
//       );
//     }

//     if (selectedTypes.length > 0) {
//       filteredProducts = filteredProducts.filter((product) =>
//         selectedTypes.includes(product.type)
//       );
//     }

//     setAllProduct(filteredProducts);
//   };

//   return (
//     <>
//       <div className=" border-t sm:flex gap-5 ">
//         {/* for border */}

//         <div className=" min-w-60 space-y-3 mt-5">
//           <h1 className={` cursor-pointer`} onClick={showFilter}>
//             FILTER
//           </h1>

//           {/* -------------------------------- */}

//           <div
//             className={` ${
//               isOpenFilter ? "block" : "hidden"
//             } sm:block space-y-4 `}
//           >
//             <div className=" text-lg border border-gray-400 px-4 py-2 ">
//               <h1 className=" text-black">CATEGORIES</h1>
//               <div className=" flex gap-2">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCategoryChange("Men")}
//                   checked={selectedCategories.includes("Men")}
//                 />
//                 <p>Men</p>
//               </div>
//               <div className=" flex gap-2">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCategoryChange("Women")}
//                   checked={selectedCategories.includes("Women")}
//                 />
//                 <p>Women</p>
//               </div>
//               <div className=" flex gap-2">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCategoryChange("Kids")}
//                   checked={selectedCategories.includes("Kids")}
//                 />
//                 <p>Kids</p>
//               </div>
//             </div>

//             <div className=" text-lg border border-gray-400 px-4 py-2">
//               <h1 className=" text-black">TYPES</h1>
//               <div className=" flex gap-2">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleTypeChange("Topwear")}
//                   checked={selectedTypes.includes("Topwear")}
//                 />
//                 <p>Topwear</p>
//               </div>
//               <div className=" flex gap-2">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleTypeChange("Bottomwear")}
//                   checked={selectedTypes.includes("Bottomwear")}
//                 />
//                 <p>Bottomwear</p>
//               </div>
//               <div className=" flex gap-2">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleTypeChange("Winterwear")}
//                   checked={selectedTypes.includes("Winterwear")}
//                 />
//                 <p>Winterwear</p>
//               </div>
//             </div>
//           </div>
//           {/* -------------------------------- */}
//         </div>

//         {/* right side */}
//         <div className=" text-base sm:text-2xl mt-5 ">
//           <div className=" sm:flex justify-between text-base md:text-xl ">
//             <Title text1={"ALL"} text2={"COLLECTIONS"} />
//             <div className=" mb-4 sm:mb-0">
//               <select>
//                 <option value="relative">Sort by: Relevance</option>
//                 <option value="low-high">Sort by: Low to High</option>
//                 <option value="high-low">Sort by: High to Low</option>
//               </select>
//             </div>
//           </div>
//           <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-8 ">
//             {allProduct.map((item, index) => (
//               <ProductItem
//                 key={index}
//                 id={item._id}
//                 image={item.image}
//                 name={item.name}
//                 price={item.price}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Collection;
