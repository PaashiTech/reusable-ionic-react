import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import "./Container.css";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  header: string;
}

const Container: React.FC<ContainerProps> = ({ children, header }) => {
  return (
    <>
      {/* Header with IonToolbar */}
      <IonHeader>
        <IonToolbar class="toolbar">
          <IonTitle>{header}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent fullscreen>
        {/* Collapsed header when the page is scrolled down */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{header}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="content">
          {children}
        </div>
      </IonContent>
    </>
  )
}

export default Container