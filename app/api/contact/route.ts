import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, productOrSolution, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to MongoDB with timeout
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    await client.connect();

    const database = client.db('Infodra_db');
    const collection = database.collection('Message');

    // Insert the contact form data
    const document = {
      name,
      email,
      phone,
      company: company || '',
      productOrSolution: productOrSolution || '',
      message,
      createdAt: new Date(),
      source: 'infodra.ai'
    };

    const result = await collection.insertOne(document);

    await client.close();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: result.insertedId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('MongoDB Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please email us at connect@infodra.ai' },
      { status: 500 }
    );
  }
}
