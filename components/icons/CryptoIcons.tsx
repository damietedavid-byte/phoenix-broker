import React from 'react';

const IconSolana: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4.08 12.03h15.84M7.98 18.53l8.04-13.06M7.98 5.47l8.04 13.06" stroke="#9945FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconAvalanche: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2L4 8l8 14 8-14-8-6zM4 8l8 6 8-6" stroke="#E84142" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 20V14" stroke="#E84142" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconChainlink: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M9 12h6m-3-3v6M10 5l-2.5 2.5M14 5l2.5 2.5M10 19l-2.5-2.5M14 19l2.5-2.5" stroke="#375BD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="#375BD2" strokeWidth="1.5"/>
    </svg>
);

const IconPolkadot: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx="12" cy="12" r="8" stroke="#E6007A" strokeWidth="1.5"/>
        <circle cx="12" cy="5" r="2" fill="#E6007A"/>
        <circle cx="18" cy="8" r="2" fill="#E6007A"/>
        <circle cx="18" cy="16" r="2" fill="#E6007A"/>
        <circle cx="12" cy="19" r="2" fill="#E6007A"/>
        <circle cx="6" cy="16" r="2" fill="#E6007A"/>
        <circle cx="6" cy="8" r="2" fill="#E6007A"/>
    </svg>
);


interface CryptoIconProps extends React.SVGProps<SVGSVGElement> {
  symbol: string;
}

export const CryptoIcon: React.FC<CryptoIconProps> = ({ symbol, ...props }) => {
  switch (symbol) {
    case 'SOL':
      return <IconSolana {...props} />;
    case 'AVAX':
      return <IconAvalanche {...props} />;
    case 'LINK':
      return <IconChainlink {...props} />;
    case 'DOT':
      return <IconPolkadot {...props} />;
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};
