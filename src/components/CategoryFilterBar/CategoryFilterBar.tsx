import { CategoryFilterButton } from '@/components'
import styles from './categoryFilterBar.module.scss'

export const CategoryFilterBar = () => {
    return (
        <div className={styles.categoryFilterBar}>
            <CategoryFilterButton text="All" />
            <CategoryFilterButton icon="/images/icons/Beer.png" text="Beer" selected />
            <CategoryFilterButton icon="/images/icons/Wine-glass.png" text="Wine" />
        </div>
    )
}