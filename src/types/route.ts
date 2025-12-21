type RootStackParamList = {
    GettingStarted: undefined;
    Ask: undefined;
    Login: { isFromAsk?: boolean } | undefined;
    Register: { isFromGettingStarted?: boolean } | undefined;
    MainDrawer: undefined;
};

export type { RootStackParamList };