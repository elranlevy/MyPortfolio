import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyXreamioContent from '@/imports/CaseStudyXreamioContent';

interface XtreamIOCaseStudyProps {
  onNextStudy: () => void;
}

export function XtreamIOCaseStudy({ onNextStudy }: XtreamIOCaseStudyProps) {
  return (
    <CaseStudyLayout>
      <CaseStudyXreamioContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
