'use client';

import dayjs from 'dayjs';
import { AlertCircle, Bell, CheckCircle2, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

interface Message {
  id: string;
  taskId: string;
  taskTitle: string;
  type: 'task_accepted' | 'task_submitted' | 'task_completed';
  status: 'read' | 'unread';
  timestamp: string;
  content: string;
  task: {
    id: string;
    status: string;
  };
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: FC<MessageListProps> = ({ messages }) => {
  const router = useRouter();

  const handleMessageClick = (taskId: string) => {
    router.push(`/task/${taskId}`);
  };

  const getMessageIcon = (type: Message['type']) => {
    switch (type) {
      case 'task_accepted': {
        return <Clock className="size-5 text-brand-500" />;
      }
      case 'task_submitted': {
        return <AlertCircle className="size-5 text-accent-500" />;
      }
      case 'task_completed': {
        return <CheckCircle2 className="size-5 text-primary-500" />;
      }
      default: {
        return <Bell className="size-5 text-muted-foreground" />;
      }
    }
  };

  const getTaskStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: '未开始', className: 'bg-primary-100 text-primary-700' },
      in_progress: { label: '进行中', className: 'bg-brand-100 text-brand-700' },
      completed: { label: '已完成', className: 'bg-accent-100 text-accent-700' },
    };

    const config = statusConfig[status as keyof typeof statusConfig];

    return (
      <span className={`rounded-full px-2 py-1 text-xs font-medium ${config.className}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          onClick={() => handleMessageClick(message.taskId)}
          className={`
            cursor-pointer rounded-lg border p-4
            transition-all duration-200 ease-in-out
            hover:border-primary-200 hover:shadow-md
            ${message.status === 'unread' ? 'bg-primary-50' : 'bg-white'}
          `}
        >
          <div className="flex items-start space-x-4">
            <div className="shrink-0">{getMessageIcon(message.type)}</div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium text-gray-900">{message.taskTitle}</p>
                <div className="flex items-center space-x-2">
                  {getTaskStatusBadge(message.task.status)}
                  <span className="text-xs text-muted-foreground">
                    {dayjs(new Date(message.timestamp)).format('YYYY-MM-DD HH:mm')}
                  </span>
                </div>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{message.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
