export const generateWhatsAppLink = (productName: string, price: number) => {
    const phoneNumber = '628123456789'; // Placeholder Number
    const message = `Halo, saya ingin pesan ${productName} (Rp ${price.toLocaleString('id-ID')}). Mohon info ketersediaannya.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
