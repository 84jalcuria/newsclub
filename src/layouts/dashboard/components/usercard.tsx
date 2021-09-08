import Avatar from '@/components/common/avatar';

const UserCard = () => {
  return (
    <div className='relative bg-gray-700/30 h-32 mb-4 w-full rounded-md shadow-lg'>
      <div className='absolute inset-x-1/2'>
        <Avatar size={50} />
      </div>
    </div>
  );
};

export default UserCard;
