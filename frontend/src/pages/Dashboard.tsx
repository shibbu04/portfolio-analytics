import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

const dummyPortfolioData = {
  totalValue: 125000,
  dailyPnL: 2500,
  pnlPercentage: 2.04,
  performanceData: [
    { date: '2024-01', value: 100000 },
    { date: '2024-02', value: 105000 },
    { date: '2024-03', value: 115000 },
    { date: '2024-04', value: 125000 },
  ],
  allocation: [
    { name: 'Stocks', value: 60, color: '#FFD700' },
    { name: 'Bonds', value: 20, color: '#FFFACD' },
    { name: 'Crypto', value: 15, color: '#FFDAB9' },
    { name: 'Commodities', value: 5, color: '#FFE4B5' },
  ],
};

const MetricCard = ({ title, value, icon: Icon, trend = null, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-yellow-200/30 backdrop-blur-lg rounded-xl p-6 ${className}`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-700 text-sm">{title}</p>
        <p className="text-2xl font-bold text-yellow-900 mt-1">{value}</p>
      </div>
      <div className="bg-yellow-400/50 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-yellow-800" />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center">
        {trend > 0 ? (
          <TrendingUp className="h-4 w-4 text-yellow-800 mr-1" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
        )}
        <span className={`text-sm ${trend > 0 ? 'text-yellow-800' : 'text-red-500'}`}>
          {Math.abs(trend)}%
        </span>
      </div>
    )}
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold text-yellow-900 mb-8"
      >
        Portfolio Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Portfolio Value"
          value={`$${dummyPortfolioData.totalValue.toLocaleString()}`}
          icon={DollarSign}
        />
        <MetricCard
          title="Daily P&L"
          value={`$${dummyPortfolioData.dailyPnL.toLocaleString()}`}
          icon={TrendingUp}
          trend={dummyPortfolioData.pnlPercentage}
        />
        <MetricCard
          title="Win Rate"
          value="68%"
          icon={Percent}
          trend={5.2}
        />
        <MetricCard
          title="CAGR"
          value="21.5%"
          icon={TrendingUp}
          trend={2.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-yellow-200/30 backdrop-blur-lg rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-yellow-900 mb-4">Portfolio Performance</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyPortfolioData.performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D1B000" />
                <XAxis dataKey="date" stroke="#D1B000" />
                <YAxis stroke="#D1B000" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFE4B5',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#333',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#FFD700"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-200/30 backdrop-blur-lg rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-yellow-900 mb-4">Asset Allocation</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dummyPortfolioData.allocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dummyPortfolioData.allocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFE4B5',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#333',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {dummyPortfolioData.allocation.map((item) => (
              <div key={item.name} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-yellow-800">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
