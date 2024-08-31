import { z } from 'zod'
import { primeiraLetraMaiuscula } from './primeiraLetraMaiuscula'
import isCNPJ from 'validation-br/dist/cnpj'; // valida cpnj

export const createUserFormSchema = z.object({
  nm_fantasia: z.string()
    .min(5, "Nome fantasia é obrigatório.")
    .transform(primeiraLetraMaiuscula),

  rz_social: z.string()
    .min(5, "Nome fantasia é obrigatório."),

  cnpj: z.string()
    .refine(isCNPJ, 'O CNPJ informado é inválido.'),

  ie: z.string(),

  email: z.string()
    .email("Formato de e-mail inválido")
    .toLowerCase(), // em caso de erro

  contato: z.string()

})