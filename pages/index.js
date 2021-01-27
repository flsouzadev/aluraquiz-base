import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div` // Isto é javaScript
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) { //pq usar @
    margin: auto;
    padding: 15px;
  }
`;



// aqui vc delega tudo que vai aparecer na home
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget>
            <Widget.Header>
              <h1> The Legend Of Zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <p> Lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1> The Legend Of Zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <p> Lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/flsouzadev" />
    </QuizBackground>
  )
}
