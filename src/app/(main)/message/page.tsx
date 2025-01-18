'use client';

import MessageList from '@/modules/message/MessageList';

// Mock data for messages
const mockMessages = [
  {
    id: 'msg_01',
    taskId: 'task_01',
    taskTitle: '设计一个Web3任务平台Logo',
    type: 'task_accepted',
    status: 'unread',
    timestamp: '2024-03-15T08:00:00Z',
    content: '猎人 Charlie 已接受您发布的任务',
    task: {
      id: 'task_01',
      status: 'in_progress',
    },
  },
  {
    id: 'msg_02',
    taskId: 'task_02',
    taskTitle: '开发智能合约单元测试',
    type: 'task_submitted',
    status: 'read',
    timestamp: '2024-03-14T10:30:00Z',
    content: '任务已提交，等待您的确认',
    task: {
      id: 'task_02',
      status: 'completed',
    },
  },
  {
    id: 'msg_03',
    taskId: 'task_03',
    taskTitle: '编写项目技术文档',
    type: 'task_completed',
    status: 'read',
    timestamp: '2024-03-13T15:20:00Z',
    content: '任务已完成并确认支付',
    task: {
      id: 'task_03',
      status: 'completed',
    },
  },
];

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">消息中心</h1>
      <MessageList messages={mockMessages} />
    </div>
  );
}
