import NavigationItem from '@/layouts/dashboard/components/mobile/navigationitem';
import SvgContact from '@/layouts/common/svgcontact';
import SvgAbout from '@/layouts/common/svgabout';
import SvgLogin from '@/layouts/common/svglogin';
import SvgSignUp from '@/layouts/common/svgsignup';
import SvgOverview from '@/layouts/common/svgoverview';
import SvgShortener from '@/layouts/common/svgshortener';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useSession } from 'utils/providers/sessionContextProvider';

interface IProps {
  onClose: Function;
}

const Navigation = ({ onClose }: IProps) => {
  const { state: sessionState } = useSession();
  const router = useRouter();
  const t = useTranslations('nav');
  const isSelected = (pathname: string) => pathname === router.asPath;

  return (
    <div className='w-full flex flex-col space-y-2'>
      {sessionState?.session ? (
        <>
          <NavigationItem
            label={t('overview')}
            selected={isSelected('/dashboard/overview')}
            href='/dashboard/overview'
            svg={<SvgOverview selected={isSelected('/dashboard/overview')} />}
            callback={onClose}
          />
          <NavigationItem
            label={t('shortener')}
            selected={isSelected('/dashboard/shortener')}
            href='/dashboard/shortener'
            svg={<SvgShortener selected={isSelected('/dashboard/shortener')} />}
            callback={onClose}
          />
        </>
      ) : (
        <>
          <NavigationItem
            label={t('sign-in')}
            selected={isSelected('/sign-in')}
            href='/sign-in'
            svg={<SvgLogin selected={isSelected('/sign-in')} />}
            callback={onClose}
          />
          <NavigationItem
            label={t('sign-up')}
            selected={isSelected('/sign-up')}
            href='/sign-up'
            svg={<SvgSignUp selected={isSelected('/sign-up')} />}
            callback={onClose}
          />
        </>
      )}

      <NavigationItem
        label={t('about')}
        selected={isSelected('/about')}
        href='/about'
        svg={<SvgAbout selected={isSelected('/about')} />}
        callback={onClose}
      />
      <NavigationItem
        label={t('contact')}
        selected={isSelected('/contact')}
        href='/contact'
        svg={<SvgContact selected={isSelected('/contact')} />}
        callback={onClose}
      />
    </div>
  );
};

export default Navigation;
