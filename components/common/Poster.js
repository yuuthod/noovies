import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) => {
  return <Image source={{ uri: url }}/>
};

Poster.prototype = {
  url: PropTypes.string.isRequired,
};

export default Poster;
