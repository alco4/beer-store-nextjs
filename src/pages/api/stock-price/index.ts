import type { NextApiRequest, NextApiResponse } from 'next'
import stock from '../stockPrice'

type Data = {
    stock: {}
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json({ stock })
    }
}
