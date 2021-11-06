import { Container, Row, Col } from "react-bootstrap";
//Components
import ProfilePersonalInfo from "./components/ProfilePersonalInfo";
import ProfileStack from "./components/ProfileStack";
import ProfileSocial from "./components/ProfileSocial";
import MainEducationSection from "./components/MainEducationSection";
//Redux
import { Provider} from "react-redux";
import store from "./store";

  
function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
            <Row>
              <Col md={ 3 } className="bg-primary">
                    <Row className="flex-column">
                      <ProfilePersonalInfo/>
                      <ProfileStack/>
                      <ProfileSocial/>
                    </Row>
                </Col>
                <Col md={ 9 } className="bg-secondary p-3 pt-5">
                  <MainEducationSection/>
                </Col>
            </Row>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
