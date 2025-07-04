import Card from '../components/Card';
import {useAuth} from '../components/AuthContext'
const Dashboard = () => {
    const {user}=useAuth();

    if(!user) return null;

  return (
    <div className='max-w-4xl mx-auto mt-10 p-4'>
        <h2 className='text-2xl font-bold mb-4'>Welcome, {user?.email||'user'} 👋</h2>
        <p className='mb-6'>This is your dashboard. You can now access protected content here.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card title="Projects" content="You have 3 active projects." />
            <Card title="Messages" content="You have 5 unread messages" />
            <Card title="Tasks" content="You completed 7 tasks out of 10" />
            <Card title="Notifications" content="You have 2 new notifications" />
        </div>
        
    </div>
  )
}

export default Dashboard
