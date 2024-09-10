import { IfxCard, IfxCardImage, IfxCardOverline, IfxCardHeadline, IfxCardLinks, IfxCardText, IfxButton } from '@infineon/infineon-design-system-react';
import './card.scss';

function Card({ direction }) {
  return (
    <IfxCard direction={direction} href="" target="_blank">
    <IfxCardImage position="undefined" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></IfxCardImage>
    <IfxCardOverline>
        Overline
        </IfxCardOverline>
      <IfxCardHeadline>
        Headline
        </IfxCardHeadline>
     <IfxCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </IfxCardText>
      <IfxCardLinks slot="buttons">
          <IfxButton variant="primary">Button</IfxButton>
          <IfxButton variant="secondary">Button</IfxButton>
          </IfxCardLinks>
    </IfxCard>
  );
}

export default Card;