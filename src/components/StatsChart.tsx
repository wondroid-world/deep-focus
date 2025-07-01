
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface StatsChartProps {
  data: Array<{
    day: string;
    walking: number;
    lying: number;
  }>;
}

const StatsChart = ({ data }: StatsChartProps) => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
          <XAxis 
            dataKey="day" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            label={{ value: '사용 시간 (분)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px'
            }}
            formatter={(value: number, name: string) => [
              `${value}분`,
              name === 'walking' ? '보행 중' : '침대에서'
            ]}
          />
          <Legend 
            formatter={(value) => value === 'walking' ? '보행 중 사용' : '침대에서 사용'}
          />
          <Bar 
            dataKey="walking" 
            fill="#f97316" 
            radius={[4, 4, 0, 0]}
            name="walking"
          />
          <Bar 
            dataKey="lying" 
            fill="#a855f7" 
            radius={[4, 4, 0, 0]}
            name="lying"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
