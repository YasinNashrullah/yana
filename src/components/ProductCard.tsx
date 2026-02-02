import React from 'react';
import type { BreadProduct } from '../types';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
    product: BreadProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const isFlashSale = product.category === 'bs';
    const waLink = generateWhatsAppLink(product.name, product.price);

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="relative">
                <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
                {isFlashSale && product.originalPrice && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${product.category === 'fresh' ? 'bg-green-100 text-green-800' :
                        product.category === 'sweet' ? 'bg-pink-100 text-pink-800' :
                            product.category === 'toast' ? 'bg-blue-100 text-blue-800' :
                                product.category === 'cake' ? 'bg-purple-100 text-purple-800' :
                                    'bg-yellow-100 text-yellow-800'
                        }`}>
                        {product.category === 'bs' ? 'Flash Sale' : product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <div>
                        {isFlashSale && product.originalPrice ? (
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-400 line-through">Rp {product.originalPrice.toLocaleString('id-ID')}</span>
                                <span className="text-xl font-bold text-red-600">Rp {product.price.toLocaleString('id-ID')}</span>
                            </div>
                        ) : (
                            <span className="text-xl font-bold text-primary">Rp {product.price.toLocaleString('id-ID')}</span>
                        )}
                    </div>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 ${isFlashSale ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-amber-700'
                            } text-white text-sm font-medium rounded-lg transition-colors duration-300`}
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
