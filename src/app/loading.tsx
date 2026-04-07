export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-purple border-t-transparent" />
        <p style={{ fontSize: "14px", color: "#718096" }}>Loading...</p>
      </div>
    </div>
  );
}
