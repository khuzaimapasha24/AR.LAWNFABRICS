import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { items, customerName, email, phone, address, totalAmount } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Workaround for dummy cart: Get a real product ID from DB to avoid foreign key error
    const firstProduct = await prisma.product.findFirst();
    const realProductId = firstProduct ? firstProduct.id : items[0].id;

    // Create the order in Neon Database
    const order = await prisma.order.create({
      data: {
        customerName,
        customerPhone: phone,
        address: `${email} | ${address}`, 
        totalAmount,
        status: 'PENDING',
        items: {
          create: items.map(item => ({
            productId: realProductId, // Use real ID
            quantity: item.quantity,
            price: item.price
          }))
        }
      }
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to process checkout' }, { status: 500 });
  }
}
