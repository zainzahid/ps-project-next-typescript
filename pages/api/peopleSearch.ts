import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import CONSTANTS from 'src/utils/constants';

interface PersonSearchRequest extends NextApiRequest {
  query: {
    state?:string;
    city?:string;
    fname:string;
    lname:string;
    mname?:string;
  }
}

interface PersonResults {
  person:PersonResult[];
}

interface PersonResult {
  age:number,
  fullName:string,
  address: {
      city: string;
      state: string;
      fullAddress:string;
      streetNumber:string;
      street:string;
      streetSuffix:string;
      aptName:string;
      postdir:string;
      predir:string; 
  },
  cityStates:string[];
}

interface MongoBase {
  data?:unknown;
  references?:unknown[];
  mainReferenceIds?:unknown[];
  permissionIds?:unknown[];
  tempClient?:unknown|PersonResults;
  tempClientSecured?:unknown;
  inputs?:unknown[];
  tagIds?:unknown[];
  rawIds?:string[];
}
interface MongoObj extends MongoBase {
  raws:MongoBase[];
}

interface MongoDocs {
  collectionName:string;
  obj:MongoObj;
}

interface PersonSearchResponse extends NextApiResponse {
  reasonObj?: unknown;
  docs?: any[];
}

const handler:NextApiHandler = async (req:PersonSearchRequest, res:PersonSearchResponse) => {
  const params = {
    param: {
      productKey: 'nameSearch',
      userInput: {state:"VA",fname:"Maarten",lname:"Sundman"}, //req.query,
      page: 1,
      perPage: 100
    }
  }
  const response = await fetch(`${CONSTANTS.API_BASE_URL}peopleSearch/peopleSearch`,{
    body:JSON.stringify(params),
    method: 'POST',
    mode: 'cors',
    referrer:'https://dev.www.privaterecords.net/name/loader',
    referrerPolicy: 'strict-origin-when-cross-origin'
  });
  if (response) {
    res.status(response.status).json(await response.json());
  }
}
export default handler;