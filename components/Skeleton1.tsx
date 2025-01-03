import React from "react";

export default function SkeletonTable() {
  return (
    <section >
      <div className="container mx-auto">
        <div className="w-full max-w-4xl mx-auto">
          <div className=" gap-4">
            {/* Row 1 */}
            <div className="h-14 mb-2 p-4 rounded bg-gradient-to-r from-muted to-light animate-pulse"></div>
            <div className="h-32 mb-2 p-4 rounded bg-gradient-to-r from-muted to-light animate-pulse"></div>
            <div className="h-32 mb-2 p-4 rounded bg-gradient-to-r from-muted to-light animate-pulse"></div>
            <div className="h-32 mb-2 p-4 rounded bg-gradient-to-r from-muted to-light animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}