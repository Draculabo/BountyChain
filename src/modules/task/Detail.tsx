import type { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import TaskSubmitModal from './TaskSubmitModal';

interface TaskDetailProps {
  task: {
    id: string;
    title: string;
    description: string;
    reward: number;
    requiresReview: boolean;
    status: 'pending' | 'in_progress' | 'completed';
  };
}

const TaskDetailPage: FC<TaskDetailProps> = ({ task }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* 任务标题区域 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary-900">{task.title}</h1>
          <TaskStatusBadge status={task.status} />
        </div>
      </div>

      {/* 任务信息卡片 */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <div className="space-y-6">
          {/* 悬赏金额 */}
          <div className="flex items-center">
            <span className="text-muted-foreground">悬赏金额：</span>
            <span className="ml-2 text-2xl font-semibold text-primary-600">{task.reward} SUI</span>
          </div>

          {/* 任务描述 */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">任务描述</h3>
            <p className="whitespace-pre-wrap text-muted-foreground">{task.description}</p>
          </div>

          {/* 审核要求 */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">审核要求</h3>
            <div className="flex items-center">
              <Badge variant={task.requiresReview ? 'default' : 'secondary'}>
                {task.requiresReview ? '需要审核' : '无需审核'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* 操作按钮区域 */}
      <div className="flex justify-end space-x-4">
        {task.status === 'pending' && (
          <Button
            variant="default"
            className="bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white"
            onClick={() => {
              /* 处理接受任务 */
            }}
          >
            接受任务
          </Button>
        )}

        {task.status === 'in_progress' && <TaskSubmitModal />}
      </div>
    </div>
  );
};

// 任务状态标签组件
const TaskStatusBadge: FC<{ status: string }> = ({ status }) => {
  const statusConfig = {
    pending: { label: '未开始', className: 'bg-primary-100 text-primary-700' },
    in_progress: { label: '进行中', className: 'bg-brand-100 text-brand-700' },
    completed: { label: '已完成', className: 'bg-accent-100 text-accent-700' },
  };

  const config = statusConfig[status as keyof typeof statusConfig];

  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${config.className}`}>
      {config.label}
    </span>
  );
};

export default TaskDetailPage;
