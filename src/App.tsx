import { useState } from 'react';
import { PessoaJuridica } from './interfaces/pessoaJuridica';
import './styles/global.css'

import { useForm } from 'react-hook-form' // **1
import { zodResolver } from '@hookform/resolvers/zod' // **1
import { createUserFormSchema } from './utils/validacoes';
import { Styles } from './styles/formStyles';

/**
 * TODO
 *
 * [ ] Validação / transformação
 * [ ] Field arrays
 * [ ] upload de arquivos
 * [ ] composition pattern
 */


function App() {
  const [ output, setOutput ] = useState('');

  /** 1
   * Zod, zodResolver:
   * bibliotecas que auxiliam na validação de dados de formulários
   * Após fazer as validações, passa os dados para o useForm()
   */
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PessoaJuridica>({
    // registra os input
     resolver: zodResolver(createUserFormSchema),
  })

  console.log(errors)

  function createPessoaJuridica(data: PessoaJuridica) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <main className={Styles.mainDarkStyle()}>
      <form onSubmit={handleSubmit(createPessoaJuridica)} className={Styles.formDarkStyle()}>

        <div className={Styles.divDarkStyles()}>
          <label htmlFor="nm_fantasia">Nome fantasia</label>
          <input
            type="text"
            className={Styles.inputDarkStyles()}
            {...register('nm_fantasia')}/>
            {errors.nm_fantasia && <span>{errors.nm_fantasia.message}</span>}
        </div>

        <div className={Styles.divDarkStyles()}>
          <label htmlFor="rz_social">Razão Social</label>
          <input
            type="text"
            className={Styles.inputDarkStyles()}
            {...register('rz_social')} />
            {errors.rz_social && <span>{errors.rz_social.message}</span>}
        </div>

        <div className={Styles.divDarkStyles()}>
          <label htmlFor="cnpj">CNPJ</label>
          <input
            type="text"
            maxLength={14}
            className={Styles.inputDarkStyles()}
            {...register('cnpj')}
            />
            {errors.cnpj && <span>{errors.cnpj.message}</span>}
        </div>

        <div className={Styles.divDarkStyles()}>
          <label htmlFor="ie">Inscrição Estadual</label>
          <input
            type="text"
            className={Styles.inputDarkStyles()}
            {...register('ie')}/>
            {errors.ie && <span>{errors.ie.message}</span>}
        </div>

        <div className={Styles.divDarkStyles()}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className={Styles.inputDarkStyles()}
            {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
          </div>

        <div className={Styles.divDarkStyles()}>
          <label htmlFor="contato">Contato</label>
          <input
            type="text"
            className={Styles.inputDarkStyles()}
            {...register('contato')}/>
            {errors.contato && <span>{errors.contato.message}</span>}
          </div>

        <div className={Styles.divDarkStyles()}>
          <label htmlFor="status" defaultValue="ativo">Status</label>
          <select
            className={Styles.inputDarkStyles()}
            {...register('status')}>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Endereço</label>
          <input
            type="text"
            className={Styles.inputDarkStyles()}
             />
        </div>

        <button
          className={Styles.saveButtonStyle()}
          >Salvar</button>
      </form>

      <pre className='text-red-700'>
        {output}
      </pre>

    </main>
  )
}

export default App
