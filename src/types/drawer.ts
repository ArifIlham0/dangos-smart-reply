import { RootStackParamList } from "./route";

type DrawerItem = {
    id: number;
    prefix: string;
    title: string;
    route: keyof RootStackParamList;
}

export type { DrawerItem }