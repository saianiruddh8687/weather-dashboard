interface LoadingSkeletonProps {
  className?: string;
}

export default function LoadingSkeleton({
  className = "",
}: LoadingSkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-white/10 ${className}`}
    />
  );
}
