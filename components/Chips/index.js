import { Wrapper, ChipsContent } from './styles';

const Chips = (props) => {
  const { variation, content } = props;
  const positiveSymbol = '↑';
  const negativeSymbol = '↓';

  return (
    <Wrapper data-testid='chipsContent' variation={variation === 'positive' ? 'positive' : 'negative'}>
      <ChipsContent >
        {variation === 'positive' ? positiveSymbol : negativeSymbol} {content}
      </ChipsContent>
    </Wrapper>
  );
};

export default Chips;
