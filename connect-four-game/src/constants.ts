type RulesScreenData = {
    title: string;
    objectiveSubtitle: string;
    objectiveDescription: string;
    howToPlaySubtitle: string;
    howToPlayDescriptions: string[];
}
export const rulesScreenData: RulesScreenData = {
    title: 'rules',
    objectiveSubtitle: 'objective',
    objectiveDescription: 'Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).',
    howToPlaySubtitle: 'how to play',
    howToPlayDescriptions: [
        'Red goes first in the first game.',
        'Players must alternate turns, and only one disc can be dropped in each turn.',
        'The game ends when there is a 4-in-a-row or a stalemate.',
        'The starter of the previous game goes second on the next game.',
    ],
};