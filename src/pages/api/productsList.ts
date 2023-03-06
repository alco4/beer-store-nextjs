import type { NextApiRequest, NextApiResponse } from 'next'
import products from './products'

type Data = {
    products: Array<{}>
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json({ products })
    }
}
