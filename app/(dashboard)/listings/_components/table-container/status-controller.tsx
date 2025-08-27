import { Switch } from "@/components/ui/switch";
import { Listing } from "@/types/listings/index";

interface Props {
  data: Listing;
}

const StatusController = ({ data }: Props) => {
  const editable = data.approvalStatus === "approved";
  return (
    <div>
      <Switch disabled={!editable} />
    </div>
  );
};

export default StatusController;
