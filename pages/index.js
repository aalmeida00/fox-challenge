import Head from 'next/head';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Wrapper } from '../components/Card/styles';
import Title from '../components/Title';

export default function Home() {
  const [instruments, setInstruments] = useState([]);
  const [detailedInfo, setDetailedInfo] = useState([]);
  const [stopListen, setStopListen] = useState(true);

  const openSocket = (ws) => {
    ws.addEventListener('open', function open() {
      // GET INSTRUMENTS
      const payloadInstruments = {
        m: 0,
        i: 2,
        n: 'GetInstruments',
        o: JSON.stringify({ OMSID: 1 }),
      };

      ws.send(JSON.stringify(payloadInstruments));

      if (instruments.length > 1 && stopListen) {
        instruments.map((crypto) => {
          const variablePayload = {
            m: 0,
            i: 2,
            n: 'SubscribeLevel1',
            o: JSON.stringify({ InstrumentId: crypto.InstrumentId || 1 }),
          };

          ws.send(JSON.stringify(variablePayload));
        });
        setStopListen(false);
      }
    });
  };

  const closeSocket = (ws) => {
    ws.addEventListener('close', function close() {
      console.log('disconnected');
    });
  };

  const subscribeMessageSocket = (ws) => {
    ws.addEventListener('message', function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent
      const data = JSON.parse(o);

      // RESPONSE WITH ALL CRYPTOS
      if (channel === 'GetInstruments') {
        setInstruments(data);
      }

      // FIRST RESPONSE
      if (channel === 'SubscribeLevel1') {
        console.log('SubscribeLevel1', data);
      }

      // UPDATES TO SUBSCRIBELEVEL1
      if (channel === 'Level1UpdateEvent') {
        setDetailedInfo(data);
      }
    });
  };

  useEffect(() => {
    const ws = new WebSocket('wss://api.foxbit.com.br/');
    openSocket(ws);
    closeSocket(ws);
    subscribeMessageSocket(ws);
  }, [instruments]);


  return (
    <div>
      <Head>
        <title>Foxbit - Frontend Challenge</title>
        <meta name="description" content="Foxbit frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Foxbit - Frontend Challenge</Title>
        <Wrapper>
          {instruments &&
            instruments.map((instrument) => (
              <Card
                key={instrument.InstrumentId}
                instrumentId={instrument.InstrumentId}
                symbol={instrument.Symbol}
                icon={instrument.Product1Symbol.toLowerCase()}
                detailedInfo={detailedInfo}
              />
            ))}
        </Wrapper>
      </main>
    </div>
  );
}
