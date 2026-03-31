"use server";

import { microLeadSchema, fullLeadSchema } from "@/utils/schemaValidation";

export async function submitLead(prevState: any, formData: FormData) {
  const email = formData.get("email");

  const validation = microLeadSchema.safeParse({ email });

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Por favor revisa el correo ingresado."
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("LEAD BASE:", validation.data.email);

    return {
      success: true,
      errors: null,
      message: "¡Acceso solicitado con éxito! Te contactaremos a la brevedad."
    };
  } catch (error) {
    return { success: false, errors: null, message: "Error procesando." };
  }
}

export async function submitAuditLead(prevState: any, formData: FormData) {
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    teamSize: formData.get("teamSize"),
  };

  const validation = fullLeadSchema.safeParse(payload);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Por favor revisa los campos en rojo."
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("LEAD AUDITORIA:", validation.data);

    return {
      success: true,
      errors: null,
      message: "¡Auditoría solicitada exitosamente!"
    };
  } catch (error) {
    return { success: false, errors: null, message: "Error al registrar la solicitud." };
  }
}
