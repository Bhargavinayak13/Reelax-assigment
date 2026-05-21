import { ArrowLeft } from 'lucide-react';
import BillingForm from './BillingForm';
import OrderSummary from './OrderSummary';
import styles from './BillingPage.module.css';

export default function BillingPage() {
  return (
    <div className={styles.pageWrapper}>
      <button className={styles.backLink}>
        <ArrowLeft size={15} />
        Back to plan
      </button>

      <div className={styles.grid}>
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
}
