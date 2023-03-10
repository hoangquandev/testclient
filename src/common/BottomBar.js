import React from "react";
import styled from "styled-components";

const BottomBar = () => {
  return (
    <Container>
      <p style={{ lineHeight: "14px" }}>
        All Rights Reserved © 2022 The Modern Touch | Term & Conditions |
        Privacy Policy
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1rem;

  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-style: italic;
  @media (max-width: 960px) {
    height: 2rem;
    text-align: center;
  }
`;

export default BottomBar;
