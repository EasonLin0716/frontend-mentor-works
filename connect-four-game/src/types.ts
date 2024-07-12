export type BoardData = {
    className: string;
    isPlayer1: boolean;
    isSet: boolean;
    isCircled: boolean;
}

export type BoardDataArray = BoardData[][];

export type GameStates = {
    isReady: number;
    isPlaying: number;
    player1IsWin: number;
    player2IsWin: number;
    isDraw: number;
    isPaused: number;
}

export type RulesScreenData = {
    title: string;
    objectiveSubtitle: string;
    objectiveDescription: string;
    howToPlaySubtitle: string;
    howToPlayDescriptions: string[];
}