import { z } from "zod";

export const gestoryLeadSchema = z.object({
  email: z.string().email("Formato de correo inválido").trim(),
  // Puedes agregar los otros campos aquí si los incluyes en los formularios extendidos,
  // por ahora cubrimos la captura base del Hero.
});

export type ValidatedLead = z.infer<typeof gestoryLeadSchema>;
