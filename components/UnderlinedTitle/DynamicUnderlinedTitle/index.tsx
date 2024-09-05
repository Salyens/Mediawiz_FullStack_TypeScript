import dynamic from 'next/dynamic';

const DynamicUnderlinedTitle = dynamic(() => import('../index'));

export default DynamicUnderlinedTitle;
