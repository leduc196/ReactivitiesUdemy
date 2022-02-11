import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { List } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response =>{
      console.log("🚀 ~ file: App.tsx ~ line 11 ~ axios.get ~ response", response);
      setActivities(response.data); 
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>

        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
