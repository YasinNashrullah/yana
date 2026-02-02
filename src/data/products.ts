import type { BreadProduct } from '../types';

export const products: BreadProduct[] = [
    {
        id: '1',
        name: 'Roti Tawar Premium',
        description: 'Roti tawar lembut yang dibuat dengan susu segar berkualitas tinggi, cocok untuk sarapan.',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'toast',
        stock: 20
    },
    {
        id: '2',
        name: 'Roti Sobek Coklat Keju',
        description: 'Perpaduan sempurna antara coklat lumer dan keju gurih dalam satu gigitan roti sobek.',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'sweet',
        stock: 15
    },

    {
        id: '4',
        name: 'Roti Sisir Manis',
        description: 'Roti klasik dengan olesan mentega dan gula, tekstur lembut memanjakan lidah.',
        price: 10000,
        image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'sweet',
        stock: 25
    },
    // Flash Sale Items (BS Types)
    {
        id: '5',
        name: 'Roti Manis Mix (BS)',
        description: 'Paket roti manis produksi kemarin, masih layak konsumsi dengan harga spesial.',
        price: 5000,
        originalPrice: 15000,
        image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'bs',
        stock: 5
    },
    {
        id: '6',
        name: 'Roti Tawar (BS)',
        description: 'Roti tawar produksi kemarin, cocok untuk diolah menjadi roti bakar atau french toast.',
        price: 7000,
        originalPrice: 15000,
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'bs',
        stock: 3
    },

    {
        id: '7',
        name: 'Bolu Gulung Pandan',
        description: 'Bolu gulung lembut dengan aroma pandan asli dan isian krim mentega yang manis.',
        price: 35000,
        image: 'https://images.unsplash.com/photo-1516550893885-3e284a123681?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'cake',
        stock: 10
    },
    {
        id: '8',
        name: 'Bolu Pisang Kukus',
        description: 'Bolu kukus tradisional dari pisang raja pilihan, tekstur padat namun lembut.',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1605698802094-0d7045f22e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'cake',
        stock: 12
    }
];
