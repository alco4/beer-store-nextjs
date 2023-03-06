import styles from './sectionTitle.module.scss'

export const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className={styles.sectionTitle}>
            <h3 className={styles.sectionTitle__title}>{title}</h3>
            <p className={styles.sectionTitle__action}>See All</p>
        </div>
    )
}