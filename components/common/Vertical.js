import React from 'react'
import styled from "styled-components/native";
import PropTypes from 'prop-types'
import { apiImage } from '../../api';
import Votes from './Votes';
import Poster from './Poster';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0 5px 0;
`;


const Vertical = ({id, poster, title, votes}) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={poster}></Poster>
        <Title>{title.length > 10 ? `${title.slice(0, 10)}...` : title}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
}

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
}

export default Vertical

