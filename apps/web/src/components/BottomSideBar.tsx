import { useRouter, usePathname } from 'next/navigation';
import * as React from 'react';
import { IconType } from 'react-icons';

interface IBottomSideBarProps {
  icon: IconType;
  label: string;
  path: string;
}

const BottomSideBar: React.FunctionComponent<IBottomSideBarProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-col items-center cursor-pointer ${
        pathname.includes(props.path) && 'text-blue-500'
      }`}
      onClick={() => router.push(`/user/${props.path}`)}
    >
      <props.icon size={20} />
      <p className="text-slate-400 text-xs">{props.label}</p>
    </div>
  );
};

export default BottomSideBar;
