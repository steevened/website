import { AcademloIcon } from '../svg/Svg';
import me from '@/public/me.png';
import Image from 'next/image';

export const CardHome = () => {
  return (
    <div className="flex justify-center gap-5 ">
      <div className="relative flex w-16 h-16 p-1 overflow-hidden rounded-full md:w-24 md:h-24 backdrop-blur-lg ">
        <div className="z-10 overflow-hidden rounded-full">
          <Image src={me} alt="Steven Elias - @steevened" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-sky-700/50 to-purple-700/50 animate-spin-slow" />
      </div>
      <div className="flex flex-col justify-center gap-3 bg-transparent text-start">
        <h1 className="bg-transparent -tracking-tight text-gradient md:title-3">
          @STEEEVENED
        </h1>
        <h2 className="flex items-center text-sm text-gray-400 md:text-lg">
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