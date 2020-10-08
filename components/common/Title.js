import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: white;
  margin-left: 30px
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
