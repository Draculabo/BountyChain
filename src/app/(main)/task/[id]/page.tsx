'use client';

import TaskDetail from '@/modules/task/Detail';

export default function Page() {
  const mockTask = {
    id: 'task_01',
    title: '设计一个Web3任务平台Logo',
    description:
      '需要设计一个现代感的Logo，体现Web3和任务平台的特点。\n\n要求：\n1. 提供AI源文件\n2. 提供PNG透明背景\n3. 包含品牌名称的组合logo\n4. 提供3个配色方案',
    reward: 500,
    requiresReview: true,
    status: 'pending',
    createdAt: '2024-03-15T08:00:00Z',
    employer: {
      id: 'user_01',
      name: 'Alice',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    },
  } as const;

  return <TaskDetail task={mockTask} />;
}
