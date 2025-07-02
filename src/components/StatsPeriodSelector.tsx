
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StatsPeriodSelectorProps {
  selectedPeriod: 'week' | 'month' | 'quarter' | 'year';
  onPeriodChange: (period: 'week' | 'month' | 'quarter' | 'year') => void;
}

const StatsPeriodSelector = ({ selectedPeriod, onPeriodChange }: StatsPeriodSelectorProps) => {
  const periods = [
    { key: 'week' as const, label: '주간' },
    { key: 'month' as const, label: '월간' },
    { key: 'quarter' as const, label: '분기' },
    { key: 'year' as const, label: '연간' }
  ];

  return (
    <div className="flex gap-2 mb-4">
      {periods.map((period) => (
        <Button
          key={period.key}
          variant={selectedPeriod === period.key ? "default" : "outline"}
          size="sm"
          onClick={() => onPeriodChange(period.key)}
          className={cn(
            "text-xs",
            selectedPeriod === period.key && "bg-blue-600 hover:bg-blue-700"
          )}
        >
          {period.label}
        </Button>
      ))}
    </div>
  );
};

export default StatsPeriodSelector;
