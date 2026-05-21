import { useState } from 'react';
import { Tag, Wallet, ChevronUp, CheckCircle2 } from 'lucide-react';
import CouponOption from '../common/CouponOption';
import styles from './OrderSummary.module.css';

const COUPONS = [
  { code: 'WELCOME20', description: '20% off on your first month', discount: 0.2 },
  { code: 'ANNUAL50', description: '50% off on annual plans', discount: 0.5 },
];

const BASE_PRICE = 14999;
const GST_RATE = 0.18;

export default function OrderSummary() {
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');
  const [couponInput, setCouponInput] = useState('WELCOME20');
  const [walletApplied, setWalletApplied] = useState(false);
  const [couponOpen, setCouponOpen] = useState(true);

  const activeCoupon = COUPONS.find((c) => c.code === selectedCoupon);
  const discount = activeCoupon ? BASE_PRICE * activeCoupon.discount : 0;
  const walletDeduction = walletApplied ? 500 : 0;
  const discounted = BASE_PRICE - discount - walletDeduction;
  const tax = discounted * GST_RATE;
  const total = discounted + tax;

  const handleApplyCoupon = () => {
    const match = COUPONS.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );
    if (match) setSelectedCoupon(match.code);
    else alert('Invalid coupon code');
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Order Summary</p>

      <div className={styles.planBox}>
        <div>
          <div className={styles.price}>
            ₹4,999 <span>/month</span>
          </div>
          <div className={styles.credits}>Includes 5,000 credits/mo.</div>
        </div>
        <div className={styles.planRight}>
          <div className={styles.planLabel}>SELECTED PLAN</div>
          <div className={styles.planName}>Startup</div>
        </div>
      </div>

      <button className={styles.btnUpgradePlan}>
        ⓘ Upgrade to Growth Plan
      </button>

      <div className={styles.walletRow}>
        <div className={styles.walletLeft}>
          <div className={styles.walletIcon}>
            <Wallet size={16} color="#6b7280" />
          </div>
          <div>
            <div className={styles.walletInfo}>Wallet Balance</div>
            <div className={styles.walletSub}>₹500.00 available</div>
          </div>
        </div>
        <button
          className={`${styles.btnApply} ${walletApplied ? styles.applied : ''}`}
          onClick={() => setWalletApplied((v) => !v)}
        >
          {walletApplied ? 'Remove' : 'Apply'}
        </button>
      </div>

      <div className={styles.couponSection}>
        <button
          className={styles.couponHeader}
          onClick={() => setCouponOpen((v) => !v)}
        >
          <span className={styles.couponLabel}>
            <Tag size={14} />
            Apply Coupon
          </span>
          <ChevronUp
            size={16}
            style={{
              transform: couponOpen ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: 'transform 0.2s',
              color: '#6b7280',
            }}
          />
        </button>

        {couponOpen && (
          <div className={styles.couponBody}>
            <div className={styles.couponInputRow}>
              <input
                className={styles.couponInput}
                type="text"
                placeholder="Enter coupon code"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
              />
              <button
                className={styles.couponApplyBtn}
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>

            {COUPONS.map((coupon) => (
              <CouponOption
                key={coupon.code}
                code={coupon.code}
                description={coupon.description}
                isSelected={selectedCoupon === coupon.code}
                onSelect={() => {
                  setSelectedCoupon(coupon.code);
                  setCouponInput(coupon.code);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className={styles.totals}>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Subtotal</span>
          <span className={styles.totalVal}>
            ₹{BASE_PRICE.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
        </div>
        {discount > 0 && (
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Discount ({activeCoupon?.code})</span>
            <span className={styles.discountVal}>
              -₹{discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          </div>
        )}
        {walletApplied && (
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Wallet Credit</span>
            <span className={styles.discountVal}>-₹500.00</span>
          </div>
        )}
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Tax (18% GST)</span>
          <span className={styles.totalValStrike}>
            ₹{tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className={styles.dueRow}>
          <span className={styles.dueLabel}>Total due today</span>
          <span className={styles.dueVal}>
            ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      <button className={styles.btnProceed}>Proceed to Payment</button>
    </div>
  );
}
