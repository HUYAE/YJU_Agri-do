import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {qus} = req.body
  const result = await prisma.questions.create({
      data: {
        question: qus,
        },
    })
  res.status(200).json(result)
}
