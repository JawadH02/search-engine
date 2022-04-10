import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
export const items = [
    {
        id: 1,
        link: "/all",
        content: "All",
        icon: <SearchIcon />,
    },
    {
        id: 2,
        link: "/news",
        content: "News",
        icon: <DescriptionIcon />,
    },
    {
        id: 3,
        link: "/images",
        content: "Images",
        icon: <ImageIcon />,
    },
    {
        id: 4,
        link: "/shopping",
        content: "Shopping",
        icon: <LocalOfferIcon />,
    },
    {
        id: 5,
        link: "/maps",
        content: "Maps",
        icon: <RoomIcon />,
    },
    {
        id: 6,
        link: "/more",
        content: "More",
        icon: <MoreVertIcon />,
    },
]