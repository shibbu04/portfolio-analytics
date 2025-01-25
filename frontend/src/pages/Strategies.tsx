import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, TrendingUp, ArrowDown, Activity } from 'lucide-react';

const dummyStrategies = [
  {
    id: 1,
    name: 'Conservative Growth',
    description: 'Low-risk strategy focused on stable growth through diversified investments.',
    performance: [
      { date: '2024-01', value: 100 },
      { date: '2024-02', value: 102 },
      { date: '2024-03', value: 105 },
      { date: '2024-04', value: 108 },
    ],
    metrics: {
      cagr: 12.5,
      drawdown: 5.2,
      winRate: 65,
    },
  },
  {
    id: 2,
    name: 'Aggressive Growth',
    description: 'High-risk strategy targeting maximum returns through concentrated positions.',
    performance: [
      { date: '2024-01', value: 100 },
      { date: '2024-02', value: 115 },
      { date: '2024-03', value: 108 },
      { date: '2024-04', value: 125 },
    ],
    metrics: {
      cagr: 28.4,
      drawdown: 12.8,
      winRate: 58,
    },
  },
];

const StrategyCard = ({ strategy }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-yellow-100 backdrop-blur-lg rounded-xl p-6 shadow-md"
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-yellow-900">{strategy.name}</h3>
        <p className="text-yellow-700 text-sm mt-1">{strategy.description}</p>
      </div>
      <div className="bg-yellow-300 p-2 rounded-lg">
        <Award className="h-6 w-6 text-yellow-800" />
      </div>
    </div>

    <div className="h-[200px] mb-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={strategy.performance}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="date" stroke="#D1D5DB" />
          <YAxis stroke="#D1D5DB" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FEF3C7',
              border: 'none',
              borderRadius: '8px',
              color: '#92400E',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-1">
          <TrendingUp className="h-4 w-4 text-yellow-800 mr-1" />
          <span className="text-sm text-yellow-600">CAGR</span>
        </div>
        <p className="text-lg font-semibold text-yellow-900">{strategy.metrics.cagr}%</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center mb-1">
          <ArrowDown className="h-4 w-4 text-red-600 mr-1" />
          <span className="text-sm text-yellow-600">Drawdown</span>
        </div>
        <p className="text-lg font-semibold text-yellow-900">{strategy.metrics.drawdown}%</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center mb-1">
          <Activity className="h-4 w-4 text-yellow-800 mr-1" />
          <span className="text-sm text-yellow-600">Win Rate</span>
        </div>
        <p className="text-lg font-semibold text-yellow-900">{strategy.metrics.winRate}%</p>
      </div>
    </div>
  </motion.div>
);

const Strategies = () => {
  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold text-yellow-900 mb-8"
      >
        Investment Strategies
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {dummyStrategies.map((strategy) => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
      </div>
    </div>
  );
};

export default Strategies;
