import styled from 'styled-components';
import colors from '../lib/styles/colors';
import { ReactComponent as GeoICO } from '../assets/geo.svg';
import { Link } from 'react-router-dom';

// 임시 데이터
export const cities = [
  '강남구',
  '강동구',
  '강서구',
  '강북구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '동대문구',
  '도봉구',
  '동작구',
  '마포구',
  '서대문구',
  '성동구',
  '성북구',
  '서초구',
  '송파구',
  '영등포구',
  '용산구',
  '양천구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];

const CitySelectBlock = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
`;

const GeoWrapper = styled.div`
  display: flex;
  margin-right: 80px;
  align-items: center;

  svg {
    width: 20px;
    fill: ${colors.gray[2]};
    margin-right: 8px;
  }

  h3 {
    color: ${colors.gray[2]};
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.02em;
  }
`;

const Select = styled.select`
  cursor: pointer;
  width: 135px;
  height: 50px;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
  border: none;
  border-bottom: 2px solid ${colors.gray[2]};
  margin-right: 20px;

  &:active,
  &:hover {
    background-color: ${colors.gray[0]};
  }
`;

const StyledForm = styled.form`
  display: flex;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  background-color: ${colors.green[2]};
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 17px;

  &:hover {
    background-color: ${colors.green[1]};
  }
`;

const CitySelect = () => {
  return (
    <CitySelectBlock>
      <GeoWrapper>
        <GeoICO />
        <h3>Seoul</h3>
      </GeoWrapper>
      <StyledForm>
        <Select className="hello">
          {cities.map((city, i) => (
            <option key={city} value={i}>
              {city}
            </option>
          ))}
        </Select>
        <StyledLink
          // select의 value대로 이동 (인덱스)
          to={`/pm/0`}
        >
          조회
        </StyledLink>
      </StyledForm>
    </CitySelectBlock>
  );
};

export default CitySelect;
