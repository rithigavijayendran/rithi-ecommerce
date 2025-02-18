import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError, error } = useGetProductsQuery({ keyword });

  // Log the error to inspect its structure
  if (isError) {
    console.log(error);
  }

  return (
    <>
      {/* Header Section */}
      {!keyword ? <Header /> : null}

      {/* Loading or Error Handling */}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {/* Check the error structure and display the message accordingly */}
          {error?.data?.message || error?.message || "An unknown error occurred."}
        </Message>
      ) : (
        <>
          {/* Main Content */}
          <div className=" ml-[7rem] flex flex-col lg:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl mr-[10rem] font-bold text-gray-800 mb-4 lg:mb-0">
              Special Products
            </h1>
            <Link
              to="/shop"
              className="bg-pink-600 text-black font-bold mr-[5rem] rounded-full py-3 px-8 hover:bg-pink-800 transition-transform transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>

          {/* Products Grid */}
          <div>
            <div className="ml-[3rem] grid grid-cols-3 mt-[2rem]">
              {data?.products?.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
              <p className="text-sm">
                © 2025 Rithi's Store. All Rights Reserved. Follow us on{" "}
                <a
                  href="https://www.instagram.com/r_i_t_h_i__g_a_/"
                  className="text-purple-400 underline hover:text-purple-300"
                >
                  Social Media
                </a>
                .
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Home;
