import React from 'react';

interface UserInputFormProps {
  onSubmit: (problemDescription: string) => void;
  isLoading: boolean;
  value: string;
  onChange: (value: string) => void;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ onSubmit, isLoading, value, onChange }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 app-sans-serif">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 tracking-tight mb-3">
          Divine Law Is The Key to Riches, True Romance, and Permanent Wellbeing.
        </h2>
      </div>
      <div>
        <label htmlFor="problemDescription" className="block text-lg font-medium text-amber-800 mb-2">
          Whenever something is troubling you, any condition, use this to give yourself a Divine Law treatment. (Reach out to me personally if you need more help breaking through).
        </label>
        <textarea
          id="problemDescription"
          name="problemDescription"
          rows={5}
          className="block w-full p-3 border border-amber-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-150 ease-in-out text-base placeholder-amber-400 bg-white/70 disabled:bg-amber-50 disabled:text-amber-500"
          placeholder="e.g., 'I am experiencing persistent anxiety and wish to understand its underlying emotional conflict.'"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isLoading}
          aria-required="true"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading || !value.trim()}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-amber-400 disabled:cursor-not-allowed transition duration-150 ease-in-out active:bg-amber-800"
        >
          {isLoading ? 'Seeking Insight...' : 'Request Guidance'}
        </button>
      </div>
    </form>
  );
}

export default UserInputForm;