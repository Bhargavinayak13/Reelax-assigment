# Reelax – Billing & Checkout UI

A pixel-perfect, responsive React implementation of the Reelax billing checkout page, built from the provided Figma design.

## 🚀 Live Demo
> Deploy to Vercel/Netlify and add your link here

## 🖼 Features
- Pixel-perfect match to the Figma design
- Responsive layout (desktop, tablet, mobile)
- Interactive billing form with state/city dependency
- Order summary with live coupon discount calculation
- Wallet balance toggle
- Expandable coupon code section
- CSS Modules for scoped, conflict-free styling

## 🛠 Tech Stack
| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| CSS Modules | Scoped component styling |
| Lucide React | Icon library |
| Inter (Google Fonts) | Typography |

## 📁 Project Structure
```
src/
├── components/
│   ├── common/           # Reusable atoms
│   │   ├── FormField.jsx
│   │   ├── SelectField.jsx
│   │   └── CouponOption.jsx
│   ├── layout/           # Navigation shell
│   │   └── Navbar.jsx
│   └── billing/          # Page-specific organisms
│       ├── BillingPage.jsx
│       ├── BillingForm.jsx
│       └── OrderSummary.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone <your-repo-url>
cd reelax-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Decisions
- **CSS Modules** chosen over Tailwind for precise spacing control matching Figma values
- **Controlled components** for all form inputs — single source of truth
- **Live discount calculation** — total updates dynamically as coupons/wallet are toggled
- **City dropdown** is dependent on State selection (disabled until state is chosen)
