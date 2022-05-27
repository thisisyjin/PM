import styled from 'styled-components';
import { ReactComponent as PmLevelICO } from '../assets/pmLevel.svg';
import colors from '../lib/styles/colors';

const LevelInfoBlock = styled.div`
  width: 400px;
  border-radius: 15px;
  border: 2.5px solid #000;
  text-align: center;
  margin-bottom: 20px;

  .level-title {
    padding: 8px 0;
    font-size: 20px;
    border-bottom: 2.5px solid #000;
    margin-bottom: 14px;
  }
`;

const LevelIcons = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 14px;

  svg {
    width: 40px;
  }

  .very-bad {
    stroke: ${colors.level[0]};
  }
  .bad {
    stroke: ${colors.level[1]};
  }
  .soso {
    stroke: ${colors.level[2]};
  }

  .good {
    stroke: ${colors.level[3]};
  }

  .desc {
    width: 60px;
    font-size: 15px;
    letter-spacing: -0.03em;
    margin-right: 10px;
    margin-left: 6px;
    text-align: left;
  }
`;

const LevelInfo = () => {
  return (
    <LevelInfoBlock>
      <h3 className="level-title">미세먼지 Level</h3>
      <LevelIcons>
        <PmLevelICO className="very-bad" />
        <span className="desc">매우 나쁨</span>
        <PmLevelICO className="bad" />
        <span className="desc">나쁨</span>
        <PmLevelICO className="soso" />
        <span className="desc">보통</span>
        <PmLevelICO className="good" />
        <span className="desc">좋음</span>
      </LevelIcons>
    </LevelInfoBlock>
  );
};

export default LevelInfo;
