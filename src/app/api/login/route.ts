import { NextResponse } from 'next/server';
import User from '../../../../models/User';
import { initDB } from '../../../../lib/db';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
   
    await initDB()
    const user = await User.findOne({ where: { email } });

    if (!user || user.get('password') !== password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
