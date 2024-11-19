import { useEffect, useState } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Modern Lounge Chair',
    description: 'Comfortable and stylish lounge chair perfect for any room',
    price: 599,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80',
    category: 'chairs',
  },
  {
    id: '2',
    name: 'Minimalist Sofa',
    description: 'Three-seater sofa with premium fabric upholstery',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80',
    category: 'sofas',
  },
  {
    id: '3',
    name: 'Wooden Coffee Table',
    description: 'Solid oak coffee table with modern design',
    price: 449,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80',
    category: 'tables',
  },
  {
    id: '4',
    name: 'Pendant Light',
    description: 'Contemporary pendant light with brass finish',
    price: 249,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&q=80',
    category: 'lighting',
  },
  {
    id: '5',
    name: 'Dining Chair Set',
    description: 'Set of 2 upholstered dining chairs',
    price: 399,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
    category: 'chairs',
  },
  {
    id: '6',
    name: 'Floor Lamp',
    description: 'Adjustable floor lamp with marble base',
    price: 329,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
    category: 'lighting',
  },
];

const categories = ['All', 'Chairs', 'Sofas', 'Tables', 'Lighting'];

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md h-96 animate-pulse">
                <div className="h-64 bg-gray-200 rounded-t-lg" />
                <div className="p-4 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Collection</h1>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">Filter by:</span>
          </div>
        </div>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;