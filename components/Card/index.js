import {
  BodyWrapper,
  FooterWrapper,
  HeaderWrapper,
  Section,
  Wrapper,
} from './styles';
import Chips from '../Chips';

const Card = (props) => {
  const { icon, name, price, volume, variation } = props;

  return (
    <Section>
      <HeaderWrapper>
        <img src="https://via.placeholder.com/28x28" alt={name} />
        <Chips variation="negative" />
      </HeaderWrapper>
      <BodyWrapper>
        Asset Name <br />
        Asset Price
      </BodyWrapper>
      <FooterWrapper>
        Asset Volume <br />
        Volume
      </FooterWrapper>
    </Section>
  );
};

export default Card;
