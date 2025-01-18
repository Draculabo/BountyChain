'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  title: z.string().min(2, {
    message: '任务名称至少需要2个字符。',
  }),
  description: z.string().min(10, {
    message: '任务描述至少需要10个字符。',
  }),
  reward: z.number().min(1, {
    message: '悬赏金额必须大于0。',
  }),
  requiresReview: z.boolean().default(false),
});

export default function PublishTaskPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      reward: 0,
      requiresReview: false,
    },
  });

  function onSubmit(_: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // 这里应该是发送数据到服务器的逻辑
    setTimeout(() => {
      setIsSubmitting(false);
      // TODO
      // toast({
      //   title: '任务发布成功',
      //   description: '您的任务已经成功发布到任务广场。',
      // })
      router.push('/');
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-brand-50">
      <main className="container mx-auto px-4 py-8">
        <div className="shadow-soft mx-auto max-w-2xl rounded-lg bg-white p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-bold text-brand-800">发布新任务</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-700">任务名称</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="输入任务名称"
                        {...field}
                        className="border-brand-200 focus:border-brand-500 focus:ring-brand-500"
                      />
                    </FormControl>
                    <FormDescription className="text-brand-500">
                      请简洁明了地描述您的任务。
                    </FormDescription>
                    <FormMessage className="text-accent-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-700">任务描述</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="详细描述您的任务要求"
                        className="resize-none border-brand-200 focus:border-brand-500 focus:ring-brand-500"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-brand-500">
                      请详细描述任务的具体要求和期望。
                    </FormDescription>
                    <FormMessage className="text-accent-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reward"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-700">悬赏金额</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="输入悬赏金额"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="border-brand-200 focus:border-brand-500 focus:ring-brand-500"
                      />
                    </FormControl>
                    <FormDescription className="text-brand-500">
                      请输入您愿意为此任务支付的金额（单位：元）。
                    </FormDescription>
                    <FormMessage className="text-accent-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requiresReview"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-brand-200 p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-brand-400 text-brand-600 focus:ring-brand-500"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-brand-700">需要雇主审核</FormLabel>
                      <FormDescription className="text-brand-500">
                        选中此项表示任务需要您的审核才能开始。
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="shadow-soft hover:shadow-hover w-full rounded-md bg-brand-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-brand-700"
              >
                {isSubmitting ? '发布中...' : '发布任务'}
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
