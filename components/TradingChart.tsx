import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
} from 'recharts';
import { CandlestickData } from '../types';

interface TradingChartProps {
  data: CandlestickData[];
}

// A custom shape for the candlestick bar.
const CandlestickShape = (props: any) => {
  const { x, width, yAxis, payload } = props;
  const { open, close, high, low } = payload;

  // If data is incomplete or yAxis is not available, don't render.
  if (!yAxis || open === undefined || close === undefined || high === undefined || low === undefined) {
    return null;
  }
  
  const isBullish = close >= open;
  const color = isBullish ? '#10b981' : '#ef4444';

  // Use the yAxis scale function to convert price values to pixel coordinates.
  const yOpen = yAxis.scale(open);
  const yClose = yAxis.scale(close);
  const yHigh = yAxis.scale(high);
  const yLow = yAxis.scale(low);

  // Determine the top and height of the candlestick body.
  const bodyTop = Math.min(yOpen, yClose);
  const bodyHeight = Math.abs(yOpen - yClose);
  
  const wickStrokeWidth = 1;
  
  // Calculate a visually appealing width for the candlestick body, ensuring it doesn't get too wide.
  const maxBodyWidth = 20;
  const bodyWidth = Math.min(width * 0.7, maxBodyWidth);
  const bodyX = x + (width - bodyWidth) / 2;

  return (
    <g>
      {/* Wick/Shadow: A line from the high to the low. */}
      <path
        d={`M ${x + width / 2},${yHigh} L ${x + width / 2},${yLow}`}
        stroke={color}
        strokeWidth={wickStrokeWidth}
      />
      {/* Body: A rectangle from the open to the close price. */}
      <rect
        x={bodyX}
        y={bodyTop}
        width={bodyWidth}
        height={bodyHeight > 0 ? bodyHeight : 1} // Render a 1px line if open and close are the same.
        fill={color}
      />
    </g>
  );
};

// Custom tooltip for better display of OHLC data.
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-dark-card/80 backdrop-blur-sm p-3 border border-dark-border rounded-md shadow-lg text-sm text-gray-200">
        <p className="label font-bold mb-2">{`${label}`}</p>
        <p><span className="font-semibold text-gray-400">Open:</span> {data.open.toLocaleString()}</p>
        <p><span className="font-semibold text-gray-400">High:</span> {data.high.toLocaleString()}</p>
        <p><span className="font-semibold text-gray-400">Low:</span> {data.low.toLocaleString()}</p>
        <p><span className="font-semibold text-gray-400">Close:</span> {data.close.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};


const TradingChart: React.FC<TradingChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>No chart data available.</p>
      </div>
    );
  }
  
  // Calculate the y-axis domain with some padding.
  const domain = [
      Math.min(...data.map(d => d.low)) * 0.98,
      Math.max(...data.map(d => d.high)) * 1.02,
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="time" />
        <YAxis
          yAxisId="price"
          domain={domain}
          orientation="right"
          tickFormatter={(tick) => tick.toLocaleString()}
        />
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <Tooltip content={<CustomTooltip />} />
        {/* 
          The Bar component is used as a convenient way to get coordinates for each data point.
          The actual rendering is completely controlled by our custom `CandlestickShape`.
        */}
        <Bar dataKey="close" yAxisId="price" shape={<CandlestickShape />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TradingChart;