import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../utils/sendEmail';

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

    // 3. Guardar en la base de datos del SaaS backend
    // 2.5. Enviar correo a destinatario
    try {
      await sendEmail({
        to: 'Diegorodvaz73@gmail.com',
        subject: 'Nuevo lead desde landing Gestory',
        html: `<h2>Nuevo lead recibido</h2>
          <ul>
            <li><b>Nombre:</b> ${name}</li>
            <li><b>Email:</b> ${email}</li>
            <li><b>Teléfono:</b> ${phone}</li>
            <li><b>Empresa:</b> ${company || ''}</li>
            <li><b>Tamaño de equipo:</b> ${teamSize || ''}</li>
            <li><b>Fecha:</b> ${new Date().toLocaleString()}</li>
          </ul>`
      });
    } catch (mailErr) {
      console.error('[EMAIL ERROR]', mailErr);
    }
    try {
      const backendUrl = process.env.BACKEND_URL || 'https://erp-prod-b76f4dc5f060.herokuapp.com';
      const response = await fetch(`${backendUrl}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Note: Add BACKEND_API_KEY to .env if extra security is needed
          'x-api-key': process.env.BACKEND_API_KEY || '',
        },
        body: JSON.stringify({ 
          name, 
          email, 
          phone, 
          company, // Matches 'companyName' mapping in controller
          teamSize,
          source: 'LANDING'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('[BACKEND ERROR]', errorData);
      } else {
        console.log('[BACKEND SUCCESS] Lead synchronized');
      }
    } catch (backendErr) {
      console.error('[BACKEND FETCH FAILED]', backendErr);
      // We don't fail the whole request because logging/notifying might have worked
    }

    return NextResponse.json({ ok: true, message: 'Lead registrado correctamente' });
  } catch (err) {
    console.error('[LEAD ERROR]', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
