export type AnalyzeInput = { text?: string; imageBase64?: string };
export type AutopsyResult = { caseNumber: string; message: string; emotions: Record<string, number>; dangerLevel: number; interpretation: string; advice: string; shareText: string };
