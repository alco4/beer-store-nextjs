import styles from './homeTitle.module.scss'

export const HomeTitle = () => {
    return (
        <div className={styles.homeTitle}>
            <p className={styles.homeTitle__userName}>Hi Mr. Michael,</p>
            <h2>Welcome back!</h2>
        </div>
    )
}