import { Button } from "@/components/ui/button";
import React from "react";
import { Download } from "lucide-react";
import PaymentsCard from "./payments-card";

const SubscriptionHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium uppercase tracking-[0.3rem]">
          Subscription Plans
        </h1>

        <Button>
          Download Report <Download />
        </Button>
      </div>

      <div className="mt-8">
        <PaymentsCard />
      </div>
    </div>
  );
};

export default SubscriptionHeader;
