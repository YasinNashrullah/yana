export interface BreadProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: 'sweet' | 'toast' | 'bs' | 'cake';
    stock: number;
}
