import styles from './barnavigation.module.css'

export function BarNvigation(){
    return(
        <header className={styles.header}>
            <section className={styles.main}>
                <div>
                    DIN
                </div>

                <div>
                    CARTÃO
                </div>

                <div>
                    PIX MAQ
                </div>

                <div>
                    PIX CNPJ
                </div>
            </section>
        </header>
    )
}