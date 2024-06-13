import * as React from "react";

type Props = {
  /** The size of the icon, 24px is default to match standard icons */
  size?: number;
  /** The color of the icon, defaults to the current text color */
  fill?: string;
};

export default function Icon({ size = 24, fill = "currentColor" }: Props) {
  return (
    <svg
      fill={fill}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
    >
      <path d="M15.7624 15.309L18.2171 11.588C18.5688 11.0797 18.7702 10.4684 18.7702 9.81395C18.7702 9.72425 18.7668 9.63787 18.76 9.5515L21.4981 13.6113C21.5084 13.6246 21.5118 13.6346 21.522 13.6478L21.5732 13.7243L21.5698 13.7276C21.8395 14.1561 21.9966 14.6578 22 15.1927C22 16.7409 20.7095 17.9967 19.1185 17.9967C18.142 17.9967 17.2851 17.5249 16.7627 16.804L16.7593 16.8073L16.7422 16.7807C16.7286 16.7608 16.7149 16.7375 16.6979 16.7176M15.5336 14.9635L17.1041 12.5814C15.1767 13.6317 12.5053 12.4636 12.2253 10.1993C12.2253 10.1927 12.2253 10.186 12.2219 10.1794L10.8938 8.35216H10.8904C10.3817 7.5515 9.47695 7.01661 8.43564 7.01661C8.43223 7.01661 8.43223 7.01661 8.42882 7.01661C8.4254 7.01661 8.4254 7.01661 8.42199 7.01661C7.38409 7.01661 6.47593 7.5515 5.97064 8.35216H5.96722L3.29737 12.4086C3.76852 12.1528 4.30795 12.01 4.88153 12.01C6.55446 12.01 7.93718 13.2359 8.13179 14.8106L9.63059 16.8571H9.63401C10.1564 17.5482 10.9997 18 11.9522 18H11.959H11.9659C12.9184 18 13.7583 17.5515 14.2841 16.8571H14.2875L14.3114 16.8206C14.3694 16.7409 14.424 16.6578 14.4787 16.5681L15.5336 14.9668V14.9635ZM12.6009 9.80731C12.6009 11.3588 13.8914 12.6146 15.4858 12.6146C17.0802 12.6146 18.3708 11.3588 18.3708 9.80731C18.3708 8.25581 17.0802 7 15.4858 7C13.8914 7 12.6009 8.25581 12.6009 9.80731ZM2 15.196C2 16.7442 3.29054 18 4.88153 18C6.47252 18 7.76306 16.7442 7.76306 15.196C7.76306 13.6478 6.47252 12.392 4.88153 12.392C3.29054 12.392 2 13.6478 2 15.196Z" />
    </svg>
  );
}