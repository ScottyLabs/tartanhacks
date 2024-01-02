export default function SpikyHills({ fill = '#FF7AA5', stroke = '#1028F1' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="125"
      height="125"
      viewBox="0 0 125 125"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.452 5.98744L39.179 50.8331L46.814 2.94018L2.37182 24.8239L9.09902 38.4857L27.1432 29.6006L19.0177 80.5706L78.4601 45.1565L56.8557 89.5611L82.4588 94.9207L60.13 110.357L68.7896 122.883L120.289 87.2814L79.0953 78.6582L114.452 5.98744Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
      />
    </svg>
  );
}
