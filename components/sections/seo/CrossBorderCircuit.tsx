import type { ReactNode } from "react";

/* Trace = faint groove + a flowing purple pulse on the same path. */
function Trace({ d }: { d: string }) {
  return (
    <>
      <path className="cbx-groove" d={d} />
      <path className="cbx-pulse" d={d} />
    </>
  );
}

const GoogleIcon = (
  <svg className="cbx-icon" width="50" height="50" viewBox="0 0 134 134" fill="none">
    <path d="M117.415 68.1191C117.415 63.9712 117.071 60.9462 116.333 57.8066H68.0249V76.5204H96.3774C95.8091 81.1679 92.7245 88.1712 85.8632 92.8783L85.767 93.5016L101.039 105.097L102.093 105.198C111.819 96.4075 117.415 83.4641 117.415 68.1191Z" fill="#fff" />
    <path d="M68.0339 117.421C81.9214 117.421 93.5814 112.938 102.102 105.206L85.8677 92.886C81.5227 95.856 75.6927 97.9277 68.0339 97.9277C61.5781 97.9282 55.284 95.9077 50.0348 92.1496C44.7856 88.3915 40.8446 83.0843 38.7648 76.9727L38.1598 77.0231L22.2785 89.0681L22.0723 89.6364C30.5331 106.104 47.9131 117.421 68.0339 117.421Z" fill="#fff" />
    <path d="M38.7668 76.9679C37.6395 73.7644 37.0555 70.3951 37.0389 66.9991C37.0389 63.525 37.6714 60.1654 38.6935 57.0304L38.666 56.3566L22.5877 44.1191L22.0606 44.3666C18.4663 51.3699 16.589 59.1274 16.5835 66.9991C16.5835 75.1208 18.5818 82.7979 22.0697 89.6316L38.7668 76.9679Z" fill="#fff" />
    <path d="M68.0339 36.0759C77.6956 36.0759 84.2085 40.1643 87.9256 43.5834L102.441 29.6913C93.5264 21.5697 81.9214 16.583 68.0339 16.583C47.9085 16.583 30.5331 27.8993 22.0723 44.3672L38.7098 57.0309C40.8075 50.9198 44.7606 45.6159 50.0175 41.8593C55.2744 38.1028 61.5728 36.0809 68.0339 36.0759Z" fill="#fff" />
  </svg>
);

const BarsIcon = (
  <svg className="cbx-icon" width="64" height="64" viewBox="0 0 134 134" fill="none">
    <rect x="6.14" y="68.82" width="24.9" height="51.2" rx="12.45" fill="#fff" />
    <rect x="54.55" y="43.64" width="24.9" height="76.39" rx="12.45" fill="#fff" />
    <rect x="102.96" y="13.98" width="24.9" height="106.05" rx="12.45" fill="#fff" />
  </svg>
);

const BaiduIcon = (
  <svg className="cbx-icon" width="50" height="50" viewBox="0 0 134 134" fill="none">
    <path d="M52.6225 65.7867C57.2777 57.9594 71.2021 51.6746 81.0115 67.0959C88.2392 77.5506 100.621 87.2227 100.621 87.2227C100.621 87.2227 109.899 94.5511 103.963 108.663C98.2866 122.194 78.146 116.019 76.4753 115.483L76.3654 115.442C76.3654 115.442 68.3733 112.842 59.0812 114.93C49.8074 117.026 41.8107 116.239 41.8107 116.239L41.6047 116.234C40.1033 116.188 30.7105 115.378 27.8679 102.648C24.7782 88.7881 38.6935 81.1942 39.7325 79.908C40.767 78.5897 47.981 73.637 52.6225 65.7867ZM57.1358 73.7423V83.0435H49.6289C49.6289 83.0435 42.1219 83.6752 39.4991 92.2624C38.5836 97.9933 40.3093 101.371 40.6068 102.095C40.9135 102.813 43.335 107.006 49.4275 108.237H63.5167V73.843L57.1358 73.7423ZM73.5595 83.7713L66.968 83.8812V101.989C66.968 101.989 67.261 106.498 73.5595 108.141H89.768V83.8812H82.7738V102.095H76.0908C76.0908 102.095 73.9577 101.783 73.5595 100.049V83.7713ZM57.0214 88.5822V102.589H51.3454C51.3454 102.589 47.3951 102.383 46.1912 97.7873C45.5687 95.7504 46.2828 93.3976 46.5941 92.4775C46.8824 91.5483 48.2099 89.4061 50.9472 88.5867L57.0214 88.5822ZM100.621 47.2208C110.169 47.2208 112.733 56.6503 112.733 59.7721C112.733 62.9213 114.033 76.2369 102.164 76.5024C90.2853 76.7633 89.7863 68.4004 89.7863 62.4041C89.7863 56.1147 91.0543 47.2208 100.621 47.2208ZM31.4795 39.9016C38.4509 39.2836 43.5867 46.9966 44.1223 51.4046C44.4427 54.2655 45.9212 67.3614 35.0819 69.7142C24.261 72.0715 20.2329 59.4196 21.423 53.4919C21.423 53.4919 22.7046 40.6889 31.4795 39.9016ZM71.9757 33.1133C72.6165 27.1169 79.7115 17.9347 85.392 19.253C91.0497 20.5575 96.2267 28.1514 95.1739 34.6788C94.1486 41.2153 89.0173 49.8437 81.0069 48.7863C73.0056 47.7518 71.1975 40.4417 71.9757 33.1133ZM55.2133 16.6484C61.1959 16.6484 66.0342 23.6015 66.0342 32.2024C66.0342 40.8033 61.1959 47.7656 55.2133 47.7656C49.2306 47.7656 44.3786 40.8033 44.3786 32.2024C44.3786 23.5969 49.2306 16.6484 55.2133 16.6484Z" fill="#fff" />
  </svg>
);

function Panel({
  variant,
  label,
  paths,
  chipClass,
  icon,
  caption,
  children,
}: {
  variant: string;
  label: string;
  paths: string[];
  chipClass: string;
  icon: ReactNode;
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className={"cbx-card " + variant}>
      <div className="cbx-label">{label}</div>
      <svg className="cbx-svg" viewBox="0 0 300 470" preserveAspectRatio="none">
        {paths.map((d, i) => (
          <Trace d={d} key={i} />
        ))}
      </svg>
      <div className="cbx-center">
        <div className={"cbx-chip " + chipClass}>
          <div className="cbx-chipborder" />
          {icon}
        </div>
        <span className="cbx-cap">{caption}</span>
      </div>
      {children}
    </div>
  );
}

const LEFT_PATHS = [
  "M300 178 L150 178",
  "M300 197 L150 197",
  "M300 216 L150 216",
  "M150 165 L235 108 L300 108",
  "M150 229 L235 286 L300 286",
];
const MID_PATHS = [
  "M150 178 L0 178",
  "M150 197 L0 197",
  "M150 216 L0 216",
  "M150 178 L300 178",
  "M150 197 L300 197",
  "M150 216 L300 216",
];
const RIGHT_PATHS = [
  "M0 178 L150 178",
  "M0 197 L150 197",
  "M0 216 L150 216",
  "M150 165 L65 108 L0 108",
  "M150 229 L65 286 L0 286",
];

export default function CrossBorderCircuit() {
  return (
    <div className="cbx-grid" aria-hidden="true">
      <Panel variant="cbx-left" label="Google" paths={LEFT_PATHS} chipClass="cbx-node" icon={GoogleIcon} caption="Google">
        <ul className="cbx-foot cbx-bullets">
          <li>hreflang &amp; international targeting</li>
          <li>Core Web Vitals &amp; rendering</li>
          <li>Entity &amp; schema coverage</li>
        </ul>
      </Panel>

      <Panel variant="cbx-mid" label="Maxlytics Engine" paths={MID_PATHS} chipClass="cbx-hub" icon={BarsIcon} caption="Maxlytics Engine">
        <div className="cbx-foot cbx-pillwrap">
          <span className="cbx-pill">Cross-Border Growth</span>
        </div>
      </Panel>

      <Panel variant="cbx-right" label="Baidu" paths={RIGHT_PATHS} chipClass="cbx-node" icon={BaiduIcon} caption="Baidu">
        <ul className="cbx-foot cbx-bullets">
          <li>Mainland indexing &amp; ICP readiness</li>
          <li>Chinese URL encoding</li>
          <li>Regional APAC CDN &amp; latency</li>
        </ul>
      </Panel>
    </div>
  );
}
