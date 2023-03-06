import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './productCard.module.scss'
import { formatMoney, encodeURI } from '@/utils'
import { useRouter } from 'next/router'


export const ProductCard = ({ productId, sku, brand, imageUrl }: { key: number, productId: number, sku: string, brand: string, imageUrl: string }) => {
  let router = useRouter()
  let [loading, setLoading] = useState(false)

  const [price, setPrice] = useState(0)
  useEffect(() => {
    const fetchProductPrice = async () => {
      setLoading(true)
      const productData = await fetch(`api/stock-price/${sku}`)
      const { productDetail: { price } } = await productData.json()
      setPrice(price)
      setLoading(false)
    }

    try {
      fetchProductPrice()
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function redirect() {
    router.push(`${productId}-${encodeURI(brand)}`)
  }

  return (
    <div className={styles.productCard} onClick={redirect}>
      {loading ? 'Loading...' :
        <>
          <p className={styles.productCard__title}>{brand}</p>
          <div className={styles.productCard__image}>
            {imageUrl && <Image
              src={`/images${imageUrl}`}
              fill
              style={{ objectFit: 'contain' }}
              alt="productImg"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
           33vw"
            />}
          </div>
          <div className={styles.productCard__footer}>
            <p>{formatMoney(price)}</p>
            <div className={styles.productCard__addToCartButton}>+</div>
          </div>
        </>
      }
    </div>
  )
} 