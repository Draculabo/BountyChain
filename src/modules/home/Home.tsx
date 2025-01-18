'use client';

import TaskCard from './TaskCard';

const tasks = [
  {
    id: 1,
    title: '设计网站首页',
    description: '为一家科技公司设计现代化的网站首页',
    reward: 1000,
    status: 'open',
  },
  {
    id: 2,
    title: '开发移动应用',
    description: '为健身爱好者开发一款跟踪运动数据的移动应用',
    reward: 5000,
    status: 'in_progress',
  },
  {
    id: 3,
    title: '编写产品说明书',
    description: '为新上市的智能家居设备编写详细的产品说明书',
    reward: 800,
    status: 'completed',
  },
  {
    id: 4,
    title: '市场调研报告',
    description: '进行竞品分析并编写详细的市场调研报告',
    reward: 1500,
    status: 'open',
  },
  {
    id: 5,
    title: 'Logo设计',
    description: '为新创立的环保组织设计富有创意的Logo',
    reward: 1200,
    status: 'in_progress',
  },
  {
    id: 6,
    title: '视频剪辑',
    description: '为公司年度总结会议剪辑一段5分钟的精彩视频',
    reward: 2000,
    status: 'open',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">任务广场</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
