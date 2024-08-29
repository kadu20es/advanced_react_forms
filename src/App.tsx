import { useState } from 'react';
import { PessoaJuridica } from './interfaces/pessoaJuridica';
import './styles/global.css'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserFormSchema } from './utils/validacoes';

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
    <main className='h-screen bg-zinc-950 text-zinc-300 flex flex-col gap-10 items-center justify-center'>
      <form onSubmit={handleSubmit(createPessoaJuridica)} className='flex flex-col gap-4 w-full max-w-xs'>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Nome fantasia</label>
          <input
            type="text"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('nm_fantasia')}/>
            {errors.nm_fantasia && <span>{errors.nm_fantasia.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Razão Social</label>
          <input
            type="text"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('rz_social')} />
            {errors.rz_social && <span>{errors.rz_social.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">CNPJ</label>
          <input
            type="text"
            maxLength={14}
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('cnpj')}
            />
            {errors.cnpj && <span>{errors.cnpj.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Inscrição Estadual</label>
          <input
            type="text"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('ie')}/>
            {errors.ie && <span>{errors.ie.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
          </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Contato</label>
          <input
            type="text"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('contato')}/>
            {errors.contato && <span>{errors.contato.message}</span>}
          </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="" defaultValue="ativo">Status</label>
          <select
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('status')}>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        <button
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
          >Salvar</button>
      </form>

      <pre className='text-red-700'>
        {output}
      </pre>

    </main>
  )
}

export default App
