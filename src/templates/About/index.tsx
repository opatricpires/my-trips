import LinkWrapper from 'components/LinkWrapper';

import { CloseOutline } from '@styled-icons/evaicons-outline';

import * as S from './styles';

const AboutTemplate = (props) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>Lorem Lorem</S.Body>
  </S.Content>
);

export default AboutTemplate;
