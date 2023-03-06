import Image from 'next/image'
import styles from './profilePicture.module.scss'
export const ProfilePicture = () => {
    return (
        <div className={styles.profilePicture}>
            <Image
                className={styles.profilePicture}
                src="/images/profile.jpg"
                height={47}
                width={47}
                alt="Your Name"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
        </div>
    )
}