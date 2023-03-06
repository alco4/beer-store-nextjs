import styles from './homeHeader.module.scss'
import { ProfilePicture } from '@/components'
import { MenuButton } from '@/components'

export const HomeHeader = () => {
    return (
        <div className={styles.homeHeader}>
            <MenuButton />
            <ProfilePicture />
        </div>
    )
} 