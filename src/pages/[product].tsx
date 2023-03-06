import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/ProductDetail.module.scss'
import { Product } from '@/models'
import { ProductDetailHeader } from '@/components'
import { formatMoney } from '@/utils'


export default function ProductDetail() {
    const router = useRouter()
    const [productDetail, setProductDetail] = useState({ skus: [], defaultSku: null, imageUrl: '', brand: '', origin: '', description: '' })
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [selectedSku, setSelectSku] = useState('')
    const [expandDescription, setExpandDescription] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {
        const fetchProducts = async (productId: string | string[] | undefined) => {
            const productsData = await fetch('api/productsList')
            const { products } = await productsData.json()
            const selectedProduct = products.filter((product: { id: string | string[] | undefined }) => product.id == productId)
            const product = Product.fromJson(selectedProduct[0])
            setSelectSku(product.defaultSku)
            setProductDetail(Product.fromJson(selectedProduct[0]))
        }

        try {
            const productId = router.query.product?.slice(0, router.query.product.indexOf('-'))
            if (router.isReady) {
                fetchProducts(productId)
            }
        } catch (e) {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.isReady])


    useEffect(() => {
        let interval = setInterval(function () { }, 5000);
        clearInterval(interval);
        const fetchProductPrice = async () => {
            const productData = await fetch(`api/stock-price/${selectedSku}`)
            const { productDetail: { price, stock } } = await productData.json()
            setPrice(price)
            setStock(stock)
        }
        try {
            if (router.isReady && selectedSku) {
                fetchProductPrice()
                interval = setInterval(function () {
                    fetchProductPrice()
                }, 5000);
            }

        } catch (e) {
            console.log(e)
        }
        return () => {
            clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSku])

    return (
        <div className={styles.productDetail}>
            <ProductDetailHeader />
            <Image
                src={`/images${productDetail.imageUrl}`}
                width={240}
                height={240}
                style={{ objectFit: 'contain' }}
                alt="productImg"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
            <div className={styles.productDetail__content}>
                <div className={styles.productDetail__title}>
                    <h2>{productDetail.brand}</h2>
                    <h2 className={styles.productDetail__price}>{formatMoney(price)}</h2>
                </div>
                <div className={styles.productDetail__subtitle}>
                    <p>{`Origin: ${productDetail.origin} | Stock: ${stock}`}</p>
                </div>
                <h3 className={styles.productDetail__descriptionTitle}>Description</h3>
                <div className={`{expandDescription && styles.productDetail__description}`}>
                    <p>{productDetail.description}</p>
                </div>
                <p className={styles.productDetail__expandDescription} onClick={() => setExpandDescription(!expandDescription)}>Read More</p>
                <h3 className={styles.productDetail__sizeTitle}>Size</h3>
                <div className={styles.productDetail__sizeOptions}>
                    <div className={styles.productDetail__sizeOptions}>{productDetail.skus && productDetail.skus.map(({ code, name }: { code: string, name: string }) => <div onClick={() => setSelectSku(code)} className={`${styles.productDetail__size} ${selectedSku == code && styles.productDetail__sizeSelected}`} key={code}>{name}</div>)}</div>
                </div>
                <div className={styles.productDetail__footer}>
                    <div className={styles.productDetail__cart}>
                        <Image
                            src={`/images/icons/selectedCartIco.png`}
                            width={30}
                            height={30}
                            style={{ objectFit: 'contain' }}
                            alt="selectedCartIco"
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                        />
                    </div>
                    <div className={styles.productDetail__addToCart}>Add to cart</div>
                </div>
            </div>
        </div>
    )
}
