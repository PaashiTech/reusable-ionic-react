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
  onDeleteButton: () => void;
};

function renderButtons(
  cardType: CardType, 
  onEdit: (() => void) | undefined, 
  onDetails: (() => void) | undefined,
  onDelete: (() => void)) {
  let buttons: React.ReactElement = <></>;
  switch(cardType) {
    case CardType.Goal: {
      buttons = <>
        <IonButton fill="clear" onClick={onEdit}>
          Edit
        </IonButton>
        <IonButton fill="clear" onClick={onDetails}>
          Details
        </IonButton>
      </>
      break; 
    }
    case CardType.Income: {
      buttons = <>
        <IonButton fill="clear" onClick={onDetails}>
          Details
        </IonButton>
      </>
      break;
    }
  }
  return (
    <div className="buttons-container">
      {buttons}
      <IonButton 
        className="delete-button" 
        fill="clear" 
        color="danger"
        onClick={onDelete}
        >
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
    onDetailsButton,
    onDeleteButton
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
      
      {renderButtons(cardType, onEditButton, onDetailsButton, onDeleteButton)}
    </IonCard>
  )
}

