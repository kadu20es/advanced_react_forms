import { Styles } from "../styles/formStyles"

const endereco = () => {
  return (
    <div>
        <form className={Styles.formDarkStyle()}>
            <div className={Styles.divDarkStyles()}>
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="numero">Número</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="complemento">Complemento</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="municipio">Município</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="uf">UF</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <div className={Styles.divDarkStyles()}>
                <label htmlFor="cep">CEP</label>
                <input type="text" className={Styles.inputDarkStyles()}/>
            </div>

            <button type='submit' className={Styles.saveButtonStyle()}>Salvar</button>
        </form>
    </div>
  )
}

export default endereco