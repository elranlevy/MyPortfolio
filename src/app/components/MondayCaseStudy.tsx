import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyMondayContent from '@/imports/CaseStudyMondayContent';

interface MondayCaseStudyProps {
  onNextStudy: () => void;
}

export function MondayCaseStudy({ onNextStudy }: MondayCaseStudyProps) {
  return (
    <CaseStudyLayout>
      <CaseStudyMondayContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
