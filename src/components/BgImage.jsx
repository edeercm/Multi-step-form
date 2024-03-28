import React from 'react'
import styled from 'styled-components';
import bgdesk from '../assets/images/bg-desk.svg';
import bgmobile from '../assets/images/bg-mobile.svg';

const BgImg = styled.img`
  content: url(${bgdesk});

  @media (max-width: 991.98px) {
    content: url(${bgmobile});
  }
`;

const BgImage = () => {
  return <BgImg alt="Background" />;
}

export default BgImage