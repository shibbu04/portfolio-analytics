import React from 'react';
import { Calendar } from 'lucide-react';

interface DateRangeFilterProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-white/10 backdrop-blur-lg rounded-xl p-4">
      <div className="flex items-center gap-2">
        <Calendar className="h-5 w-5 text-emerald-400" />
        <span className="text-white">Date Range:</span>
      </div>
      <div className="flex flex-wrap gap-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="bg-purple-900/50 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <span className="text-white">to</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="bg-purple-900/50 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>
    </div>
  );
};

export default DateRangeFilter;