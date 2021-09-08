import Avatar from '@/components/common/avatar';

interface IProps {
  email: string;
}

const ProfileHeader = ({ email }: IProps) => {
  return (
    <div className='flex justify-center items-end space-x-3'>
      <h1 className='text-gray-400/80 text-xs font-bold tracking-tight'>
        {email}
      </h1>
      <Avatar size={25} />
    </div>
  );
};

export default ProfileHeader;
