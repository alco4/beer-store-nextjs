import Image from 'next/image'
import styles from './homeFooter.module.scss'
import HomeIcon from '@mui/icons-material/Home';

export const HomeFooter = () => {
    return (
        <div className={styles.homeFooter}>
            <HomeIcon style={{ color: '#FF9F24' }} />
            <Image
                src="/images/icons/detailIco.png"
                height={21}
                width={21}
                alt="detailIco"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
            <Image
                src={`/images/icons/cartIco.png`}
                width={22}
                height={22}
                style={{ objectFit: 'contain' }}
                alt="cartIco"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
            <Image
                src={`/images/icons/settingsIco.png`}
                width={22}
                height={22}
                style={{ objectFit: 'contain' }}
                alt="settingsIco"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
        </div>
    )
}