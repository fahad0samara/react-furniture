import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      >
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">${product.price.toLocaleString()}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="btn-primary rounded-full p-2"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;