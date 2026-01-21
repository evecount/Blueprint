'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { useAppContext } from '@/context/AppProvider';
import { useMemo } from 'react';

const chartConfig = {
  score: {
    label: 'Score',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export default function PerformanceTracker() {
  const { performance } = useAppContext();

  const chartData = useMemo(() => {
    return Object.entries(performance)
      .map(([topic, { correct, total }]) => ({
        topic,
        score: total > 0 ? Math.round((correct / total) * 100) : 0,
      }))
      .sort((a, b) => a.topic.localeCompare(b.topic));
  }, [performance]);

  if (chartData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-2 text-center border-2 border-dashed rounded-lg">
        <p className="font-semibold text-muted-foreground">No performance data yet.</p>
        <p className="text-sm text-muted-foreground">Complete a quiz to see your scores here.</p>
      </div>
    );
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="topic"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 15) + (value.length > 15 ? '...' : '')}
        />
        <YAxis
          tickFormatter={(value) => `${value}%`}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent 
            labelFormatter={(label, payload) => {
              const data = payload[0]?.payload;
              if (data) {
                return `${data.topic}: ${data.score}%`;
              }
              return label;
            }}
            indicator="dot" 
          />}
        />
        <Bar dataKey="score" fill="var(--color-score)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
