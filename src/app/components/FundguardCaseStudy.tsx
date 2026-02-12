import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardContent from '@/imports/CaseStudyFundguardContent';

interface FundguardCaseStudyProps {
  onNextStudy: () => void;
}

export function FundguardCaseStudy({ onNextStudy }: FundguardCaseStudyProps) {
  return (
    <CaseStudyLayout>
      <CaseStudyFundguardContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
