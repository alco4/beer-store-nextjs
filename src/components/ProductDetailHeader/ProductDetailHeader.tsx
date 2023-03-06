import styles from './productDetailHeader.module.scss'
import { ProfilePicture } from '@/components'
import { MenuButton } from '@/components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useRouter } from 'next/router'

export const ProductDetailHeader = () => {
    let router = useRouter()

    function redirect() {
        router.push('/')
    }

    return (
        <div className={styles.productDetailHeader}>
            <ArrowBackIcon className={styles.arrowBack} onClick={redirect} />
            <h3>Detail</h3>
            <div className={styles.productDetailHeader__options}>
                <MoreHorizIcon />
            </div>
        </div>
    )
} 