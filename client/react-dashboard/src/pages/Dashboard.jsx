import Card from '../components/Card';
import {useAuth} from '../components/AuthContext'
import { useState } from 'react';
import { useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';

const Dashboard = () => {
    const {user}=useAuth();
    const [data,setData]=useState({
      projects:0,
      messages:0,
      tasks:{completed:0,total:0},
      notifications:0
    });

    const fetchData= async()=>{
        const [proj,msg,tasks,notif]=await Promise.all([
          fetch('http://localhost:4000/api/projects').then(res=>res.json()),
          fetch('http://localhost:4000/api/messages').then(res=>res.json()),
          fetch('http://localhost:4000/api/tasks').then(res=>res.json()),
          fetch('http://localhost:4000/api/notifications').then(res=>res.json())
        ]);
        setData({
          projects:proj.count,
          messages:msg.unread,
          tasks:tasks,
          notifications:notif.new
        })
      }

    useEffect(()=>{
      fetchData();

    },[]);

    if(!user) return null;

  return (
    <div className='max-w-4xl mx-auto mt-10 p-4'>
        <h2 className='text-2xl font-bold mb-4'>Welcome, {user?.email||'user'} 👋</h2>

          <AddTaskForm onAdd={fetchData}/>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <Card title="Projects" content={`You have ${data.projects} active projects.`} />
            <Card title="Messages" content={`You have ${data.messages} unread messages`} />
            <Card title="Tasks" content={`You completed ${data.tasks.completed} tasks out of ${data.tasks.total}`} />
            <Card title="Notifications" content={`You have ${data.notifications} new notifications`} />
        </div>
        
    </div>
  )
}

export default Dashboard
