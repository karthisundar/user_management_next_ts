// import { NextResponse } from 'next/server';
// import User from '../../../../models/User';
// import { initDB } from '../../../../lib/db';

// export async function POST(req: Request) {
//   const { email, password } = await req.json();

//   try {
//     await initDB();

//     const user = await User.findOne({ where: { email } });

//     if (!user || user.password !== password) {
//       return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
//     }

//     return NextResponse.json({ message: 'Login successful' });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user_management',
  });

  const [rows] = await connection.execute(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password]
  );

  await connection.end();
console.log(Array.isArray(rows),'from 44')
  if (rows) {
    return NextResponse.json({ success: true, user: rows });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}

