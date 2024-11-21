import { SortingIcon } from "@/assets/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/shadcn/select";

const GalleryControls = () => {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="max-w-[281px] w-min">
        <div className="hidden w-min sm:w-[281px] max-w-full sm:flex">
          <SelectValue />
        </div>
        <div className="sm:hidden">
          <SortingIcon />
        </div>
      </SelectTrigger>
      <SelectContent className="w-[281px] max-w-full rounded-[30px] py-1">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="favorite">Favorite</SelectItem>
        <SelectItem value="oldest">Oldest</SelectItem>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="good">Good Boy</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default GalleryControls;
