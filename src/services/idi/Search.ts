import { useMemo } from 'react';
import { environment } from 'src/utils/env';
import IDITokenService from 'src/services/idi/Token';

interface Query {
  firstName:string;
  lastName:string;
  state?:string;
  city?:string;
  middleInitial?:string;
}

class IDISearchService {
  private _idi = environment().IDI;
  private _query:Query = null;

  public Search = async (query:Query) => {
    this._query = query;
    return await this.search();
  }
  
  private search = useMemo(() => {
    return async () => {
      const token = await IDITokenService.getToken();
      const response = await fetch(`${this._idi.BASE_URL}${this._idi.ENDPOINT.SEARCH}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(this._query)
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    }
  }, [this._idi, this._query]);
}
export default new IDISearchService;