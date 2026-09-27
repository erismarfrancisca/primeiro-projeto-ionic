import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonCard>
      <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80" />
      <IonCardHeader>
        <IonCardTitle>WEB & MOBILE</IonCardTitle>
        <IonCardSubtitle>Meu Primeiro App Ionic 🌸</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Transformo ideias e necessidades em sistemas modernos. Do visual à lógica, crio plataformas digitais práticas que facilitam o dia a dia de quem as usa.</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
