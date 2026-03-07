// Mock product data for Graamzo
export const mockProducts = [
    {
        id: 1,
        name: 'Nagli Papad',
        category: 'Papads',
        price: 150,
        originalPrice: 200,
        rating: 4.8,
        reviews: 245,
        image: 'https://tiimg.tistatic.com/fp/1/006/366/crunchy-and-crispy-nagli-papad-505.jpg',
        badge: 'TOP PICK',
    },
    {
        id: 2,
        name: 'Homemade Mango Pickle',
        category: 'Pickles',
        price: 220,
        originalPrice: 280,
        rating: 4.9,
        reviews: 189,
        image: 'https://www.tastingtable.com/img/gallery/why-indias-mango-pickle-should-be-a-pantry-staple/l-intro-1672085973.jpg',
        badge: 'NEW',
    },
    {
        id: 3,
        name: 'Traditional Rice Papad',
        category: 'Papads',
        price: 150,
        originalPrice: 200,
        rating: 4.7,
        reviews: 312,
        image: 'https://www.bing.com/th/id/OIP.5Mcm_dH6DJQmfMpxy8gTKAHaEK?w=375&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',

    },
    {
        id: 4,
        name: 'Instant Dhokla Mix',
        category: 'Powders',
        price: 320,
        originalPrice: 400,
        rating: 4.6,
        reviews: 156,
        image: 'https://www.bing.com/th/id/OIP._dxwTn1l9Y3QTuv56eELeAHaEK?w=247&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
    {
        id: 5,
        name: 'Cold Pressed Coconut Oil',
        category: 'Oils',
        price: 450,
        originalPrice: 550,
        rating: 4.9,
        reviews: 423,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&h=500&fit=crop',
        badge: 'BESTSELLER',
    },
    {
        id: 6,
        name: 'Jaggery Cubes',
        category: 'Sweets',
        price: 180,
        originalPrice: 220,
        rating: 4.5,
        reviews: 267,
        image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&h=500&fit=crop',
    },
    {
        id: 7,
        name: 'Red Chilli Powder',
        category: 'Spices',
        price: 120,
        originalPrice: 160,
        rating: 4.7,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=500&h=500&fit=crop',
    },
    {
        id: 8,
        name: 'Handwoven Basket',
        category: 'Handicrafts',
        price: 550,
        originalPrice: 750,
        rating: 4.8,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?w=500&h=500&fit=crop',
        badge: 'NEW',
    },
    {
        id: 9,
        name: 'Mixed Pickle',
        category: 'Pickles',
        price: 240,
        originalPrice: 300,
        rating: 4.6,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=500&fit=crop',
    },
    {
        id: 10,
        name: 'Chakli Snacks',
        category: 'Snacks',
        price: 160,
        originalPrice: 200,
        rating: 4.8,
        reviews: 345,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=500&fit=crop',
        badge: 'BESTSELLER',
    },
    {
        id: 11,
        name: 'Coriander Powder',
        category: 'Spices',
        price: 100,
        originalPrice: 130,
        rating: 4.5,
        reviews: 176,
        image: 'https://images.unsplash.com/photo-1596040033229-a0b3b38d7b72?w=500&h=500&fit=crop',
    },
    {
        id: 12,
        name: 'Quinoa',
        category: 'Grains',
        price: 380,
        originalPrice: 480,
        rating: 4.7,
        reviews: 123,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop',
        badge: 'TOP PICK',
    },
];

// Function to filter products by category
// export const filterProductsByCategory = (category) => {
//     if (category === 'all') {
//         return mockProducts;
//     }
//     return mockProducts.filter(
//         (product) => product.category.toLowerCase() === category.toLowerCase()
//     );
// };

// // Function to filter products by price range
// export const filterProductsByPrice = (products, priceRange) => {
//     if (priceRange === 'all') return products;

//     const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));

//     if (max) {
//         return products.filter(p => p.price >= parseInt(min) && p.price <= parseInt(max));
//     } else {
//         return products.filter(p => p.price >= parseInt(min));
//     }
// };

// // Function to sort products
// export const sortProducts = (products, sortBy) => {
//     const sorted = [...products];

//     switch (sortBy) {
//         case 'price-low':
//             return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high':
//             return sorted.sort((a, b) => b.price - a.price);
//         case 'rating':
//             return sorted.sort((a, b) => b.rating - a.rating);
//         case 'newest':
//             return sorted.reverse();
//         case 'popular':
//         default:
//             return sorted.sort((a, b) => b.reviews - a.reviews);
//     }
// };
