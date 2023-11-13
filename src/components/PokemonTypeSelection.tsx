const PokemonTypeSelection: React.FC<{
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}> = ({ selectType, selectedType }) => {
  return (
    <input
      value={selectedType}
      onChange={(e) => selectType(e.target.value)}
      className="flex items-center bg-neutral-200 w-1/2 px-2 py-1 text-lg text-neutral-900 mb-4 rounded-lg focus:outline-none placeholder:text-neutral-600"
      placeholder="Enter a type"
    />
  );
};

export default PokemonTypeSelection;
