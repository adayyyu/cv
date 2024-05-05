import { Progress, Text, Title } from "@mantine/core";
import { languages } from "../data";
import { type Language, LanguageLevel } from "../types/language.type";
import { usePrintContext } from "../contexts/print";

const Language = ({
  language,
  isPrinting,
}: {
  language: Language;
  isPrinting: boolean;
}) => {
  const progress =
    language.level == LanguageLevel.MotherTongue
      ? 100
      : language.level == LanguageLevel.Fluent
      ? 75
      : 50;

  return isPrinting ? (
    <Text>
      {language.name}: {language.level}
    </Text>
  ) : (
    <>
      <Text>{language.name}</Text>
      <Text size="xs">{language.level}</Text>
      <Progress value={progress} size="xs" radius="xs" />
    </>
  );
};

const LanguageSection = () => {
  const { isPrinting } = usePrintContext();
  return (
    <>
      <Title order={3}>Languages</Title>
      {languages.map((language) => {
        return (
          <Language
            isPrinting={isPrinting}
            language={language}
            key={language.name}
          />
        );
      })}
    </>
  );
};

export default LanguageSection;
