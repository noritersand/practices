import React, {useState, useEffect} from 'react';

export default function Coins(): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <h2>니꼴라스와 만들어 본 코인 목록 그리기</h2>
      <p>{coins.length}</p>
      {
        loading ? (
          <strong>Loading...</strong>
        ) : (
          <select>
            {coins.map(coin => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol})
                </option>
              )
            )}
          </select>
        )
      }
    </section>
  );
}

// <strong>Loading...</strong>

