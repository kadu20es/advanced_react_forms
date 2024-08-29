import { z } from 'zod'

export const createUserFormSchema = z.object({
  nm_fantasia: z.string()
    .min(5, "Nome fantasia é obrigatório."),
  rz_social: z.string()
    .min(5, "Nome fantasia é obrigatório."),
  cnpj: z.string(),
  ie: z.string(),
  email: z.string()
    .email("Formato de e-mail inválido"), // em caso de erro
  contato: z.string()
})