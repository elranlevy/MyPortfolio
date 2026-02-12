import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyBitContent from '@/imports/CaseStudyBitContent';

interface BitCaseStudyProps {
  onNextStudy: () => void;
}

export function BitCaseStudy({ onNextStudy }: BitCaseStudyProps) {
  return (
    <CaseStudyLayout>
      <CaseStudyBitContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
