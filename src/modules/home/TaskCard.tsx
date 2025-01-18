import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Task {
  id: number;
  title: string;
  description: string;
  reward: number;
  status: 'open' | 'in_progress' | 'completed';
}

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const statusColors = {
    open: 'bg-green-500',
    in_progress: 'bg-yellow-500',
    completed: 'bg-blue-500',
  };

  const statusText = {
    open: '未开始',
    in_progress: '进行中',
    completed: '已完成',
  };

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{task.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-lg font-semibold">¥{task.reward.toFixed(2)}</div>
        <Badge className={statusColors[task.status]}>{statusText[task.status]}</Badge>
      </CardFooter>
    </Card>
  );
}
