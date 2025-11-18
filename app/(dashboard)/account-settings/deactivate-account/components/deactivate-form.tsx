"use client";

import ConfirmDeactivation from "./confirm-deactivation";
import DeactivateReason from "./deactivate-reason";

const DeactivateForm = ({ token }: { token: string }) => {
  return (
    <div className="mt-8 space-y-8">
      <DeactivateReason token={token} />
      <ConfirmDeactivation token={token} />
    </div>
  );
};

export default DeactivateForm;
