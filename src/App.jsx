import Navbar from './components/layout/Navbar';
import BillingPage from './components/billing/BillingPage';
import './index.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <BillingPage />
    </div>
  );
}
