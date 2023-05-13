import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import "./FAB.css";

interface FABProps {}

const FAB: React.FC<FABProps> = () => {
  return (
    <IonFab 
      style={{ marginRight: 20 + "px", marginBottom: 20 + "px" }} 
      slot="fixed" 
      vertical="bottom" 
      horizontal="end">
      {/* Main button */}
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  )
}

export default FAB;