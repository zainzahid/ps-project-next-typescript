import { useMemo } from 'react';
import { environment } from 'src/utils/env';

class IDITokenService {
  private static TOKEN_LIFETIME = 1500000; // 25 * 60 * 1000; - 25 minutes
  private _idi = environment().IDI;
  private token = null;
  public refreshToken = false;

  public getToken = useMemo(() => {
    return async () => {
      if (this.refreshToken || !this.token) {
        const response = await fetch(`${this._idi.BASE_URL}${this._idi.ENDPOINT.TOKEN}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this._idi.IDI_TOKEN}`
          },
          body: '{"glba":"otheruse","dppa":"none"}'
        });
        if (response.ok) {
          const data = await response.json();
          this.token = data.token;
          // Refresh token every 25 minutes
          setTimeout(() => {
            this.refreshToken = true;
          }, IDITokenService.TOKEN_LIFETIME);
          return data.token;
        }
      }
      return this.token;
    }
  }, [this._idi, this.refreshToken, this.token]);
}
export default new IDITokenService;