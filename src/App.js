import Header from "./Components/Header";
import Card from "./Components/Card";
import { Container } from "./styled/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled/Global";
import content from '../src/content'
import Footer from "./Components/Footer";
const theme = {
  colors :{
    header: "#ebfbff",
    body: '#fff',
    footer: '#000333'
  },
  mobile: '768px'

}
function App() {
  return (

    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
      <Header/>
      <Container>
        {content.map((item,index) => (
          <Card key={index} item={item} />
))}
      </Container>
      <Footer/>
    </>
    </ThemeProvider>


  );
}

export default App;
