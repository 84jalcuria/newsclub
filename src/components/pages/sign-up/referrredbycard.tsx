import Avatar from '@/components/common/avatar';

interface IProps {
  fullname: string;
  email: string;
  avatarpath?: string;
}

const ReferrredByCard = ({ fullname, email, avatarpath }: IProps) => {
  return (
    <div className='w-full border-[1px] border-gray-400 rounded-md p-2 flex justify-start items-center space-x-3'>
      <div className='flex-shrink-0'>
        <Avatar size={40} />
      </div>
      <div>
        <h1 className='text-gray-600 text-sm font-medium tracking-wide capitalize'>
          {fullname}
        </h1>
        <h1 className='text-gray-400 text-xs font-normal'>
          <span className='mr-1'>email:</span>
          {email}
        </h1>
      </div>
    </div>
  );
};

export default ReferrredByCard;
