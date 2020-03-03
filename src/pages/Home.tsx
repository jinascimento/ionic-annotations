import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import List from '../components/List';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <div className="container">
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
              </IonToolbar>
            </IonHeader>
            <List items={[1, 2]}>
                <li>1</li>
            </List>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
