import { Button } from "@/components/ui/button";
import { Listing } from "@/types/listings/index";

interface Props {
  data: Listing;
}
const ListingViewAction = ({}: Props) => {
  return (
    <div>
      <Button size="sm">View</Button>
    </div>
  );
};

export default ListingViewAction;
