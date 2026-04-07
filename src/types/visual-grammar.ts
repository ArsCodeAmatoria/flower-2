/** Exhibition / production note — mood, colour, and light by narrative intent. */
export type VisualGrammarSection = {
  title: string;
  body: string;
};

export type VisualGrammar = {
  intro: string;
  sections: VisualGrammarSection[];
};
