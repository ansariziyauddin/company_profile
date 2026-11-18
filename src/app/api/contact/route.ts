import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { honeypot } = result.data;

    // Honeypot check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Message received' });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out. We will get back to you within 24 hours.',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
