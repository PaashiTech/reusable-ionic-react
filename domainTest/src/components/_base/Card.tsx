import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from "@ionic/react";
import "./Card.css"
import { trashBinOutline } from "ionicons/icons";
import { CardType } from "./types";

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  cardType?: CardType;
  detailsButton?: string;
  editButton?: string;
};

function renderButtons(cardType: CardType) {
  let buttons: React.ReactElement = <></>;
  switch(cardType) {
    case CardType.Goal: {
      buttons = <>
        <IonButton fill="clear">Edit</IonButton>
        <IonButton fill="clear">Details</IonButton>
      </>
      break; 
    }
    case CardType.Income: {
      buttons = <>
        <IonButton fill="clear">Details</IonButton>
      </>
      break;
    }
  }
  return (
    <>
      {buttons}
      <IonButton fill="clear" color="danger">
        <IonIcon slot="icon-only" icon={trashBinOutline}></IonIcon>
      </IonButton>
    </>
  );
}

export const Card: React.FC<CardProps> = ({ 
    title, 
    subtitle, 
    description, 
    cardType=CardType.Base,
    detailsButton,
    editButton
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
      
      {renderButtons(cardType)}
    </IonCard>
  )
}

