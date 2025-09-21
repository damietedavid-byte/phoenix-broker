import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface PortfolioChartProps {
  // FIX: Changed data type from PortfolioAsset[] to any[] to resolve a type compatibility issue with the 'recharts' library's Pie component.
  // The component expects data with an index signature, which the PortfolioAsset type does not have.
  data: any[];
}

const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];

const PortfolioChart: React.FC<PortfolioChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="valueUSD"
          nameKey="name"
          // FIX: Added 'any' type to the label prop's arguments to resolve type errors with recharts properties.
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
            return (
              <text x={x} y={y} fill="currentColor" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
           formatter={(value: number) => `$${value.toLocaleString()}`}
           contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid #374151',
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PortfolioChart;