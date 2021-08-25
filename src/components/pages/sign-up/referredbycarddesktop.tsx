import Avatar from '@/components/common/avatar';

interface IProps {
  fullname: string;
  email: string;
  avatarpath?: string;
}

const ReferredByCardDesktop = ({ fullname, email, avatarpath }: IProps) => {
  return (
    <div className='relative w-full bg-white rounded-md shadow-2xl p-4 flex justify-start items-center space-x-3'>
      <div className='flex-shrink-0'>
        <Avatar size={50} />
      </div>
      <div className='w-full'>
        <h1 className='text-gray-600 text-base font-medium tracking-wide capitalize'>
          {fullname}
        </h1>
        <h1 className='w-full text-gray-400 text-xs font-normal truncate'>
          <span className='mr-1'>email:</span>
          {email}
        </h1>
      </div>
      <h1 className='absolute -top-8 -left-2 text-green-600 text-sm capitalize'>
        referred by
      </h1>
    </div>
  );
};

export default ReferredByCardDesktop;
