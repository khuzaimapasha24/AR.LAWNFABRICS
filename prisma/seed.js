const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding products...');

  const products = [
    { title: 'Rose Gold Chiffon', brand: 'Maria B', category: 'Unstitched', price: 12500, stock: 50, images: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
    { title: 'Midnight Velvet', brand: 'Sana Safinaz', category: 'Pret', price: 18000, stock: 30, images: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80' },
    { title: 'Emerald Lawn Set', brand: 'Khaadi', category: 'Unstitched', price: 8500, stock: 100, images: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80' },
    { title: 'Bridal Couture Lehenga', brand: 'Elan', category: 'Bridal', price: 150000, stock: 5, images: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80' },
    { title: 'Ruby Festive Eid Collection', brand: 'Gul Ahmed', category: 'Festive', price: 15000, stock: 40, images: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80' },
    { title: 'Sapphire Basics Kurti', brand: 'Sapphire', category: 'Pret', price: 3500, stock: 200, images: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80' }
  ];

  for (const p of products) {
    await prisma.product.create({
      data: {
        title: p.title,
        brand: p.brand,
        category: p.category,
        price: p.price,
        stock: p.stock,
        images: p.images
      }
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
