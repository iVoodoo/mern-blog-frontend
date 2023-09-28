import ContentLoader from 'react-content-loader'

export const PostPreviewSkeleton = () => (
  <div style={{ textAlign: 'center' }}>
    <ContentLoader speed={2} width={700} height={300} viewBox='0 0 700 300' backgroundColor='#e6e6e6' foregroundColor='#f2f2f2'>
      <circle cx='45' cy='69' r='30' />
      <rect x='106' y='56' rx='0' ry='0' width='120' height='20' />
      <rect x='245' y='55' rx='0' ry='0' width='65' height='20' />
      <rect x='394' y='38' rx='0' ry='0' width='193' height='230' />
      <rect x='26' y='140' rx='0' ry='0' width='180' height='10' />
      <rect x='26' y='169' rx='0' ry='0' width='280' height='10' />
      <rect x='26' y='200' rx='0' ry='0' width='280' height='10' />
      <rect x='26' y='236' rx='0' ry='0' width='65' height='20' />
      <rect x='113' y='236' rx='0' ry='0' width='65' height='20' />
      <rect x='199' y='236' rx='0' ry='0' width='65' height='20' />
    </ContentLoader>
  </div>
)
