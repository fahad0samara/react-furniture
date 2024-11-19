import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Modern interior"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Replace Your Space with Stunning Interior & Furniture Designs
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Here, you'll find an array of stunning pieces that will take your home decor to the next level. Our furniture combines aesthetic appeal with functionality to give you the best of both worlds.
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-yellow-300 transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;