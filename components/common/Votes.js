import React from 'react'
import styled from "styled-components/native";
import PropTypes from 'prop-types'

const Container = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 12px;
`;

const Votes = ({ votes }) => {
  return <Container>⭐ {votes} / 10</Container>;
};

Votes.propTypes = {
  votes: PropTypes.number.isRequired
}

export default Votes
