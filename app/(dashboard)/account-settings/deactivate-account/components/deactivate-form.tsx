"use client";

import DeactivateReason from "./deactivate-reason";

const DeactivateForm = ({ token }: { token: string }) => {
  return (
    <div className="mt-8 space-y-8">
      <DeactivateReason token={token} />
    </div>
  );
};

export default DeactivateForm;
