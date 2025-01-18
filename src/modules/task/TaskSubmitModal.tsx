import { UploadCloud } from 'lucide-react';
import type { FC } from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

const TaskSubmitModal: FC = () => {
  const [description, setDescription] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white"
        >
          提交任务
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>提交任务成果</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {/* 文本说明 */}
          <div>
            <label className="mb-2 block text-sm font-medium">成果说明</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="请详细描述您的任务完成情况..."
              className="min-h-[120px]"
            />
          </div>

          {/* 文件上传区域 */}
          <div className="rounded-lg border-2 border-dashed border-primary-200 p-6">
            <div className="flex flex-col items-center">
              <UploadCloud className="mb-2 size-12 text-primary-400" />
              <p className="text-center text-sm text-muted-foreground">
                拖拽文件到此处或
                <label className="ml-1 cursor-pointer text-primary-600 hover:text-primary-700">
                  点击上传
                  <input type="file" className="hidden" multiple />
                </label>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">支持图片、视频、文档等格式</p>
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-end">
            <Button
              variant="default"
              className="bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white"
              onClick={() => {
                /* 处理提交 */
              }}
            >
              确认提交
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskSubmitModal;
