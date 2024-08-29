import { useState } from 'react';
import './styles/global.css'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

function App() {
  const [ output, setOutput ] = useState('');
  const { register, handleSubmit } = useForm() // registra os input

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createPessoaJuridica(data: any) {
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
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Razão Social</label>
          <input
            type="text"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('rz_social')} />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">CNPJ</label>
          <input
            type="text"
            maxLength={14}
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('cnpj')}
            />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Inscrição Estadual</label>
          <input
            type="text"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('cnpj')}/>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('email')}/>
          </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Contato</label>
          <input
            type="text"
            className='border border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white'
            {...register('contato')}/>
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
