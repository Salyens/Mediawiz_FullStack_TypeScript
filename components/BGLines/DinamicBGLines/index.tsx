import dynamic from 'next/dynamic';

const DynamicBGLines = dynamic(() => import('../index'), { ssr: false });

export default DynamicBGLines;
