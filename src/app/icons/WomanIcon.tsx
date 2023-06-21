import { IconWrapper } from "./IconWrapper";
import { IconProps } from "./types";

export const WomanIcon: React.FC<IconProps> = ({ fill, stroke, size }) => (
  <IconWrapper
    fill={fill}
    stroke={stroke}
    size={size ? size : "medium"}
    viewBox="0 0 1200 1200"
    path={
      <g>
        <path d="m722.4 873.6c-52.801-98.398-2.3984-338.4-16.801-472.8-12-100.8-48-192-79.199-199.2-31.199-7.1992-38.398 168-40.801 220.8-4.8008 100.8-67.199 268.8-84 304.8-14.398 36-50.398 266.4-60 285.6-7.1992 12-40.801 55.199-64.801 88.801-14.398 16.801-31.199 36-26.398 36 21.602 4.8008 108-48 127.2-45.602 19.199 2.3984 14.398 48 26.398 45.602 16.801-2.3984 26.398-201.6 48-273.6l91.199 4.8008c48 69.602 108 170.4 132 208.8 9.6016 16.801 19.199 67.199 31.199 64.801s-2.3984-103.2 4.8008-129.6c2.3984-12 28.801 4.8008 38.398 0 12.008-4.8047-98.395-86.406-127.2-139.2z" />
        <path d="m580.8 148.8c9.6016 12 26.398 21.602 45.602 16.801 4.8008 0 9.6016-2.3984 14.398-4.8008 26.398-7.1992 103.2-33.602 84-40.801-14.398-4.8008-33.602-9.6016-50.398-16.801v-7.1992c-4.8008-24-33.602-52.801-67.199-38.398-26.398 12-38.398 33.602-36 55.199-4.8008 2.3984-28.801 12-24 19.199 4.7969 12 33.598 16.801 33.598 16.801z" />
      </g>
    }
  />
);
