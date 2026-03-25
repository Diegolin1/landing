import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, teamSize } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }

    // 1. Log del lead en consola (siempre funciona, sin dependencias externas)
    console.log('[LEAD]', { name, email, phone, company, teamSize, ts: new Date().toISOString() });

    // 2. Notificación por WhatsApp/Telegram (opcional — activar cuando esté listo)
    // const waMsg = encodeURIComponent(`🔔 Nuevo lead:\n• Nombre: ${name}\n• Empresa: ${company}\n• WhatsApp: ${phone}\n• Email: ${email}\n• Equipo: ${teamSize}`);
    // await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${waMsg}`);

    // 3. Guardar en la base de datos del SaaS backend (opcional, descomentar cuando esté disponible)
    // await fetch(`${process.env.BACKEND_URL}/api/leads`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': process.env.BACKEND_API_KEY || '',
    //   },
    //   body: JSON.stringify({ name, email, phone, company, teamSize }),
    // });

    return NextResponse.json({ ok: true, message: 'Lead registrado correctamente' });
  } catch (err) {
    console.error('[LEAD ERROR]', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
