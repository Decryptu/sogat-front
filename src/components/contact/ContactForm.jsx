'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactForm({ title, labels, messages }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      toast({
        title: 'Success',
        description: messages.success,
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: messages.error,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">{labels.name}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={labels.name}
                        {...field}
                        className="h-12 text-base rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">{labels.email}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={labels.email}
                        {...field}
                        className="h-12 text-base rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">{labels.message}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={labels.message}
                        className="min-h-[160px] text-base rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : labels.submit}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
