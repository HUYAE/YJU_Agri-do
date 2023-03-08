// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const id = req.body
    const serch = await prisma.questions.findUnique({
        where:{ id:id},
        include:{posts:true},
    });
    console.log(serch )
  res.status(200).json(serch )
}
