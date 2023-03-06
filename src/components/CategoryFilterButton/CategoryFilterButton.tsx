import Image from 'next/image'
import { SvgIconComponent } from "@mui/icons-material";
import styles from './categoryFilterButton.module.scss'

export const CategoryFilterButton = ({ icon = null, text, selected }: { icon?: string | null, text: string, selected?: boolean }) => {
    return (
        <div className={`${styles.categoryFilterButton} ${selected && styles.categoryFilterButton__selected}`}>
            {icon && <Image
                src={icon}
                height={20}
                width={20}
                alt="CategoryFilterButtonIco"
            />}
            <p className={styles.categoryFilterButton__text}>{text}</p>
        </div>
    )

}