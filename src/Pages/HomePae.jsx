import Navbar from "../Components/Navbar"


const HomePae = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Our Latest Computer Products</h1>
          <p className="text-lg mb-8">
            High-performance laptops, desktops, and accessories to elevate your computing experience.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <img
              src="https://i.pinimg.com/564x/d1/ae/bd/d1aebdcbaa85ff8182f986d505b6bf2a.jpg"
              alt="Product 1"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://i.pinimg.com/564x/b2/b1/50/b2b150dc8091fa20085c629a061dfd48.jpg"
              alt="Product 2"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://i.pinimg.com/564x/87/69/f0/8769f097ae1dd9b843d1bd8c1586ff22.jpg"
              alt="Product 3"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
          <a
            href="#products"
            className="bg-white text-[#72BF44] py-2 px-6 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main id="products" className="flex-grow p-4">
        {/* Add your product content here */}
      </main>

      {/* Footer */}
      <footer className="bg-[#000] text-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <p className="mb-2">TechStore is a leading retailer of high-performance computer products.</p>
              <p>We offer the latest in laptops, desktops, and accessories to elevate your computing experience.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul>
                <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
                <li className="mb-2"><a href="#shop" className="hover:underline">Shop</a></li>
                <li className="mb-2"><a href="#about" className="hover:underline">About</a></li>
                <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Customer Service</h2>
              <ul>
                <li className="mb-2"><a href="#faq" className="hover:underline">FAQ</a></li>
                <li className="mb-2"><a href="#support" className="hover:underline">Support</a></li>
                <li className="mb-2"><a href="#returns" className="hover:underline">Returns</a></li>
                <li className="mb-2"><a href="#shipping" className="hover:underline">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="mb-2">Email: support@techstore.com</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-2">Address: 123 Tech Street, San Francisco, CA</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">&copy; 2024 TechStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default HomePae