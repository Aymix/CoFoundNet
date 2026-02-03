import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // Check if email already exists
        const existingEntry = await Waitlist.findOne({ email });
        if (existingEntry) {
            return NextResponse.json(
                { message: 'Email already registered' },
                { status: 200 }
            );
        }

        // Create new entry
        const newEntry = new Waitlist({ email });
        await newEntry.save();

        return NextResponse.json(
            { message: 'Successfully joined the waitlist' },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Waitlist submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
