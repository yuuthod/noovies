import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "./Votes";
import Poster from "./Poster";
import { apiImage } from "../../api";

const Container = styled.View`
  padding: 0px 30px;
`;
const Data = styled.View``;
const Title = styled.Text``;

const Horizontal = ({ id, title, votes, poster, overview }) => {
  return (
    <Container>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title}</Title>
        <Votes votes={votes} />
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
