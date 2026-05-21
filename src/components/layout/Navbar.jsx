import { Search, Menu, Plus } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.searchWrapper}>
        <Search size={14} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.navRight}>
        <button className={styles.btnUpgrade}>
          ⚡ Upgrade
        </button>
        <button className={styles.btnCampaign}>
          <Plus size={14} />
          Create Campaign
        </button>
        <div className={styles.avatar}>T</div>
        <Menu size={20} className={styles.menuIcon} />
      </div>
    </nav>
  );
}
