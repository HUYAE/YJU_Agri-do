// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const {qus} =req.body
  async function main() {
    await prisma.questions.create({
      data: {
        question:"1222",
        },
    })
}
  res.status(200).json({ name: 'John Doe' })
}
