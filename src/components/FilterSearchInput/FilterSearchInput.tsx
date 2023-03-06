import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import styles from './filterSearchInput.module.scss'

export const FilterSearchInput = () => {
    return (
        <div className={styles.filterSearchInput}>
            <SearchIcon />
            <input type="text" placeholder="Search burger, pizza, drink or ect..." className={styles.filterSearchInput__input} />
        </div>
    )

}