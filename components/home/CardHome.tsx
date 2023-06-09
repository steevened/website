import { AcademloIcon } from '../svg/Svg';

import Avatar from '../atoms/Avatar';
import { Brand } from '../atoms/Brand';

export const CardHome = () => {
  return (
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-5">
      <Avatar />
      <div className="flex flex-col justify-center gap-3 bg-transparent text-start">
        <Brand />
        <h2 className="flex items-center text-sm text-slate-700 dark:text-slate-300 md:text-lg">
          Web Developer at{' '}
          <span className="px-2">
            <AcademloIcon />
          </span>
          Academlo
        </h2>
      </div>
    </div>
  );
};
