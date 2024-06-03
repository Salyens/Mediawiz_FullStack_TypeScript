import dynamic from 'next/dynamic';

const DynamicAnimationWrapper = dynamic(() => import('../index'), { ssr: false });

export default DynamicAnimationWrapper;
