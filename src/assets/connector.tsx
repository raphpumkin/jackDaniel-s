import { SvgResize } from "../hooks/svgResize";

const Connector = () => {
  const size = SvgResize("513", "700", "256.5", "350");
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 260 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="path3"
        d="M7.18198 1.7818C4.44703 5.16255 4.49801 13.1391 4.13218 16.4976C2.09518 35.1981 1.51883 52.1068 4.86976 70.4753C9.85046 97.7776 22.0798 135.621 49.0032 149.119C116.983 183.199 171.529 110.688 212.51 68.1123C224.039 56.1355 245.106 32.9666 263.342 46.7366C282.87 61.4836 286.393 94.1977 288.568 116.736C291.596 148.111 290.08 179.59 287.591 210.933C286.233 228.042 283.386 246.904 286.515 263.973"
        stroke="#baab8f"
        stroke-width="10"
        className="transition"
        stroke-linecap="round"
        stroke-dashoffset="1000"
        stroke-dasharray="1000"
      />
    </svg>
  );
};

export default Connector;
