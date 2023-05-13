import { IonPage } from '@ionic/react';
import './Home.css';
import Container from '../components/basic/Container';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Container header='Test'>
        <p>Hello</p>
      </Container>
    </IonPage>
  );
};

export default Home;
