import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import "./Card.css"

export enum CardType {
  Base = 0,
  Goal,
  AddGoal,
  Income,
  AddIncome
}

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  cardType?: CardType;
  detailsButtonLink?: string;
  editButtonLink?: string;
};

function renderButtons(cardType: CardType) {
  let buttons = <></>;
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
  return buttons;
}

export const Card: React.FC<CardProps> = ({ 
    title, 
    subtitle, 
    description, 
    cardType=CardType.Base,
    detailsButtonLink,
    editButtonLink
  }) => {
  const addCard = (cardType == CardType.AddGoal) || (cardType == CardType.AddIncome);
  if (addCard) {
    let buttonText = "";
    switch(cardType) {
      case CardType.AddGoal:    { buttonText = "Add Goal"; break; };
      case CardType.AddIncome:  { buttonText = "Add Income"; break; };
    }
    return (
      <IonCard button>
        <IonCardHeader>
          <IonCardTitle>{buttonText}</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    )
  } else {
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
}

