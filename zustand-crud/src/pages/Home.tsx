import { 
  IonLabel, 
  IonPage, 
  IonSegment, 
  IonSegmentButton, 
  SegmentCustomEvent 
} from '@ionic/react';
import { useState } from 'react';
import './Home.css';

import Container from '../components/_base/Container';
import FAB from '../components/_base/FAB';

import Goals from '../components/goal/Goals';
import Income from '../components/income/Income';
import Expenses from '../components/expense/Expenses';
import { AddGoalModal } from '../components/goal/AddGoalModal';

const segmentTabs = [
  {
    id: "goals",
    title: "Goals",
    getBody: () => {return <Goals />}
  },
  {
    id: "income",
    title: "Income",
    getBody: () => {return <Income />}
  },
  {
    id: "expenses",
    title: "Expenses",
    getBody: () => {return <Expenses />}
  }
];

const Home: React.FC = () => {
  const [segmentState, setSegmentState] = useState(segmentTabs[0].id);
  const [addGoalModalState, setAddGoalModalState] = useState(false);
  
  const title = "Money";
  const segmentButtons = segmentTabs.map((tabData) => {
    return (
      <IonSegmentButton key={tabData.id} value={tabData.id}>
        <IonLabel>{tabData.title}</IonLabel>
      </IonSegmentButton>
    )
  });

  function getSegmentBody(id: string) {
    const selectedTab = segmentTabs.find((tab) => {return id === tab.id});
    return selectedTab?.getBody();
  }

  function onSegmentChange (e: SegmentCustomEvent) {
    setSegmentState(e.detail.value? e.detail.value : "");
  }

  return (
    <IonPage>
      {/* IMPORTANT: FAB needs to be a part of the IonPage, not the Container */}
      <FAB action={() => {setAddGoalModalState(true)}} id='fab'></FAB>

      <Container header={title}>
        <AddGoalModal 
          isModalOpen={addGoalModalState}
          setIsModalOpen={setAddGoalModalState}
          >
        </AddGoalModal>

        {/* Segment tabs */}
        <IonSegment value={segmentState} onIonChange={onSegmentChange}>
          {segmentButtons}
        </IonSegment>
        
        {/* Segment body */}
        {getSegmentBody(segmentState)}
      </Container>
    </IonPage>
  );
};

export default Home;
