import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2010, Lux•home has been at the forefront of innovative furniture design
              and interior solutions. Our passion for creating beautiful, functional spaces drives
              everything we do.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that every home deserves to be a masterpiece, and our carefully curated
              collection reflects this philosophy. Each piece is selected not just for its beauty,
              but for its ability to transform spaces and enhance daily living.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">10K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">1K+</h3>
                <p className="text-gray-600">Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">50+</h3>
                <p className="text-gray-600">Design Awards</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              alt="Our showroom"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To create beautiful, functional spaces that inspire and enhance daily living.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;