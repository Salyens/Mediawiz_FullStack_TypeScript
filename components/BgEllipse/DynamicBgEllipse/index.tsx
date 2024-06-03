import dynamic from 'next/dynamic';

const DynamicBgEllipse = dynamic(() => import('../index'), { ssr: false });

export default DynamicBgEllipse;
