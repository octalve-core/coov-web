import { HeroSection } from "./components/personal-hero";
import { AccountSection } from "./components/account-section";
import { TransfersSection } from "./components/transfers-section";
import { VirtualAccountSection } from "./components/virtual-account-section";
import { PaymentsSection } from "./components/payments-section";
import { SavingsSection } from "./components/savings-section";
import { PersonalSecuritySection } from "./components/personal-security-section";
import { DownloadCta } from "./components/download-cta";
export default function Page(){return <main><HeroSection/><AccountSection/><TransfersSection/><VirtualAccountSection/><PaymentsSection/><SavingsSection/><PersonalSecuritySection/><DownloadCta/></main>}
