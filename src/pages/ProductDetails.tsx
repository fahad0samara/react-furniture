import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { MOCK_PRODUCTS } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <button 
            onClick={() => navigate('/products')}
            className="mt-4 btn btn-primary"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/products')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={product.image}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>

              <p className="text-3xl font-bold text-gray-900 mb-6">
                ${product.price.toLocaleString()}
              </p>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Free shipping on orders over $999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">2-year warranty included</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full btn btn-primary mb-4"
              >
                Add to Cart
              </button>

              <div className="border-t pt-8 mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">Material</span>
                    <p className="font-medium">Premium Fabric</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Dimensions</span>
                    <p className="font-medium">32"W x 34"D x 36"H</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Weight</span>
                    <p className="font-medium">45 lbs</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Assembly</span>
                    <p className="font-medium">Required</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-500">2 months ago</span>
                </div>
                <p className="text-gray-600">
                  Absolutely love this piece! The quality is outstanding and it fits perfectly in my living room.
                  The color is exactly as shown in the pictures and the comfort level is amazing.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;