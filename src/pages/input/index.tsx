import { FormEvent, useState } from "react";
import { BarNvigation } from "../../components/barnavigation";
import { Form } from "../../components/form";


import styles from './input.module.css'





export function Input() {


    const [clientes, setClientes] = useState('')
    const [valor, setValor] = useState("")
    const [entregador, setEntregador] = useState('')

      const [pag, setPag] = useState(1)
      const listFormPag = [
        {id: "DINHEIRO", name: 'DIN'},
        {id: "CARTÃO", name: 'CART'},
        {id: "PIX-MAQUINA", name: 'PIX-MAQ'},
        {id: "PIX-CNPJ", name: 'PIX-CNPJ'},
      ]

      const [app, setApp] = useState(1)
      const listApp = [
        {id: "APP", name: "APP"},
        {id: "WHATSAPP", name: 'WPP'},
      ]

      

    async function RegisterDely(e: FormEvent) {
        e.preventDefault();
        console.log(clientes)
        console.log(pag)
        //localStorage.setItem("1", valor)
        //localStorage.setItem("2", clientes)
        //localStorage.clear()



    }
    //localStorage.removeItem("1")






    return (
        <div className={styles.main} >
            <header className="">
                <BarNvigation />
            </header>

            <div className={styles.divForm}>
                <form onSubmit={RegisterDely} className={styles.form}>
                    <div>
                        <label className={styles.label}>CLIENTE:</label>
                        <Form
                            type="text"
                            value={clientes}
                            onChange={(e) => setClientes(e.target.value)}



                        />
                    </div>

                    <div>
                        <label className={styles.label}>VALOR:</label>
                        <Form
                            type="number"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}

                        />
                    </div>
                    





                    <select className={styles.select}
                    value={pag}
                    onChange={e => setPag(e.target.value)}
                    >
                        {listFormPag.map((item, index)=> (
                            <option value={item.id}>{item.name}</option>
                        ))}
                        

                    </select>

                    <div>
                        <label className={styles.label}>ENTREGADOR:</label>
                        <Form
                            type="text"
                            value={entregador}
                            onChange={(e) => setEntregador(e.target.value)} />
                    </div>

                    <select className={styles.select}
                    value={app}
                    onChange={e => setApp(e.target.value)}
                    >
                        {listApp.map((item, index) =>(
                           <option value={item.id}>{item.name}</option> 
                        ))}

                    </select>

                    <button type="submit" className={styles.button}>
                        Cadastrar
                    </button>





                </form>
            </div>


        </div>
    )
}