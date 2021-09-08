import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useLang } from '@/utils/providers/langContextProvider';
import { useRouter } from 'next/router';
import en from '@/assets/en.png';
import es from '@/assets/es.png';
import Image from 'next/image';

const allLang = [
  { name: 'es', band: es },
  { name: 'en', band: en },
];

export default function Example() {
  const router = useRouter();
  const { lang, setLangStorage } = useLang();

  const onChangeLang = (value) => {
    const pathname = router.asPath;
    setLangStorage(value);
    router.replace(pathname, pathname, { locale: value });
  };
  return (
    <div className='w-full'>
      <Listbox value={lang} onChange={onChangeLang}>
        <div className='relative mt-1'>
          <Listbox.Button
            className='relative w-28 py-1 pl-3 pr-8 text-left bg-transparent font-semibold
           cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 
          focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 
          focus-visible:border-indigo-500 sm:text-sm'
          >
            <div className='flex justify-center items-center space-x-3'>
              <span className='block truncate text-gray-600'>{lang}</span>
              <div className='relative w-6 h-3 '>
                <Image
                  src={lang === 'es' ? es : en}
                  alt='email icon'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-600'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className='w-28 py-1 mt-1 overflow-auto text-base bg-gray-900/90
            rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 
            focus:outline-none sm:text-sm text-gray-800'
            >
              {allLang.map((lang, langIdx) => (
                <Listbox.Option
                  key={langIdx}
                  className='cursor-default select-none relative py-2 pl-8 pr-4'
                  value={lang.name}
                >
                  {({ selected, active }) => (
                    <>
                      <div className='flex justify-start items-end space-x-2'>
                        <span className='block tuncate text-gray-500 text-sm font-medium leading-none'>
                          {lang.name}
                        </span>
                        <div className='relative w-6 h-3 '>
                          <Image
                            src={lang.band}
                            alt='email icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                          <svg
                            className='w-4 h-4 text-gray-500'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={3}
                              d='M5 13l4 4L19 7'
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
