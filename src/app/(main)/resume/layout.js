export default function ResumeLayout({ children }) {
  return (
    <>
      <div className="resume-back-nav">
        <a href="/">&larr; Back</a>
      </div>
      {children}
    </>
  );
}
