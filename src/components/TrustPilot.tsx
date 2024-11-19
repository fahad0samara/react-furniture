import { Star } from 'lucide-react';

const TrustPilot = () => {
  return (
    <div className="bg-white py-4 px-6 rounded-full shadow-lg inline-flex items-center space-x-4 absolute bottom-8 right-8">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
        ))}
      </div>
      <div className="text-sm">
        <span className="font-semibold">4.9</span>
        <span className="text-gray-600 ml-1">930K Reviews</span>
      </div>
      <img src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg" alt="Trustpilot" className="h-4" />
    </div>
  );
};

export default TrustPilot;