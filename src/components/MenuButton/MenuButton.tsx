import Image from 'next/image'
import styles from './menuButton.module.scss'

export const MenuButton = () => {
    return (
        <div className={styles.menuButton}>
            <Image
                src="/images/rectangle1.svg"
                height={6}
                width={16}
                alt="rectangle1"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
            <Image
                src="/images/rectangle2.svg"
                height={6}
                width={10}
                alt="rectangle2"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
            <Image
                src="/images/rectangle3.svg"
                height={6}
                width={16}
                alt="rectangle3"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
        </div>
    )

}