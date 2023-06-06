import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonIcon, IonRow } from "@ionic/react";
import "./Card.css"
import { trashBinOutline } from "ionicons/icons";
import { CardType } from "./types";

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  cardType?: CardType;
  onEditButton?: () => void;
  onDetailsButton?: () => void;
};

function renderButtons(
  cardType: CardType, 
  edit: (() => void) | undefined, 
  details: (() => void) | undefined) {
  let buttons: React.ReactElement = <></>;
  switch(cardType) {
    case CardType.Goal: {
      buttons = <>
        <IonButton fill="clear" onClick={edit}>
          Edit
        </IonButton>
        <IonButton fill="clear" onClick={details}>
          Details
        </IonButton>
      </>
      break; 
    }
    case CardType.Income: {
      buttons = <>
        <IonButton fill="clear" onClick={details}>
          Details
        </IonButton>
      </>
      break;
    }
  }
  return (
    <div className="buttons-container">
      {buttons}
      <IonButton className="delete-button" fill="clear" color="danger">
        <IonIcon slot="icon-only" icon={trashBinOutline}></IonIcon>
      </IonButton>
    </div>
  );
}

export const Card: React.FC<CardProps> = ({ 
    title, 
    subtitle, 
    description, 
    cardType=CardType.Base,
    onEditButton,
    onDetailsButton
  }) => {
  return (
    <IonCard>
      {/* Card header */}
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        {subtitle && <IonCardSubtitle>{subtitle}</IonCardSubtitle>}
      </IonCardHeader>

      {/* Card description */}
      {description && <IonCardContent>{description}</IonCardContent>}
      
      {renderButtons(cardType, onEditButton, onDetailsButton)}
    </IonCard>
  )
}

