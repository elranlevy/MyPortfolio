import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyBluevineContent from '@/imports/CaseStudyBluevineContent';

interface BluevineCaseStudyProps {
  onNextStudy: () => void;
}

export function BluevineCaseStudy({ onNextStudy }: BluevineCaseStudyProps) {
  return (
    <CaseStudyLayout>
      <CaseStudyBluevineContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
