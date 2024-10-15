import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import { IconType } from 'react-icons';

interface IMenuItemProps {
  icon: IconType;
  label: string;
  path: string;
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`w-full flex gap-3 p-3 items-center cursor-pointer ${
        pathname.includes(props.path) &&
        'shadow-lg rounded-xl border-solid border border-slate-200'
      }`}
      onClick={() => router.push(`/user/${props.path}`)}
    >
      <props.icon size={20} />
      <p className="text-slate-400">{props.label}</p>
    </div>
  );
};

export default MenuItem;
