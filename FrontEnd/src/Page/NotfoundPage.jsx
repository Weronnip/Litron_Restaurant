import styles from "./css/notfound.module.css"
export function ErrorPage() {

    return(
        <>
            <div className={styles.window__error}>
                <h3 className={styles.error__title}>Упсс...</h3>
                <p className={styles.error__text}>Страницы не существует, вернитесь на <a href="/home" className={styles.bth__error}>домашнию страницу</a>!</p>
            </div>
        </>
    );
}