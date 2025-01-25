import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ArrowUpDown } from 'lucide-react';

interface Strategy {
  id: number;
  name: string;
  performance: Array<{ date: string; value: number }>;
  metrics: {
    cagr: number;
    drawdown: number;
    winRate: number;
  };
}

interface StrategyComparisonProps {
  strategies: Strategy[];
}

const StrategyComparison: React.FC<StrategyComparisonProps> = ({ strategies }) => {
  const colors = ['#10b981', '#9333ea', '#6366f1', '#f59e0b'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <ArrowUpDown className="h-6 w-6 text-emerald-400" />
        <h2 className="text-xl font-semibold text-white">Strategy Comparison</h2>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Legend />
            {strategies.map((strategy, index) => (
              <Line
                key={strategy.id}
                type="monotone"
                data={strategy.performance}
                dataKey="value"
                name={strategy.name}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {strategies.map((strategy, index) => (
          <div
            key={strategy.id}
            className="bg-purple-900/50 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{strategy.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">CAGR:</span>
                <span className="text-emerald-400">{strategy.metrics.cagr}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Drawdown:</span>
                <span className="text-red-400">{strategy.metrics.drawdown}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Win Rate:</span>
                <span className="text-blue-400">{strategy.metrics.winRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StrategyComparison;