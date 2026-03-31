import { z } from "zod";

export const microLeadSchema = z.object({
  email: z.string().email("Formato de correo inválido").trim(),
});

export const fullLeadSchema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  email: z.string().email("Formato de correo inválido").trim(),
  phone: z.string().min(10, "Debe tener al menos 10 dígitos"),
  company: z.string().min(2, "Ingresa el nombre de tu empresa"),
  teamSize: z.string().optional(),
});

export type ValidatedMicroLead = z.infer<typeof microLeadSchema>;
export type ValidatedFullLead = z.infer<typeof fullLeadSchema>;
