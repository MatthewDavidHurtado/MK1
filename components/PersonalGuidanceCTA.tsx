import React from 'react';

const PersonalGuidanceCTA: React.FC = () => {
  return (
    <div className="mt-10 mb-6 p-6 bg-white border border-slate-200 rounded-lg shadow-lg app-sans-serif text-center">
      <h2 className="text-2xl font-semibold text-blue-900 mb-3">
        Seeking Deeper, Personalized Divine Law Treatment?
      </h2>
      <p className="text-slate-700 leading-relaxed mb-4 text-justify md:text-center">
        If you feel a call for a more in-depth, one-on-one exploration and application of Divine Law principles to your specific situation, Malcolm Kingley offers personal consultations. These sessions are dedicated to helping you uncover and establish the harmony and wholeness that is your divine birthright.
      </p>
      <p className="text-slate-700 leading-relaxed">
        To inquire about personal sessions, please reach out to: 
        <a 
          href="mailto:tmoa@allowministries.com" 
          className="text-blue-600 hover:text-blue-700 underline ml-1"
          title="Email Malcolm Kingley for personal guidance"
        >
          tmoa@allowministries.com
        </a>
      </p>
      <p className="mt-3 text-xs text-slate-600">
        (Serious inquiries for personalized spiritual guidance are welcome.)
      </p>
    </div>
  );
};

export default PersonalGuidanceCTA;