import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "./Votes";
import Poster from "./Poster";
import { trimText } from "../../utils";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;
const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 20px;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;
const OverView = styled.Text`
  color: white;
`;

const Horizontal = ({ id, title, votes, poster, overview }) => {
  return (
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{title}</Title>
        <Votes votes={votes} />
        <OverView>{trimText(overview, 120)}</OverView>
      </Data>
    </Container>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Horizontal;
