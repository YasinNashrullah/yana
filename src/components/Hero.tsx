import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-amber-50 to-white -z-20"></div>

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.2)_0%,rgba(255,255,255,0)_70%)] -z-10 pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,rgba(255,255,255,0)_70%)] -z-10 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <div className="lg:col-span-6 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block py-2 px-4 rounded-full bg-white border border-orange-100 shadow-sm text-primary font-bold text-sm mb-6 uppercase tracking-wider"
                            >
                                🔥 Fresh from the Oven
                            </motion.span>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
                                Rasakan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600 relative">
                                    Kelembutan
                                    <motion.svg
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                                        className="absolute -bottom-2 left-0 w-full h-3 text-amber-400 -z-10 opacity-70"
                                        viewBox="0 0 200 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.00026 6.99997C58.4239 1.48792 135.5 -2.50001 198 4.49998" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                                    </motion.svg>
                                </span> <br />
                                Sesungguhnya
                            </h1>

                            <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                YANA BAKERY menghadirkan standar baru roti premium.
                                Tekstur selembut awan dengan cita rasa otentik yang akan memanjakan lidah Anda.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://wa.me/628123456789"
                                    className="px-8 py-4 bg-gradient-to-r from-primary to-orange-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2"
                                >
                                    Pesan Sekarang
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#menu"
                                    className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md"
                                >
                                    Lihat Menu
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-6 relative perspective-1000 mt-12 lg:mt-0">
                        <div className="relative w-full max-w-[600px] mx-auto aspect-square">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                                className="absolute inset-4 z-20 rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Roti Tawar Premium"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30, y: 30 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute -bottom-4 -left-4 z-30 w-48 h-48 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Roti Sobek"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                                className="absolute -top-2 -right-2 z-30 bg-white p-4 rounded-2xl shadow-xl max-w-[180px] border border-gray-50"
                            >
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-xs font-bold text-gray-800">"Rotinya lembut banget, nagih!"</p>
                                <p className="text-[10px] text-gray-500 mt-1">- Budi </p>
                            </motion.div>

                            <div className="absolute top-0 right-10 w-24 h-24 rounded-full border-4 border-amber-200/40 z-10" />
                            <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-orange-100/50 z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
