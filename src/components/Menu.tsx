import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

type FilterType = 'all' | 'sweet' | 'toast' | 'cake';

const Menu = () => {
    const [filter, setFilter] = useState<FilterType>('all');

    const menuItems = products.filter(product => {
        if (product.category === 'bs') return false;
        if (filter === 'all') return true;
        return product.category === filter;
    });

    return (
        <section id="menu" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Menu Pilihan</h2>
                    <p className="mt-4 text-xl text-gray-500">Temukan roti favoritmu yang dibuat segar setiap hari.</p>
                </div>

                <div className="flex justify-center mb-10 space-x-2 md:space-x-4">
                    {['all', 'sweet', 'toast', 'cake'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category as FilterType)}
                            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${filter === category
                                ? 'bg-primary text-white shadow-md transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-amber-100 hover:text-primary border border-gray-200'
                                }`}
                        >
                            {category === 'all' ? 'Semua' :
                                category === 'sweet' ? 'Roti Manis' :
                                    category === 'toast' ? 'Roti Tawar' : 'Bolu'}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {menuItems.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        Tidak ada produk dalam kategori ini.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Menu;
