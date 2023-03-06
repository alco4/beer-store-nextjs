import type { NextApiRequest, NextApiResponse } from 'next'
import stock from '../stockPrice'

type Data = {
    productDetail: {}
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        // @ts-ignore
        res.status(200).json({ productDetail: stock[req.query.sku] })
    }
}
