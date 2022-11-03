import {
  BodyWrapper,
  FooterWrapper,
  HeaderWrapper,
  Section,
  VolumeLabel,
  VolumeValue,
  SymbolValue,
  SymbolLabel,
} from './styles';
import Chips from '../Chips';
import { useEffect, useState } from 'react';

const Card = (props) => {
  const { icon, symbol, detailedInfo, instrumentId } = props;
  const [value, setValue] = useState();
  const [volume24h, setVolume24h] = useState();
  const [variation, setVariation] = useState();

  useEffect(() => {
    if (detailedInfo && (detailedInfo.InstrumentId === instrumentId)) {
      setVolume24h(detailedInfo.Rolling24HrVolume);
      setValue(detailedInfo.LastTradedPx);
      setVariation(detailedInfo.Rolling24HrPxChange);
    }
  }, [detailedInfo]);

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 3,
  });

  return (
    <Section>
      <HeaderWrapper>
        <img
          src={`https://statics.foxbit.com.br/icons/colored/${icon}.svg`}
          alt={symbol}
        />
        <Chips variation={variation > 0 ? 'positive' : 'negative'} />
      </HeaderWrapper>
      <BodyWrapper>
        <SymbolLabel>{symbol}</SymbolLabel>
        <SymbolValue><span>R$</span> {currencyFormatter.format(value).substring(3)}</SymbolValue>
      </BodyWrapper>
      <FooterWrapper>
        <VolumeLabel>Volume (24h)</VolumeLabel>
        <VolumeValue>{volume24h}</VolumeValue>
      </FooterWrapper>
    </Section>
  );
};

export default Card;
