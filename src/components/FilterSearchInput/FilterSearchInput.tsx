import { ChangeEventHandler, SetStateAction } from 'react'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import styles from './filterSearchInput.module.scss'

export const FilterSearchInput = ({ value, onChange }: { value: string, onChange: ChangeEventHandler<HTMLInputElement> | undefined }) => {
    return (
        <div className={styles.filterSearchInput}>
            <SearchIcon />
            <input type="text" value={value} onChange={onChange} placeholder="Search burger, pizza, drink or ect..." className={styles.filterSearchInput__input} />
        </div>
    )

}