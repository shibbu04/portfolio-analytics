import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface AddAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (asset: any) => void;
}

const AddAssetModal: React.FC<AddAssetModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [assetData, setAssetData] = useState({
    type: 'stocks',
    symbol: '',
    quantity: '',
    value: '',
    purchaseDate: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...assetData,
      quantity: Number(assetData.quantity),
      value: Number(assetData.value)
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold text-yellow-900 mb-4">Add New Asset</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-yellow-700 mb-1">Asset Type</label>
            <select
              value={assetData.type}
              onChange={(e) => setAssetData({ ...assetData, type: e.target.value })}
              className="w-full border border-yellow-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="stocks">Stocks</option>
              <option value="bonds">Bonds</option>
              <option value="crypto">Crypto</option>
              <option value="commodities">Commodities</option>
            </select>
          </div>

          <div>
            <label className="block text-yellow-700 mb-1">Symbol</label>
            <input
              type="text"
              value={assetData.symbol}
              onChange={(e) => setAssetData({ ...assetData, symbol: e.target.value })}
              className="w-full border border-yellow-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-yellow-700 mb-1">Quantity</label>
            <input
              type="number"
              value={assetData.quantity}
              onChange={(e) => setAssetData({ ...assetData, quantity: e.target.value })}
              className="w-full border border-yellow-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-yellow-700 mb-1">Value</label>
            <input
              type="number"
              value={assetData.value}
              onChange={(e) => setAssetData({ ...assetData, value: e.target.value })}
              className="w-full border border-yellow-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-yellow-700 mb-1">Purchase Date</label>
            <input
              type="date"
              value={assetData.purchaseDate}
              onChange={(e) => setAssetData({ ...assetData, purchaseDate: e.target.value })}
              className="w-full border border-yellow-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Add Asset
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddAssetModal;