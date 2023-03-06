class Product {
    id: number;
    brand: string;
    skus: any;
    defaultSku: any;
    imageUrl: string;
    origin: string;
    description: string;
    constructor(id: number, brand: string, skus: {}[], defaultSku: any, imageUrl: string, origin: string, description: string) {
        this.id = id;
        this.brand = brand;
        this.skus = skus;
        this.defaultSku = defaultSku;
        this.imageUrl = imageUrl;
        this.origin = origin;
        this.description = description;
    }

    /**By modeling the data in this way, we avoid a problem in the future,
      since if the response of the api changes some value,
      we would only have to change the property in one place.*/
    static fromJson({ id, brand, skus, image, origin, information }: { id: number, brand: string, skus: any, image: string, origin: string, information: string }) {
        return new Product(
            id,
            brand,
            skus,
            skus[0].code,
            image,
            origin,
            information
        );
    }
}

export default Product;