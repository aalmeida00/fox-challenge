import { Wrapper, ChipsContent } from './styles';

const Chips = (props) => {
  const { variation, content } = props;
  const positiveSymbol = '↑';
  const negativeSymbol = '↓';

  return (
    <Wrapper variation={variation === 'positive' ? 'positive' : 'negative'}>
      <ChipsContent>
        {variation === 'positive' ? positiveSymbol : negativeSymbol} Chips
      </ChipsContent>
    </Wrapper>
  );
};

export default Chips;
