import React, { BaseSyntheticEvent, FC, useState } from "react";
import Autosuggest from "react-autosuggest";

type LangType = {
  name: string;
  year: number;
};

const languages: LangType[] = [
  {
    name: "CCC",
    year: 1972
  },
  {
    name: "CyberMan",
    year: 1972
  },
  {
    name: "EtherNet",
    year: 2012
  },
  {
    name: "Entertainer",
    year: 10000
  }
];

const getSuggestions = (value: string): LangType[] => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
      (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const ReactSuggestion: FC = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<LangType[]>([]);

  const getSuggestionValue = (suggestion: LangType): string => {
    const { name } = suggestion;

    return name;
  };

  const renderSuggestion = (suggestion: LangType) => {
    return <div>{suggestion.name}</div>;
  };

  const onChange = (
    event: BaseSyntheticEvent,
    { newValue }: { newValue: string }
  ) => {
    if (event) setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const suggestions: LangType[] = getSuggestions(value);
    setSuggestions(suggestions);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "cかeを入力してみて",
    value,
    onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default ReactSuggestion;