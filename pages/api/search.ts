import { NextApiRequest, NextApiResponse } from 'next';
import IDISearchService from 'src/services/idi/Search';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.body;
  const response = await IDISearchService.Search(query);
  res.status(200).json(response);
}