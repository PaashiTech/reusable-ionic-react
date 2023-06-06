import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import "./FAB.css";

interface FABProps {
  action:   () => void,
  id:       string,
}

const FAB: React.FC<FABProps> = ({ action, id }) => {
  return (
    <IonFab 
      style={{ marginRight: 20 + "px", marginBottom: 20 + "px" }} 
      slot="fixed" 
      vertical="bottom" 
      horizontal="end">
      {/* Main button */}
      <IonFabButton onClick={action} id={id}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  )
}

export default FAB;