import { SetStateAction, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { CategoryFilterBar, FilterSearchInput, HomeFooter, HomeHeader, HomeTitle, ProductCard } from '@/components'
import { Product } from '@/models'


export default function Home() {
  const [productsListBackup, setProductsListBackup] = useState<any[]>([])
  const [productsList, setProductsList] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const productsData = await fetch('api/productsList')
      const { products } = await productsData.json()
      const modeledProducts = products.map((product: { id: number; brand: string; skus: any; image: string, origin: string, information: string }) => Product.fromJson(product))
      setProductsList(modeledProducts)
      setProductsListBackup(modeledProducts)
      setLoading(false)
    }

    try {
      fetchProducts()
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const filteredProducts = productsListBackup.filter(({ brand }) =>
      brand.toLowerCase().includes(filterValue.toLowerCase())
    )
    setProductsList(filteredProducts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue])

  const onChangeFilterValue = (e: { target: { value: SetStateAction<string> } }) => setFilterValue(e.target.value)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HomeHeader />
        <HomeTitle />
        <FilterSearchInput value={filterValue} onChange={onChangeFilterValue} />
        <CategoryFilterBar />
        {loading ? 'Loading...' :
          <div className={styles.productList}>
            {productsList.map(({ id, brand, defaultSku, imageUrl }) => {
              return <ProductCard key={id} productId={id} sku={defaultSku} brand={brand} imageUrl={imageUrl} />
            })}
          </div>}
        <HomeFooter />
      </main>
    </>
  )
}
