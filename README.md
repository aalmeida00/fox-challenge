# Foxbit Frontend Challenge

### ℹ️ ATENÇÃO
Clonar ou baixar o código deste repositório e subir a resolução do teste em uma conta github ou enviar o zip com arquivos

Você precisará criar a tela de listagem de moedas, conforme layout abaixo, consumindo informações do WebSocket para exibir na tela.

![image](https://user-images.githubusercontent.com/13206817/159704439-0215b705-3155-46de-8159-bd0439d74586.png)

### Pré-requisitos

#### O que é permitido:
- Usar as dependências já adicionadas ao projeto
- Adicionar novas dependências conforme a necessidade, pensando nos pró e contras das novas dependências ao projeto
- Alterar o código fonte base fornecido conforme julgar necessário

#### O que não é permitido:
- Mudar a linguagem e framework de programação
- Inserir dependências que não são utilizadas

Lembre-se que você deve implementar testes automatizados para os fluxos que achar necessário.

O objetivo desse teste é avaliar:
- organização;
- semântica;
- responsividade
- funcionamento e usabilidade
- uso e abuso das features das linguagens (React, NextJS, syled-components);
- performance do código;
- testes automatizados.

## Anatomia do componente

### Overview

![image](https://user-images.githubusercontent.com/13206817/159707042-188e81a6-c58a-45e7-a27b-8d6f970b6795.png)

### Variação de preço

![image](https://user-images.githubusercontent.com/13206817/159707277-60c77f8e-25eb-4326-bb2b-b4ddbb08f98e.png)

#### CORES

- BG 50 POSITIVE: #EBFAF4
- BG 50 NEGATIVE: #FCEDED
- CONTENT 800 POSITIVE: #214739
- CONTENT 800 NEGATIVE: #5C3030

### Espaçamentos

![image](https://user-images.githubusercontent.com/13206817/159706712-263204f7-311d-48ff-bb81-5e85a6f0d4bf.png)

### Tipografia

![image](https://user-images.githubusercontent.com/13206817/159708071-da57b013-5b0d-46a6-94fb-427bdb7fc011.png)

#### TAMANHOS

- XXXS = 10px
- XXS = 12px
- SM = 16px
- MD = 20px

## Métodos para serem chamados no WebSocket

A comunicação será feita toda por WebSocket para a exibição dos dados na tela, sendo as chamadas explicadas abaixo.

### URL DA API

`wss://api.foxbit.com.br/`

### ```GetInstrumentIds``` - Pegar listagem de Moedas

A chamada de WebSocket retorna varios campos e informações, porém devem ser considerados os campos descritos abaixo.

Exemplo de requisição:

```JavaScript
{"m":0,"i":0,"n":"getInstruments","o":"{}"}
```

Campos a serem utilizados:

```InstrumentId```: Id do par de moedas negociadas

```Symbol```: Nome do par negociado

```SortIndex```: ordem de exibição do par

Exemplo de retorno:
```Javascript
{
  "m": 0,
  "i": 0,
  "n": "getInstruments",
  "o": "[{\"OMSId\":1,\"InstrumentId\":1,\"Symbol\":\"BTC/BRL\",\"Product1\":1,\"Product1Symbol\":\"BTC\",\"Product2\":2,\"Product2Symbol\":\"BRL\",\"InstrumentType\":\"Standard\",\"VenueInstrumentId\":1,\"VenueId\":1,\"SortIndex\":0,\"SessionStatus\":\"Running\",\"PreviousSessionStatus\":\"Paused\",\"SessionStatusDateTime\":\"2020-07-11T01:27:02.851Z\",\"SelfTradePrevention\":true,\"QuantityIncrement\":1e-8,\"PriceIncrement\":0.001,\"MinimumQuantity\":1e-8,\"MinimumPrice\":0.001,\"VenueSymbol\":\"BTC/BRL\",\"IsDisable\":false,\"MasterDataId\":0,\"PriceCollarThreshold\":0,\"PriceCollarPercent\":0,\"PriceCollarEnabled\":false,\"PriceFloorLimit\":0,\"PriceFloorLimitEnabled\":false,\"PriceCeilingLimit\":0,\"PriceCeilingLimitEnabled\":false,\"CreateWithMarketRunning\":true,\"AllowOnlyMarketMakerCounterParty\":false},{\"OMSId\":1,\"InstrumentId\":2,\"Symbol\":\"LTC/BRL\",\"Product1\":3,\"Product1Symbol\":\"LTC\",\"Product2\":2,\"Product2Symbol\":\"BRL\",\"InstrumentType\":\"Standard\",\"VenueInstrumentId\":3,\"VenueId\":1,\"SortIndex\":0,\"SessionStatus\":\"Running\",\"PreviousSessionStatus\":\"Paused\",\"SessionStatusDateTime\":\"2020-07-11T01:27:50.427Z\",\"SelfTradePrevention\":true,\"QuantityIncrement\":1e-8,\"PriceIncrement\":0.001,\"MinimumQuantity\":1e-8,\"MinimumPrice\":0.001,\"VenueSymbol\":\"LTC/BRL\",\"IsDisable\":false,\"MasterDataId\":0,\"PriceCollarThreshold\":0,\"PriceCollarPercent\":0,\"PriceCollarEnabled\":false,\"PriceFloorLimit\":0,\"PriceFloorLimitEnabled\":false,\"PriceCeilingLimit\":0,\"PriceCeilingLimitEnabled\":false,\"CreateWithMarketRunning\":true,\"AllowOnlyMarketMakerCounterParty\":false}]"
}
```

### ```SubscribeLevel1``` - Tópico que retorna as atualizações de cotação dos pares
#### Parâmetro: ```InstrumentId```

Este tópico se inscreve na cotação de um par, retornando seu valor toda vez que o mesmo sofre uma alteração.

Exemplo de requisição:

```JavaScript
{"m":0,"i":0,"n":"SubscribeLevel1","o":"{\"InstrumentId\":1}"}
```

Campos a serem utilizados:

```LastTradedPx```: Cotação Atual

```Rolling24HrVolume```: Volume negociado nas últimas 24 horas

```Rolling24HrPxChange```: Variaçnao de preço nas últimas 24 horas

Exemplo de retorno
```Javascript
{
  "m": 0,
  "i": 0,
  "n": "SubscribeLevel1",
  "o": "{\"OMSId\":1,\"InstrumentId\":1,\"BestBid\":10.1,\"BestOffer\":20,\"LastTradedPx\":20,\"LastTradedQty\":0.1,\"LastTradeTime\":1614613162,\"SessionOpen\":130,\"SessionHigh\":130,\"SessionLow\":10.1,\"SessionClose\":10.1,\"Volume\":0.1,\"CurrentDayVolume\":0.0005,\"CurrentDayNumTrades\":1,\"CurrentDayPxChange\":-119.9,\"Rolling24HrVolume\":0.0005,\"Rolling24NumTrades\":1,\"Rolling24HrPxChange\":-92.2308,\"TimeStamp\":1614623773}"
}
```

# Informações adicionais

- Fique a vontade para utilizar como base a área das cotações das moedas na página de login da plataforma: https://app.foxbit.com.br/login

- Para obter as imagens, basta utilizar o endereço https://statics.foxbit.com.br/icons/colored/[Product1Symbol].svg.

  Exemplo:

  Product1Symbol = BTC
  URL DA IMAGEM = https://statics.foxbit.com.br/icons/colored/btc.svg

  OBS: necessário deixar o Product1Symbol em lowercase

  Utilizar a default currency como fallback, ela pode ser acessada em `/default-currency.svg`
