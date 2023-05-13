import { IonPage } from '@ionic/react';
import './Home.css';
import Container from '../components/basic/Container';
import Goals from '../components/Goals';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Container header='Money'>
        <Goals></Goals>
      </Container>
    </IonPage>
  );
};

export default Home;
