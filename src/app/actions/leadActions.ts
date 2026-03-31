"use server";

import { gestoryLeadSchema } from "@/utils/schemaValidation";

export async function submitLead(prevState: any, formData: FormData) {
  const email = formData.get("email");

  const validation = gestoryLeadSchema.safeParse({
    email,
  });

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Por favor revisa los campos ingresados."
    };
  }

  try {
    // Aquí iría la lógica comercial real: inyectar a Prisma/Drizzle o webhook al CRM
    // Simulación de delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("LEAD CAPTURADO EXITOSAMENTE:", validation.data.email);

    return {
      success: true,
      errors: null,
      message: "¡Acceso solicitado con éxito! Te contactaremos a la brevedad."
    };
  } catch (error) {
    return {
      success: false,
      errors: null,
      message: "Ocurrió un error al procesar tu solicitud."
    };
  }
}
