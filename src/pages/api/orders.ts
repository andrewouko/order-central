// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { APIData, Order } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next'
import Orders from '../../../orders.json';

const orders = Orders.map(order => {
    const pick_date_fmt = order.pick_date.split("/").map(i => Number(i))
    let new_order: Order = {
        ...order,
        id: Number(order.id),
        order_num: Number(order.order_num),
        status: order.status as "ordered" | "shipped" | "delivered",
        created_on: new Date(order.created_on),
        pick_date: new Date(pick_date_fmt[2], pick_date_fmt[1] - 1, pick_date_fmt[0]),
        category: order.category as "automatic" | "manual" | "electric" | "hydro-fueled",
    }
    return new_order;
})

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIData>
) {
    if(req.method === 'GET') {
        return res.status(200).json({
            status: 1,
            message: 'Success',
            data: orders
        })
    }
    return res.status(500).json({ status: 0, message: 'Invalid request method', data: [] })
}
