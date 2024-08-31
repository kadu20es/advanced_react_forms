import { Styles } from '../styles/formStyles'

// cpf de teste: 812.243.300-64

const pessoaFisica = () => {
  return (
    <div>
        <p>Cadastro de Pessoa Física</p>
        <form className={Styles.formDarkStyle()}>
            <div className={Styles.divDarkStyles()}>
                <label htmlFor="">Nome</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="">Gênero</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="">Sexo</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="">Data de Nascimento</label>
                <input type='date' className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="">CPF</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="">Telefone</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>
        </form>

    </div>
  )
}

export default pessoaFisica