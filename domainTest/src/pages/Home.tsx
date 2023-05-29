import { IonLabel, IonPage, IonSegment, IonSegmentButton, SegmentCustomEvent } from '@ionic/react';
import './Home.css';
import Container from '../components/_base/Container';
import Goals from '../components/goal/Goals';
import FAB from '../components/_base/FAB';
import Income from '../components/income/Income';
import Expenses from '../components/expense/Expenses';
import { useState } from 'react';
import { AddGoalModal } from '../components/goal/AddGoalModal';
import { GoalModalData } from '../components/goal/types';

const segmentTabs = [
  {
    id: "goals",
    title: "Goals",
    getBody: () => {return <Goals></Goals>}
  },
  {
    id: "income",
    title: "Income",
    getBody: () => {return <Income></Income>}
  },
  {
    id: "expenses",
    title: "Expenses",
    getBody: () => {return <Expenses></Expenses>}
  }
];

const Home: React.FC = () => {
  const [segmentState, setSegmentState] = useState(segmentTabs[0].id);
  const [addGoalModalState, setAddGoalModalState] = useState(false);
  const [addGoalModalData, setAddGoalModalData] = useState<GoalModalData>({
    name: '', 
    targetDateString: ""
  });

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
          setModalData={setAddGoalModalData}>
        </AddGoalModal>

        {/* Segment tabs */}
        <IonSegment value={segmentState} onIonChange={onSegmentChange}>
          {segmentButtons}
        </IonSegment>
        
        {/* Segment body */}
        {getSegmentBody(segmentState)}
        {addGoalModalData.name}
        <br></br>
        {addGoalModalData.targetDateString}
      </Container>
    </IonPage>
  );
};

export default Home;
