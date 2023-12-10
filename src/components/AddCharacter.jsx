import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCharacter } from "../redux/characterSlice";

export const AddCharacter = () => {
  const [character, setCharacter] = useState({
    name: "",
  });
  const dispatch = useDispatch();

  const handleCreateCharacter = () => {
    dispatch(createCharacter({ id: Math.random(), name: character.name }));
    setCharacter({ name: "" });
  };
  return (
    <div>
      <input
        type="text"
        value={character.name}
        onChange={(e) => setCharacter({name: e.target.value})}
      />
      <button onClick={handleCreateCharacter}>Add Character</button>
    </div>
  );
};
