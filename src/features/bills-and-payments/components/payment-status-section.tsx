import { ContentSection } from "@/components/shared/content-section";
export function PaymentStatusSection(){return <ContentSection eyebrow="Status" title="Know what happened." body="Transaction states should be clear when a bill payment is processing, completed, or needs attention." items={['Pending','Successful','Needs attention']} light={true}/>}
