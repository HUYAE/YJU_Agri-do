import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {aws,id} = req.body
  const result = await prisma.answers.create({
      data: {
        answer: aws,
        author: id ,
        },
    })
  res.status(200).json(result)
}
