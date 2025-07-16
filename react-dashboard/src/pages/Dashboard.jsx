import Card from '../components/Card';
import {useAuth} from '../components/AuthContext'
import { useState } from 'react';
import { useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
import AddProjectForm from '../components/AddProjectForm';
import StatsOverview from '../components/StatsOverview';
import DummyStats from '../components/DummyStats';
import api from '../../utils/api';

const Dashboard = () => {
    const {user}=useAuth();
    const [data,setData]=useState({
      projects:0,
      messages:0,
      tasks:{completed:0,total:0},
      notifications:0
    });

    const fetchData= async()=>{
      try{
        const [proj,msg,tasks,notif]=await Promise.all([
          api.get('/api/projects'),api.get('/api/messages'),api.get('/api/tasks'),api.get('/api/notifications')
        ]);

        setData({
          projects:proj?.data?.data?.count||0,
          messages:msg.data?.unread||0,
          tasks:tasks?.data?.data||{completed:0,total:0},
          notifications:notif?.data?.new||0
        });
      }catch(err){
        console.error("Dashboard data fetch error:", err);
      }
    }

    useEffect(()=>{
      fetchData();
    },[fetchData]);

    if(!user) return null;

  return (
    <div className='max-w-4xl mx-auto mt-10 p-4'>
        <h2 className='text-2xl font-bold mb-4'>Welcome, {user?.email||'user'} 👋</h2>

          <AddTaskForm onAdd={fetchData}/>
          <AddProjectForm onAdd={fetchData}/>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <Card title="Projects" content={`You have ${data.projects} active projects.`} />
            <Card title="Messages" content={`You have ${data.messages} unread messages`} />
            <Card title="Tasks" content={`You completed ${data.tasks.completed} tasks out of ${data.tasks.total}`} />
            <Card title="Notifications" content={`You have ${data.notifications} new notifications`} />
        </div>
        <StatsOverview/>
        <TaskList refreshKey={data.tasks.total}/>
        <DummyStats/>
        
    </div>
  )
}

export default Dashboard
