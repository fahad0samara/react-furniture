import { Search, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">Lux•home</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-600">Home</Link>
              <Link to="/products" className="text-gray-900 hover:text-gray-600">Products</Link>
              <Link to="/services" className="text-gray-900 hover:text-gray-600">Services</Link>
              <Link to="/designers" className="text-gray-900 hover:text-gray-600">Designers</Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-600">Contact</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;