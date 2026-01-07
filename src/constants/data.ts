import { DrawerItem } from "../types/drawer";

const locales = [
  {
    tag: 'en',
    name: 'English',
    image: require('../../assets/images/united_kingdom.png'),
  },
  {
    tag: 'id',
    name: 'Indonesia',
    image: require('../../assets/images/indonesia.png'),
  },
];

const drawerItems: DrawerItem[] = [
  {
    id: 1,
    prefix: "BubbleChatIcon",
    title: "ask",
    route: 'Ask',
  },
];

export { locales, drawerItems };