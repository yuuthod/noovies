import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator } from "react-native";
import Slide from "../../components/Movies/Slide";
import { Dimensions, ScrollView } from "react-native";
import Title from "../../components/common/Title";
import Vertical from "../../components/common/Vertical";
import Horizontal from '../../components/common/Horizontal';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View`
  margin-bottom: 50px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
          <Title title={"Popular Movies"} />
          <ScrollView
            style={{ marginTop: 20, marginBottom: 40 }}
            contentContainerStyle={{ paddingLeft: 30 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {popular.map((movie) => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
        </Container>
        <Container>
          <Title title={"Comming Soon"}></Title>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              votes={movie.vote_average}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </Container>
      </>
    )}
  </ScrollView>
);
