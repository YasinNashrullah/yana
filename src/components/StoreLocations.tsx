import React from 'react';

const StoreLocations = () => {
    return (
        <section id="locations" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
                    Kunjungi Toko Kami
                </h2>

                <div className="bg-amber-50 rounded-3xl p-8 md:p-12 shadow-lg border border-amber-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative group">
                        <img
                            src="https://images.unsplash.com/photo-1556742400-b5b7c5121f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="YANA BAKERY Store"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                Lihat di Google Maps
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 text-left space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">YANA BAKERY</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tegal Rejo RT:1 RW:7, Gumulan, Klaten Tengah, Klaten, Tegalmulyo, Gumulan, Kec. Klaten Tengah, Kabupaten Klaten, Jawa Tengah 57417
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Buka Setiap Hari: 07.00 - 20.00</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>083830367485</span>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/Pd2jo2szXNpin4A6A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Petunjuk Arah
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreLocations;
