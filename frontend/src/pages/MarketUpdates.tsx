import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, DollarSign } from 'lucide-react';

const dummyMarketUpdates = [
  {
    id: 1,
    symbol: 'BTC/USD',
    price: 65432.10,
    change: 2.5,
    time: '2 minutes ago',
    type: 'buy',
    amount: '0.5 BTC',
    value: 32716.05
  },
  {
    id: 2,
    symbol: 'ETH/USD',
    price: 3211.45,
    change: -1.2,
    time: '5 minutes ago',
    type: 'sell',
    amount: '2.0 ETH',
    value: 6422.90
  },
  // Add more dummy data as needed
];

const MarketUpdates = () => {
  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Market Updates & Recent Trades
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyMarketUpdates.map((update) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{update.symbol}</h3>
                <div className="flex items-center mt-1">
                  <Clock className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">{update.time}</span>
                </div>
              </div>
              <div className={`flex items-center ${update.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {update.change >= 0 ? (
                  <TrendingUp className="h-5 w-5 mr-1" />
                ) : (
                  <TrendingDown className="h-5 w-5 mr-1" />
                )}
                <span className="font-semibold">{Math.abs(update.change)}%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price:</span>
                <span className="font-semibold text-gray-800">${update.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Type:</span>
                <span className={`font-semibold ${update.type === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                  {update.type.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-gray-800">{update.amount}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-gray-600">Value:</span>
                <div className="flex items-center text-yellow-600">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span className="font-semibold">{update.value.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketUpdates;