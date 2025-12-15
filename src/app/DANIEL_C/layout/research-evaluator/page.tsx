'use client';

import DefaultLayout from '@/component/layout/DefaultLayout';
import PersonnelDashboard from '@/app/dashboard/personnel/PersonnelDashboard';

const ResearchEvaluatorPage = () => {
  return (
    <div className="flex max-h-screen">
      <DefaultLayout pageName="Research Evaluator">
        <PersonnelDashboard />
      </DefaultLayout>
    </div>
  );
};

export default ResearchEvaluatorPage;

