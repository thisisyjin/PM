import styled from 'styled-components';

import CitySelect from './CitySelect';
import SeoulMap from './SeoulMap';
import LevelInfo from './LevelInfo';
import PmDetail from './PmDetail';
import ModalButton from './ModalButton';

const ContentBlock = styled.div`
  display: flex;
  padding: 20px 100px;
  justify-content: center;
`;

const CityBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 120px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = () => {
  return (
    <ContentBlock>
      <CityBlock>
        <CitySelect />
        <SeoulMap />
      </CityBlock>

      <InfoBlock>
        <LevelInfo />
        <PmDetail />
        <ModalButton />
      </InfoBlock>
    </ContentBlock>
  );
};

export default Content;
